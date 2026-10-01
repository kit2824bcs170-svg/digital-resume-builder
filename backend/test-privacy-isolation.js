/**
 * test-privacy-isolation.js
 * Comprehensive automated verification script proving:
 * 1. User registration & JWT authentication
 * 2. Complete multi-user resume isolation
 * 3. Empty state for newly registered users
 * 4. Statistics isolation
 * 5. Complete IDOR protection (GET, PUT, PATCH, DELETE across accounts)
 * 6. Protection against client-side userId tampering
 * 7. Unauthenticated request protection (401)
 */
const http = require('http');

const API_HOST = '127.0.0.1';
const API_PORT = 5000;

function request(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        let parsed = null;
        try {
          parsed = JSON.parse(rawData);
        } catch {
          parsed = rawData;
        }
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: parsed,
        });
      });
    });

    req.on('error', (err) => reject(err));

    if (body) {
      req.write(typeof body === 'string' ? body : JSON.stringify(body));
    }
    req.end();
  });
}

async function runTests() {
  console.log('====================================================');
  console.log('🔒 RESUME BUILDER - PRIVACY & SECURITY ISOLATION TEST');
  console.log('====================================================\n');

  const ts = Date.now();
  const userAData = {
    name: 'Alice Smith',
    email: `alice.${ts}@example.com`,
    password: 'Password123!',
  };
  const userBData = {
    name: 'Bob Johnson',
    email: `bob.${ts}@example.com`,
    password: 'Password123!',
  };

  let tokenA = null;
  let userAId = null;
  let resumeAId = null;

  let tokenB = null;
  let userBId = null;
  let resumeBId = null;

  let passCount = 0;
  let failCount = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passCount++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failCount++;
    }
  }

  // 1. Unauthenticated request protection
  console.log('[STEP 1] Testing Unauthenticated Access Protection');
  const unauthRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  assert(unauthRes.statusCode === 401, `Unauthenticated GET /api/resumes rejected with 401 (got ${unauthRes.statusCode})`);

  // 2. Register User A (Alice)
  console.log('\n[STEP 2] Registering User A (Alice)');
  const regARes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/auth/register',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }, userAData);
  assert(regARes.statusCode === 201, `User A registered successfully (status ${regARes.statusCode})`);
  tokenA = regARes.data.token;
  userAId = regARes.data.user?.id;
  assert(!!tokenA && !!userAId, `User A received valid JWT and user ID (${userAId})`);

  // 3. User A Empty State Verification
  console.log('\n[STEP 3] Verifying User A initial state (Empty Dashboard)');
  const listAInitial = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenA}` },
  });
  assert(listAInitial.statusCode === 200, `User A GET /api/resumes status 200`);
  assert(Array.isArray(listAInitial.data.resumes) && listAInitial.data.resumes.length === 0, `User A has exactly 0 resumes initially`);
  assert(listAInitial.data.stats?.totalResumes === 0, `User A stats totalResumes is 0`);

  // 4. User A creates Resume A
  console.log('\n[STEP 4] User A creates Resume A');
  const createARes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenA}`,
    },
  }, {
    title: "Alice's Senior Software Engineer Resume",
    personalInfo: {
      fullName: 'Alice Smith',
      email: userAData.email,
      phone: '+1-555-0101',
      title: 'Senior Software Engineer',
    },
    selectedTemplate: 'modern',
  });
  assert(createARes.statusCode === 201, `Resume A created (status ${createARes.statusCode})`);
  resumeAId = createARes.data.resume?._id;
  assert(!!resumeAId, `Resume A ID received: ${resumeAId}`);

  // 5. Register User B (Bob)
  console.log('\n[STEP 5] Registering User B (Bob)');
  const regBRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/auth/register',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }, userBData);
  assert(regBRes.statusCode === 201, `User B registered successfully (status ${regBRes.statusCode})`);
  tokenB = regBRes.data.token;
  userBId = regBRes.data.user?.id;
  assert(!!tokenB && !!userBId && userBId !== userAId, `User B received distinct ID: ${userBId}`);

  // 6. User B Empty State Verification (Must NOT see Alice's Resume!)
  console.log('\n[STEP 6] Verifying User B does NOT see User A\'s resume (Privacy Isolation)');
  const listBInitial = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenB}` },
  });
  assert(listBInitial.statusCode === 200, `User B GET /api/resumes status 200`);
  assert(Array.isArray(listBInitial.data.resumes) && listBInitial.data.resumes.length === 0, `User B has 0 resumes (Alice's resume is completely invisible)`);
  assert(listBInitial.data.stats?.totalResumes === 0, `User B stats totalResumes is 0`);

  // 7. User B creates Resume B
  console.log('\n[STEP 7] User B creates Resume B');
  const createBRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenB}`,
    },
  }, {
    title: "Bob's Data Scientist Resume",
    personalInfo: {
      fullName: 'Bob Johnson',
      email: userBData.email,
      phone: '+1-555-0202',
      title: 'Data Scientist',
    },
    selectedTemplate: 'placement',
  });
  assert(createBRes.statusCode === 201, `Resume B created (status ${createBRes.statusCode})`);
  resumeBId = createBRes.data.resume?._id;
  assert(!!resumeBId, `Resume B ID received: ${resumeBId}`);

  // 8. Cross-User List Isolation Check
  console.log('\n[STEP 8] Cross-User Resume List Isolation');
  const listAFinal = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenA}` },
  });
  assert(listAFinal.data.resumes?.length === 1, `User A sees exactly 1 resume`);
  assert(listAFinal.data.resumes[0]?._id === resumeAId, `User A sees ONLY Resume A`);
  assert(listAFinal.data.resumes[0]?.personalInfo?.fullName === 'Alice Smith', `User A sees Alice's data`);

  const listBFinal = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenB}` },
  });
  assert(listBFinal.data.resumes?.length === 1, `User B sees exactly 1 resume`);
  assert(listBFinal.data.resumes[0]?._id === resumeBId, `User B sees ONLY Resume B`);
  assert(listBFinal.data.resumes[0]?.personalInfo?.fullName === 'Bob Johnson', `User B sees Bob's data`);

  // 9. IDOR Attack Tests - User A trying to access/modify/delete Bob's Resume
  console.log('\n[STEP 9] IDOR Attack Tests (User A attempting unauthorized actions on Bob\'s Resume B)');

  // 9a: GET Bob's resume with Alice's token
  const idorGetRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: `/api/resumes/${resumeBId}`,
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenA}` },
  });
  assert(idorGetRes.statusCode === 404, `Alice GET Bob's resume rejected with 404 Not Found (got ${idorGetRes.statusCode})`);

  // 9b: PUT Bob's resume with Alice's token
  const idorPutRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: `/api/resumes/${resumeBId}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenA}`,
    },
  }, {
    title: 'HACKED BY ALICE',
    personalInfo: { fullName: 'Hacked Name' },
  });
  assert(idorPutRes.statusCode === 404, `Alice PUT Bob's resume rejected with 404 Not Found (got ${idorPutRes.statusCode})`);

  // 9c: PATCH template on Bob's resume with Alice's token
  const idorPatchRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: `/api/resumes/${resumeBId}/template`,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenA}`,
    },
  }, { selectedTemplate: 'minimal' });
  assert(idorPatchRes.statusCode === 404, `Alice PATCH template on Bob's resume rejected with 404 Not Found (got ${idorPatchRes.statusCode})`);

  // 9d: DELETE Bob's resume with Alice's token
  const idorDeleteRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: `/api/resumes/${resumeBId}`,
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${tokenA}` },
  });
  assert(idorDeleteRes.statusCode === 404, `Alice DELETE Bob's resume rejected with 404 Not Found (got ${idorDeleteRes.statusCode})`);

  // 9e: Reverse IDOR: Bob attempting GET on Alice's resume
  const reverseIdorGetRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: `/api/resumes/${resumeAId}`,
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenB}` },
  });
  assert(reverseIdorGetRes.statusCode === 404, `Bob GET Alice's resume rejected with 404 Not Found (got ${reverseIdorGetRes.statusCode})`);

  // 10. Verify Bob's resume was completely unimpacted by the attack attempts
  console.log('\n[STEP 10] Verifying Bob\'s resume integrity after attack attempts');
  const bobResumeCheck = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: `/api/resumes/${resumeBId}`,
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenB}` },
  });
  assert(bobResumeCheck.statusCode === 200, `Bob can still retrieve his resume (status 200)`);
  assert(bobResumeCheck.data.resume?.title === "Bob's Data Scientist Resume", `Bob's resume title is intact and not altered`);
  assert(bobResumeCheck.data.resume?.personalInfo?.fullName === 'Bob Johnson', `Bob's candidate name is intact`);

  // 11. Client-Side Payload Tampering Protection
  console.log('\n[STEP 11] Client-Side userId Tampering Protection');
  const tamperCreateRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenA}`,
    },
  }, {
    title: 'Tampered Resume Attempt',
    userId: userBId, // Alice tries to inject Bob's userId in the payload!
    personalInfo: { fullName: 'Tampered Candidate' },
  });
  assert(tamperCreateRes.statusCode === 201, `Create request succeeded`);
  const tamperedResumeId = tamperCreateRes.data.resume?._id;
  const tamperedResumeOwner = tamperCreateRes.data.resume?.userId;
  assert(tamperedResumeOwner === userAId, `Backend ignored client userId and assigned to Alice (${tamperedResumeOwner} === ${userAId})`);

  // 12. Deletion Isolation Test
  console.log('\n[STEP 12] Deletion Isolation Verification');
  const deleteBobRes = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: `/api/resumes/${resumeBId}`,
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${tokenB}` },
  });
  assert(deleteBobRes.statusCode === 200, `Bob successfully deleted Resume B`);

  const bobListAfterDelete = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenB}` },
  });
  assert(bobListAfterDelete.data.resumes?.length === 0, `Bob now has 0 resumes`);

  const aliceListAfterBobDelete = await request({
    hostname: API_HOST,
    port: API_PORT,
    path: '/api/resumes',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${tokenA}` },
  });
  assert(aliceListAfterBobDelete.data.resumes?.length === 2, `Alice still has all her resumes (2) completely untouched`);

  console.log('\n====================================================');
  console.log(`🏁 TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
  console.log('====================================================');

  if (failCount > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTests().catch((err) => {
  console.error('Test execution error:', err);
  process.exit(1);
});
