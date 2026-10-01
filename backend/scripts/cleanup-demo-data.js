/**
 * cleanup-demo-data.js
 * Safely removes legacy demo/test accounts and their attached resumes.
 * Targets only accounts matching demo patterns (@collegedemo.edu or subash.test.*).
 */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/digital_resume_builder';

async function runCleanup() {
  console.log('Connecting to database:', MONGODB_URI);
  await mongoose.connect(MONGODB_URI);

  const demoFilter = {
    $or: [
      { email: { $regex: /@collegedemo\.edu$/i } },
      { email: { $regex: /^subash\.test\./i } },
      { email: 'test.student@example.com' }
    ]
  };

  const demoUsers = await mongoose.connection.collection('users').find(demoFilter).toArray();
  console.log(`Found ${demoUsers.length} demo/test users to purge:`);
  
  for (const u of demoUsers) {
    const resumesDeleted = await mongoose.connection.collection('resumes').deleteMany({ userId: u._id });
    console.log(`- User: ${u.email} (${u.name}, ID: ${u._id}) -> deleted ${resumesDeleted.deletedCount} resumes`);
  }

  const usersDeleted = await mongoose.connection.collection('users').deleteMany(demoFilter);
  console.log(`Successfully removed ${usersDeleted.deletedCount} demo/test user accounts.`);

  const remainingUsers = await mongoose.connection.collection('users').countDocuments({});
  const remainingResumes = await mongoose.connection.collection('resumes').countDocuments({});
  console.log(`Database state: ${remainingUsers} users, ${remainingResumes} resumes remaining.`);

  await mongoose.disconnect();
  console.log('Cleanup finished.');
}

runCleanup().catch((err) => {
  console.error('Cleanup failed:', err);
  process.exit(1);
});
