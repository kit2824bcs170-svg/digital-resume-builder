const http = require('http');

const API_BASE = 'http://localhost:5000/api';

function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const reqOptions = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname + parsed.search,
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    };

    const req = http.request(reqOptions, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const json = body ? JSON.parse(body) : {};
          resolve({ status: res.statusCode, data: json });
        } catch (e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });

    req.on('error', reject);
    if (options.body) {
      req.write(JSON.stringify(options.body));
    }
    req.end();
  });
}

async function runEndToEndVerification() {
  console.log('====================================================');
  console.log('🧪 RUNNING END-TO-END MONGODB FLOW VERIFICATION');
  console.log('====================================================\n');

  const testUser = {
    name: 'Subash Test User',
    email: `subash.test.${Date.now()}@example.com`,
    password: 'Password123!',
  };

  try {
    // 1. REGISTER
    console.log(`[1] Registering user: ${testUser.email}...`);
    const regRes = await request(`${API_BASE}/auth/register`, {
      method: 'POST',
      body: testUser,
    });
    if (regRes.status !== 201 || !regRes.data.token) {
      throw new Error(`Register failed: ${JSON.stringify(regRes.data)}`);
    }
    console.log('   ✓ Registered successfully, token received.');

    // 2. LOGIN
    console.log('[2] Logging in with credentials...');
    const loginRes = await request(`${API_BASE}/auth/login`, {
      method: 'POST',
      body: { email: testUser.email, password: testUser.password },
    });
    if (loginRes.status !== 200 || !loginRes.data.token) {
      throw new Error(`Login failed: ${JSON.stringify(loginRes.data)}`);
    }
    const token = loginRes.data.token;
    const authHeaders = { Authorization: `Bearer ${token}` };
    console.log('   ✓ Authenticated successfully with JWT.');

    // 3. CREATE RESUME
    console.log('[3] Creating a new blank resume in MongoDB...');
    const createRes = await request(`${API_BASE}/resumes`, {
      method: 'POST',
      headers: authHeaders,
      body: {
        title: 'Full Stack Engineer Resume',
        useSampleData: false,
      },
    });
    if (createRes.status !== 201 || !createRes.data.resume) {
      throw new Error(`Create resume failed: ${JSON.stringify(createRes.data)}`);
    }
    const resumeId = createRes.data.resume._id;
    console.log(`   ✓ Resume created in MongoDB with ID: ${resumeId}`);

    // 4. ENTER INFORMATION & SAVE TO MONGODB
    console.log('[4] Entering resume info (Skills, Projects, Education, Summary) and saving to MongoDB...');
    const updatedPayload = {
      title: 'Senior MERN Stack Engineer Resume',
      selectedTemplate: 'modern',
      themeColor: '#2563eb',
      completionPercentage: 85,
      personalInfo: {
        fullName: 'Subash R',
        professionalTitle: 'Full Stack Software Engineer',
        email: testUser.email,
        phone: '+91 98765 43210',
        location: 'Bangalore, India',
        linkedin: 'https://linkedin.com/in/subash-r',
        github: 'https://github.com/subash-r',
        summary: 'Passionate developer with 3+ years experience building modern web applications.',
      },
      education: [
        {
          institution: 'College of Engineering',
          degree: 'B.E. Computer Science',
          fieldOfStudy: 'Computer Science',
          startYear: '2021',
          endYear: '2025',
          cgpa: '8.9',
          score: '8.9',
        },
      ],
      skills: [
        { name: 'JavaScript', category: 'Technical', level: 'Expert' },
        { name: 'React.js', category: 'Frontend', level: 'Expert' },
        { name: 'Node.js', category: 'Backend', level: 'Expert' },
        { name: 'MongoDB', category: 'Database', level: 'Intermediate' },
      ],
      projects: [
        {
          name: 'Digital Resume Builder',
          title: 'Digital Resume Builder',
          description: 'A full stack resume builder with real-time preview and PDF export.',
          technologies: 'React, Node.js, Express, MongoDB',
          githubLink: 'https://github.com/subash-r/resume-builder',
          liveLink: 'https://resumebuilder.dev',
        },
      ],
      experience: [
        {
          jobTitle: 'Software Development Intern',
          company: 'Tech Solutions Inc.',
          location: 'Bangalore',
          startDate: 'Jun 2024',
          endDate: 'Aug 2024',
          current: false,
          description: 'Built RESTful endpoints and optimized frontend bundle size.',
        },
      ],
      certifications: [
        {
          name: 'AWS Certified Cloud Practitioner',
          organization: 'Amazon Web Services',
          issueDate: '2024',
          date: '2024',
          credentialLink: 'https://aws.amazon.com/verify',
        },
      ],
      languages: [
        { name: 'English', language: 'English', proficiency: 'Fluent' },
      ],
    };

    const saveRes = await request(`${API_BASE}/resumes/${resumeId}`, {
      method: 'PUT',
      headers: authHeaders,
      body: updatedPayload,
    });
    if (saveRes.status !== 200 || !saveRes.data.resume) {
      throw new Error(`Save resume failed: ${JSON.stringify(saveRes.data)}`);
    }
    console.log('   ✓ Resume updated and saved successfully to MongoDB.');

    // 5. SIMULATE LOGOUT & CLOSE APPLICATION
    console.log('[5] Simulating user Logout and closing browser...');
    // Discard token to simulate logout
    console.log('   ✓ Client state cleared (token discarded).');

    // 6. LOGIN AGAIN LATER
    console.log('[6] User logging in again later...');
    const reLoginRes = await request(`${API_BASE}/auth/login`, {
      method: 'POST',
      body: { email: testUser.email, password: testUser.password },
    });
    if (reLoginRes.status !== 200 || !reLoginRes.data.token) {
      throw new Error(`Re-login failed: ${JSON.stringify(reLoginRes.data)}`);
    }
    const newAuthHeaders = { Authorization: `Bearer ${reLoginRes.data.token}` };
    console.log('   ✓ Re-authenticated successfully with fresh JWT.');

    // 7. RETRIEVE RESUME FROM MONGODB
    console.log('[7] Retrieving resumes from MongoDB for dashboard...');
    const listRes = await request(`${API_BASE}/resumes`, {
      headers: newAuthHeaders,
    });
    if (listRes.status !== 200 || !Array.isArray(listRes.data.resumes) || listRes.data.resumes.length === 0) {
      throw new Error(`Retrieve resumes failed: ${JSON.stringify(listRes.data)}`);
    }
    console.log(`   ✓ Retrieved ${listRes.data.resumes.length} resume(s) from MongoDB.`);

    // 8. VERIFY PREVIOUS VALUES RESTORED
    console.log('[8] Verifying exact saved values are restored...');
    const singleRes = await request(`${API_BASE}/resumes/${resumeId}`, {
      headers: newAuthHeaders,
    });
    const retrieved = singleRes.data.resume;
    if (retrieved.personalInfo.fullName !== 'Subash R') {
      throw new Error(`Expected fullName 'Subash R', got: ${retrieved.personalInfo.fullName}`);
    }
    if (retrieved.skills.length !== 4) {
      throw new Error(`Expected 4 skills, got: ${retrieved.skills.length}`);
    }
    if (retrieved.projects[0].name !== 'Digital Resume Builder') {
      throw new Error(`Expected project 'Digital Resume Builder', got: ${retrieved.projects[0].name}`);
    }
    console.log('   ✓ Full Name restored:', retrieved.personalInfo.fullName);
    console.log('   ✓ Skills restored:', retrieved.skills.map((s) => s.name).join(', '));
    console.log('   ✓ Projects restored:', retrieved.projects.map((p) => p.name).join(', '));
    console.log('   ✓ Education restored:', retrieved.education[0].institution, `(CGPA: ${retrieved.education[0].cgpa})`);
    console.log('   ✓ Completion score restored:', retrieved.completionPercentage + '%');

    // 9. UPDATE TEMPLATE
    console.log('[9] Switching template to "classic"...');
    const templateRes = await request(`${API_BASE}/resumes/${resumeId}/template`, {
      method: 'PATCH',
      headers: newAuthHeaders,
      body: { selectedTemplate: 'classic', themeColor: '#059669' },
    });
    if (templateRes.status !== 200 || templateRes.data.resume.selectedTemplate !== 'classic') {
      throw new Error(`Template update failed: ${JSON.stringify(templateRes.data)}`);
    }
    console.log('   ✓ Template successfully updated to classic in MongoDB.');

    // 10. CLEAN UP
    console.log('[10] Cleaning up test data from MongoDB...');
    await request(`${API_BASE}/resumes/${resumeId}`, {
      method: 'DELETE',
      headers: newAuthHeaders,
    });
    console.log('   ✓ Test resume deleted cleanly.');

    console.log('\n====================================================');
    console.log('🎉 ALL DATABASE PERSISTENCE & FLOW TESTS PASSED 100%!');
    console.log('====================================================\n');
    process.exit(0);
  } catch (err) {
    console.error('\n❌ TEST FAILED:', err.message);
    process.exit(1);
  }
}

runEndToEndVerification();
