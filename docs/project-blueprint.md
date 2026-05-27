# GetMeTask — Complete Project Blueprint & Backend Documentation

# Overview

GetMeTask is an AI-powered career growth ecosystem focused on:

* Placement preparation
* Personalized learning
* AI-generated roadmaps
* Mock interviews
* Practice playground
* Skill tracking
* Student analytics
* Admin management
* AI recommendations

---

# Recommended Project Architecture

```text
GetMeTask/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── styles/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── context/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   ├── utils/
│   ├── config/
│   ├── database/
│   └── requirements.txt
│
├── ai-services/
│   ├── roadmap-generator/
│   ├── resume-analyzer/
│   ├── mock-interview/
│   └── recommendation-engine/
│
├── docs/
│   ├── backend-flow.md
│   ├── database-plan.md
│   ├── api-structure.md
│   ├── auth-flow.md
│   ├── deployment-plan.md
│   └── feature-roadmap.md
│
└── README.md
```

---

# Frontend Structure (Next.js)

```text
frontend/
│
├── app/
│   ├── page.js
│   ├── login/
│   ├── register/
│   ├── dashboard/
│   ├── profile/
│   ├── practice/
│   ├── roadmap/
│   ├── interview/
│   ├── resume/
│   ├── analytics/
│   └── admin/
│
├── components/
│   ├── Navbar/
│   ├── Sidebar/
│   ├── Cards/
│   ├── Heatmap/
│   ├── Charts/
│   ├── AIWidgets/
│   └── Forms/
│
├── styles/
├── hooks/
├── services/
├── utils/
└── context/
```

---

# Backend Structure (FastAPI Recommended)

```text
backend/
│
├── app/
│   ├── main.py
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   ├── database/
│   └── config/
```

---

# Recommended Tech Stack

| Layer          | Technology            |
| -------------- | --------------------- |
| Frontend       | Next.js               |
| Backend        | FastAPI               |
| Database       | PostgreSQL / Supabase |
| Authentication | JWT + OAuth           |
| AI             | Gemini API            |
| Styling        | Tailwind CSS          |
| Analytics      | PostHog               |
| Deployment     | Vercel + Render       |
| Storage        | Supabase Storage      |

---

# User Roles

## 1. Student

* Practice questions
* AI roadmap
* Mock interviews
* Dashboard analytics
* Resume upload
* Skill tracking

## 2. Admin

* Manage exams
* Manage questions
* Upload PDFs
* AI exam generation
* Student analytics

## 3. Super Admin

* Access control
* Admin management
* System analytics
* Subscription control

---

# Core Features

# 1. AI Roadmap Generator

## Flow

```text
Student Input
    ↓
Skill Analysis
    ↓
AI Recommendation
    ↓
Personalized Roadmap
```

## Inputs

* Current skills
* Target role
* Experience level
* Interests

## Output

* Daily tasks
* Learning path
* Practice schedule
* Interview preparation

---

# 2. Practice Playground

## Features

* Monaco editor
* Multi-language support
* Code execution
* Test cases
* Syntax highlighting
* Output console

## Supported Languages

* Python
* JavaScript
* Java
* C++

---

# 3. Student Dashboard

## Dashboard Components

* Activity heatmap
* Daily streaks
* XP system
* AI recommendations
* Progress charts
* Skill analytics
* Practice history

---

# 4. Resume Analyzer

## Flow

```text
Resume Upload
    ↓
AI Parsing
    ↓
ATS Analysis
    ↓
Improvement Suggestions
```

---

# 5. Mock Interview System

## Features

* AI questions
* Voice support
* Company-specific interviews
* Role-based interviews
* Feedback generation
* Confidence analysis

---

# Authentication Flow

```text
Register
    ↓
Email Verification
    ↓
Login
    ↓
JWT Token
    ↓
Protected Routes
```

---

# API Structure

# Authentication APIs

## Register

```http
POST /api/auth/register
```

### Request

```json
{
  "name": "Vishal",
  "email": "test@gmail.com",
  "password": "123456"
}
```

### Response

```json
{
  "success": true,
  "token": "jwt_token"
}
```

---

## Login

```http
POST /api/auth/login
```

---

## Logout

```http
POST /api/auth/logout
```

---

# Dashboard APIs

## Get Dashboard Data

```http
GET /api/dashboard
```

---

