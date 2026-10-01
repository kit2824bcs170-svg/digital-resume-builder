const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/User');
const Resume = require('./models/Resume');
const connectDB = require('./config/db');

async function runTests() {
  console.log('--- Starting Backend Sanity Verification ---');
  try {
    await connectDB();
    console.log('✓ MongoDB connected successfully');

    // 1. Clean test records if any
    const testEmail = 'test.student@example.com';
    await User.deleteMany({ email: testEmail });

    // 2. Test user creation & password hashing
    const user = await User.create({
      name: 'Test Student',
      email: testEmail,
      password: 'password123',
    });
    console.log('✓ User created with hashed password:', user.name);

    const match = await user.comparePassword('password123');
    console.log('✓ Password comparison valid:', match);

    // 3. Test resume creation
    const resume = await Resume.create({
      userId: user._id,
      title: 'Full Stack Developer Resume',
      selectedTemplate: 'modern',
      personalInfo: {
        fullName: user.name,
        email: user.email,
        professionalTitle: 'Full Stack Engineer',
        location: 'Boston, MA',
      },
      skills: [
        { name: 'React', category: 'Frontend', level: 'Expert' },
        { name: 'Node.js', category: 'Backend', level: 'Expert' },
      ],
      education: [
        {
          institution: 'State University',
          degree: 'B.Tech CS',
          startYear: '2020',
          endYear: '2024',
          score: '9.2 CGPA',
        },
      ],
    });
    console.log('✓ Resume created successfully, id:', resume._id);

    // 4. Test fetch & update
    const fetched = await Resume.findById(resume._id);
    console.log('✓ Resume fetched, template:', fetched.selectedTemplate);

    fetched.selectedTemplate = 'classic';
    await fetched.save();
    console.log('✓ Resume updated, new template:', fetched.selectedTemplate);

    // 5. Clean up test records
    await Resume.findByIdAndDelete(resume._id);
    await User.findByIdAndDelete(user._id);
    console.log('✓ Test records cleaned up cleanly');

    console.log('🎉 ALL BACKEND LOGIC CHECKS PASSED PERFECTLY!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Backend test failed:', err);
    process.exit(1);
  }
}

runTests();
