export default function Home() {
  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="nav-container">

          <div className="nav-left">

            <div className="logo">
              GMT
            </div>

            <h2>
              GetMeTask
            </h2>

          </div>

          <div className="nav-center">

            <a href="#">Features</a>
            <a href="#">Roadmaps</a>
            <a href="#">Mock Interviews</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>

          </div>

          <div className="nav-right">

            <a
              href="#"
              className="login-btn"
            >
              Log in
            </a>

            <button className="start-btn">
              Start for Free
            </button>

          </div>

        </div>

      </nav>

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero-section">

        <div className="hero-container">

          {/* LEFT */}
          <div className="hero-left">

            <div className="hero-badge">

              ✦ AI Powered Placement Preparation

            </div>

            <h1>

              Prepare Smarter.
              <span>
                {" "}Get Placed Faster.
              </span>

            </h1>

            <p>

              AI roadmaps, smart notes,
              mock interviews, resume analysis
              and adaptive practice —
              everything you need in one focused workspace.

            </p>

            <div className="hero-buttons">

              <button className="primary-btn">

                Start Learning Free →

              </button>

              <button className="secondary-btn">

                ▶ Explore Features

              </button>

            </div>

            <div className="hero-users">

              <div className="user-images">

                <div className="user-circle"></div>
                <div className="user-circle"></div>
                <div className="user-circle"></div>
                <div className="user-circle"></div>

              </div>

              <div className="hero-rating">

                ⭐⭐⭐⭐⭐

                <span>
                  Trusted by 25,000+ learners
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="hero-right">

            <div className="dashboard-preview">

              {/* TOP */}
              <div className="preview-top">

                <div className="preview-logo">
                  GMT
                </div>

                <div className="preview-search">

                  Search anything...

                </div>

              </div>

              {/* MAIN */}
              <div className="preview-content">

                {/* LEFT */}
                <div className="preview-sidebar">

                  <span>Dashboard</span>
                  <span>Roadmap</span>
                  <span>Notes</span>
                  <span>Mock Interview</span>
                  <span>Practice</span>

                </div>

                {/* RIGHT */}
                <div className="preview-main">

                  <h3>
                    Welcome back 👋
                  </h3>

                  {/* MINI CARDS */}
                  <div className="mini-cards">

                    <div className="mini-card purple"></div>

                    <div className="mini-card blue"></div>

                    <div className="mini-card red"></div>

                    <div className="mini-card green"></div>

                  </div>

                  {/* PROGRESS */}
                  <div className="preview-progress">

                    <div className="progress-left">

                      <div className="progress-line">

                        <div className="line-fill"></div>

                      </div>

                    </div>

                    <div className="progress-right">

                      <div className="circle-progress">
                        72%
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          FEATURES
      ========================= */}

      <section className="features-section">

        <div className="features-container">

          <h2>

            Everything you need to crack placements

          </h2>

          <p>

            All the tools you need in one place.
            Save time. Stay consistent. Get results.

          </p>

          {/* GRID */}
          <div className="features-grid">

            <div className="feature-card">

              <div className="feature-icon purple-bg">
                🎯
              </div>

              <h3>
                AI Roadmaps
              </h3>

              <p>
                Personalized learning paths based on your goal.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon blue-bg">
                📄
              </div>

              <h3>
                Smart Notes
              </h3>

              <p>
                AI generated notes with simplified explanations.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon green-bg">
                🧾
              </div>

              <h3>
                Resume Analysis
              </h3>

              <p>
                Improve ATS score and optimize your resume.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon orange-bg">
                🎤
              </div>

              <h3>
                Mock Interviews
              </h3>

              <p>
                Practice interviews with AI feedback.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon pink-bg">
                💻
              </div>

              <h3>
                Adaptive Practice
              </h3>

              <p>
                Personalized questions based on performance.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon light-bg">
                📈
              </div>

              <h3>
                Progress Tracking
              </h3>

              <p>
                Visualize your growth with streaks and XP.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          WORKFLOW
      ========================= */}

      <section className="workflow-section">

        <div className="workflow-container">

          <h2>
            How GetMeTask works
          </h2>

          <div className="workflow-grid">

            <div className="workflow-step">

              <div className="step-number">
                1
              </div>

              <h3>
                Tell us your goal
              </h3>

              <p>
                Choose your role and create your roadmap.
              </p>

            </div>

            <div className="workflow-step">

              <div className="step-number">
                2
              </div>

              <h3>
                Learn & Practice
              </h3>

              <p>
                Learn with notes, tests and mock interviews.
              </p>

            </div>

            <div className="workflow-step">

              <div className="step-number">
                3
              </div>

              <h3>
                Track & Improve
              </h3>

              <p>
                Improve daily with analytics and recommendations.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          PRODUCT SECTION
      ========================= */}

      <section className="product-section">

        <div className="product-container">

          {/* LEFT */}
          <div className="product-left">

            <span className="small-title">

              Your All-in-One Workspace

            </span>

            <h2>

              One platform.
              Complete preparation.

            </h2>

            <ul>

              <li>Structured AI roadmaps</li>

              <li>Curated questions & practice</li>

              <li>Mock interviews with AI</li>

              <li>Resume analysis</li>

              <li>Progress tracking</li>

            </ul>

            <a href="#">
              Explore all features →
            </a>

          </div>

          {/* RIGHT */}
          <div className="product-right">

            <div className="roadmap-box">

              <h3>
                Frontend Developer Roadmap
              </h3>

              <div className="roadmap-item">

                <span>HTML, CSS & JS</span>

                <label>
                  Completed
                </label>

              </div>

              <div className="roadmap-item">

                <span>Data Structures</span>

                <label>
                  In Progress
                </label>

              </div>

              <div className="roadmap-item">

                <span>React JS</span>

                <label>
                  Upcoming
                </label>

              </div>

            </div>

            <div className="analytics-box">

              <div className="analytics-circle">

                68%

              </div>

              <p>

                32/47 Topics Completed

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          STATS
      ========================= */}

      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-box">

            <h2>25,000+</h2>

            <p>Active Learners</p>

          </div>

          <div className="stat-box">

            <h2>1000+</h2>

            <p>Practice Questions</p>

          </div>

          <div className="stat-box">

            <h2>50+</h2>

            <p>Mock Interviews</p>

          </div>

          <div className="stat-box">

            <h2>95%</h2>

            <p>Placement Success Rate</p>

          </div>

        </div>

      </section>

      {/* =========================
          TESTIMONIALS
      ========================= */}

      <section className="testimonial-section">

        <div className="testimonial-container">

          <h2>

            Loved by learners.
            Trusted by results.

          </h2>

          <div className="testimonial-grid">

            <div className="testimonial-card">

              <p>

                “GetMeTask helped me crack
                Microsoft with a 48 LPA package.”

              </p>

              <h4>
                Aman Verma
              </h4>

              <span>
                SDE at Microsoft
              </span>

            </div>

            <div className="testimonial-card">

              <p>

                “The AI notes and roadmaps
                saved me months of preparation.”

              </p>

              <h4>
                Riya Sharma
              </h4>

              <span>
                SDE at Amazon
              </span>

            </div>

            <div className="testimonial-card">

              <p>

                “Finally a focused platform
                for placement preparation.”

              </p>

              <h4>
                Harsh Gupta
              </h4>

              <span>
                SDE at Google
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          CTA SECTION
      ========================= */}

      <section className="cta-section">

        <div className="cta-container">

          <h2>

            Ready to start your placement journey?

          </h2>

          <p>

            Join thousands of learners preparing smarter.

          </p>

          <button>

            Start Learning Free →

          </button>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-logo">

            <div className="logo">
              GMT
            </div>

            <h3>
              GetMeTask
            </h3>

          </div>

          <p>

            AI powered placement preparation
            platform for next generation engineers.

          </p>

          <span>

            © 2025 GetMeTask. All rights reserved.
            Designed & Developed by Vishal Chaudhary

          </span>

        </div>

      </footer>

    </div>
  );
}