## Get Heatmap

```http
GET /api/dashboard/heatmap
```

---

## Get Analytics

```http
GET /api/dashboard/analytics
```

---

# Practice APIs

## Get Questions

```http
GET /api/practice/questions
```

---

## Submit Code

```http
POST /api/practice/submit
```

---

# Resume APIs

## Upload Resume

```http
POST /api/resume/upload
```

---

## Analyze Resume

```http
POST /api/resume/analyze
```

---

# Interview APIs

## Start Interview

```http
POST /api/interview/start
```

---

## Submit Answer

```http
POST /api/interview/answer
```

---

# Database Design

# Users Table

```sql
users
```

| Field      | Type      |
| ---------- | --------- |
| id         | UUID      |
| name       | VARCHAR   |
| email      | VARCHAR   |
| password   | VARCHAR   |
| role       | VARCHAR   |
| created_at | TIMESTAMP |

---

# Student Progress Table

```sql
student_progress
```

| Field      | Type      |
| ---------- | --------- |
| id         | UUID      |
| student_id | UUID      |
| skill      | VARCHAR   |
| progress   | INTEGER   |
| updated_at | TIMESTAMP |

---

# Practice Questions Table

```sql
practice_questions
```

| Field      | Type    |
| ---------- | ------- |
| id         | UUID    |
| title      | VARCHAR |
| difficulty | VARCHAR |
| topic      | VARCHAR |
| test_cases | JSON    |

---

# Exams Table

```sql
exams
```

| Field      | Type      |
| ---------- | --------- |
| id         | UUID      |
| title      | VARCHAR   |
| duration   | INTEGER   |
| created_by | UUID      |
| created_at | TIMESTAMP |

---

# AI Services Flow

```text
Frontend
    ↓
Backend API
    ↓
AI Service Layer
    ↓
Gemini API
    ↓
Processed Response
```

---

# Security Plan

## Security Features

* JWT authentication
* Password hashing
* Rate limiting
* Protected APIs
* Input validation
* SQL injection prevention
* XSS protection
* Role-based access

---

# Deployment Plan

# Frontend

* Vercel

# Backend

* Render / Railway

# Database

* Supabase PostgreSQL

# Storage

* Supabase Storage

---

# Future Features

## Phase 2

* AI coding mentor
* Real-time collaboration
* Community system
* LinkedIn-style profiles
* Company dashboards
* AI-generated notes
* Video explanations

---

# Future Exam System

## Features

* Secure exam environment
* Fullscreen lock
* Tab switching detection
* Auto-submit
* AI proctoring
* Center-based exams

---

# Team Workflow

## Daily Workflow

### Before Starting Work

```bash
git pull
```

### After Completing Work

```bash
git add .
git commit -m "completed feature"
git push
```

---

# Branch Structure

```text
main
frontend
backend
feature-auth
feature-dashboard
feature-ai
```

---

# Recommended Initial MVP

## Phase 1

* Landing page
* Login/Register
* Student dashboard
* Practice section
* Basic AI roadmap

## Phase 2

* Mock interviews
* Resume analyzer
* Admin panel
* Analytics

## Phase 3

* AI adaptive learning
* Community system
* Mobile app
* Company portal

---

# README Template

```md
# GetMeTask

AI-powered placement preparation and career growth ecosystem.

## Features
- AI Roadmaps
- Mock Interviews
- Practice Playground
- Resume ATS Analysis
- Student Dashboard
- Heatmap Tracking
- AI Recommendations

## Tech Stack
- Next.js
- FastAPI
- Supabase
- Gemini API

## Setup

### Frontend
npm install
npm run dev

### Backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

# Final Recommended Workflow

```text
Design
    ↓
Frontend
    ↓
API Planning
    ↓
Backend
    ↓
Database
    ↓
AI Integration
    ↓
Testing
    ↓
Deployment
```

---

# Important Notes

* Keep frontend and backend modular
* Use reusable components
* Maintain clean API contracts
* Push code regularly to GitHub
* Use environment variables for secrets
* Document everything properly
* Maintain scalable architecture

---

# Current Project Status

## Completed

* Next.js frontend setup
* Homepage
* Login page
* User dashboard UI
* GitHub integration

## Next Priority

* Backend setup
* Authentication APIs
* Database schema
* Dashboard dynamic data
* AI roadmap integration
