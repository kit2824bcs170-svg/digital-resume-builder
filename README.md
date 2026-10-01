# Digital Resume Builder

> **College Mini Project** — A modern, full-stack, responsive web application for creating, customizing, previewing in real-time, persisting to MongoDB, and downloading professional A4 resumes.

---

## 1. Project Infrastructure & System Architecture

```
                         ┌──────────────────────┐
                         │        USER          │
                         │ Laptop / Mobile      │
                         └──────────┬───────────┘
                                    │
                                    ▼
                    ┌───────────────────────────┐
                    │      FRONTEND LAYER       │
                    │                           │
                    │ React.js + Vite           │
                    │ HTML + CSS + JavaScript   │
                    │ Responsive UI             │
                    └─────────────┬─────────────┘
                                  │
                           REST API / Axios
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │       BACKEND LAYER       │
                    │                           │
                    │ Node.js + Express.js      │
                    │ Authentication            │
                    │ API Controllers           │
                    │ Business Logic            │
                    └─────────────┬─────────────┘
                                  │
                              Mongoose
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │       DATABASE LAYER      │
                    │                           │
                    │        MongoDB            │
                    │                           │
                    │ User Data                 │
                    │ Resume Data               │
                    │ Education                 │
                    │ Skills                    │
                    │ Projects                  │
                    │ Experience                │
                    └───────────────────────────┘
                                  │
                                  ▼
                    ┌───────────────────────────┐
                    │      OUTPUT SERVICES      │
                    │                           │
                    │ Resume Templates          │
                    │ Live Preview              │
                    │ PDF Generator             │
                    │ Download Resume           │
                    └───────────────────────────┘
```

---

## 2. Core Project Requirements

1. **Multi-Concept Analysis**: Combines modular React components, Context API state management, form validation, CSS Flexbox & CSS Grid, RESTful API architecture, MongoDB Mongoose ODM, and vector A4 PDF export.
2. **System Architecture**: Multi-tier separation between the presentation tier (Vite SPA), business tier (Express REST API with JWT middleware), and persistence tier (MongoDB).
3. **API & Database Integration**: Protected CRUD endpoints, centralized Axios client with interceptors, schema validation, and automatic field-alias synchronization.
4. **Problem Diagnosis & Solution**: Solves fragile offline formatting, lack of live split-screen feedback, risk of overwritten data, and multi-version management.

---

## 3. Technology Stack

- **Frontend**: React 18, Vite, React Router 7, Axios, Lucide React, html2pdf.js, canvas-confetti.
- **Backend**: Node.js, Express.js, JSON Web Tokens (JWT), bcryptjs, CORS, dotenv.
- **Database**: MongoDB (port 27017 or remote connection string), Mongoose ODM.

---

## 4. Database Models

### User Schema (`models/User.js`)
- `name`: String (required, trimmed)
- `email`: String (required, unique, lowercased)
- `password`: String (hashed using bcrypt salt rounds 10)
- `createdAt`: Date

### Resume Schema (`models/Resume.js`)
- `userId`: ObjectId (ref: 'User', indexed)
- `title`: String
- `personalInfo`: `{ fullName, professionalTitle, email, phone, location, linkedin, github, portfolio, summary }`
- `education`: `[{ institution, degree, fieldOfStudy, startYear, endYear, score, cgpa }]`
- `skills`: `[{ name, category, level }]`
- `projects`: `[{ name, title, description, technologies, githubLink, projectLink, liveLink }]`
- `experience`: `[{ jobTitle, company, location, startDate, endDate, current, description }]`
- `certifications`: `[{ name, organization, issueDate, date, credentialUrl, credentialLink }]`
- `achievements`: `[{ title, description, date }]`
- `languages`: `[{ language, name, proficiency }]`
- `selectedTemplate`: `'classic' | 'modern' | 'minimal'`
- `themeColor`: String (hex code)
- `completionPercentage`: Number (0 - 100)
- `timestamps`: `{ createdAt, updatedAt }`

---

## 5. REST API Endpoints

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/auth/register` | Public | Register user & return JWT token |
| `POST` | `/api/auth/login` | Public | Authenticate user & return JWT token |
| `GET` | `/api/auth/me` | Protected | Get current authenticated user profile |
| `GET` | `/api/resumes` | Protected | List all resumes belonging to user + stats |
| `POST` | `/api/resumes` | Protected | Create a new blank or sample resume |
| `GET` | `/api/resumes/:id` | Protected | Retrieve a single resume by ID (ownership checked) |
| `PUT` | `/api/resumes/:id` | Protected | Save/update complete resume document |
| `DELETE` | `/api/resumes/:id` | Protected | Delete a resume from MongoDB |
| `PATCH` | `/api/resumes/:id/template` | Protected | Update template selection & accent color |
| `GET` | `/api/health` | Public | Server health status check |

---

## 6. How To Run Locally

### Prerequisites
- Node.js (v18+)
- MongoDB service running on `mongodb://127.0.0.1:27017`

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
# Server runs on http://localhost:5000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

### 3. Run Automated Tests
```bash
cd backend
npm run test:flow
```

---

## 7. Key Features Demonstrated

- **Real-Time Live Preview**: Split-screen desktop UI where edits immediately render inside standard A4 canvas templates.
- **Persistent MongoDB Storage**: Edits auto-save or save explicitly; logging out and logging in restores exact resume values.
- **Resume Quality Score**: Dynamic 0-100% completion bar with completed/missing checklists and confetti on 100%.
- **Actionable Suggestions**: Intelligent feedback identifying missing summary, weak project descriptions, missing links, or skills.
- **3 Distinct Templates**: Classic Corporate, Modern Accent (two-column), and Minimalist ATS.
- **A4 PDF Download**: High-resolution vector PDF export with proper printable page margins.
- **Instant Demo**: 1-click evaluation access without tedious registration forms.
