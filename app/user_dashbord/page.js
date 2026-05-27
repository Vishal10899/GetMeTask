import "../../styles/user_dashbord.css";

export default function ProfilePage() {

  return (

    <>

      {/* =========================================
           NAVBAR
      ========================================= */}
<nav className="navbar">

        <div className="nav-container">

          {/* LEFT */}

          <div className="nav-left">

            <div className="logo">
              GMT
            </div>

            <h2 className="brand-name">
              GetMeTask
            </h2>

          </div>

          {/* CENTER */}

          <div className="nav-center">

            <a href="#">Roadmap</a>

            <a href="#">Notes</a>

            <a href="#">Resume</a>

            <a href="#">Interview</a>

          </div>

          {/* RIGHT */}

          <div className="nav-right">

            <input
              type="text"
              className="search-box"
              placeholder="Search topics..."
            />

            <span>🔥 12</span>

            <div className="profile">
              V
            </div>

          </div>

        </div>

      </nav>

      {/* =========================================
           HERO SECTION
      ========================================= */}

      <section className="hero-section">

        <div className="hero-left">

          <img
            src="https://i.pravatar.cc/150?img=12"
            className="hero-image"
          />

          <div className="hero-user-info">

            <h1>
              Good Morning, Vishal 🌞
            </h1>

            <div className="hero-meta">

              <span>
                @vishalkumar
              </span>

              <span className="dot">
                •
              </span>

              <span>
                Delhi, India
              </span>

            </div>

            <div className="hero-tags">

              <span>
                AI/ML
              </span>

              <span>
                GenAI
              </span>

              <span>
                Placement Prep
              </span>

            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">

            <h2>
              78%
            </h2>

            <p>
              Accuracy
            </p>

          </div>

          <div className="hero-card">

            <h2>
              48
            </h2>

            <p>
              Tests
            </p>

          </div>

          <div className="hero-card">

            <h2>
              14
            </h2>

            <p>
              Day Streak
            </p>

          </div>

          <button className="edit-profile-btn">

            Edit Profile

          </button>

        </div>

      </section>

      {/* =========================================
           MAIN DASHBOARD
      ========================================= */}

      <div className="dashboard-layout">

        {/* =====================================
             LEFT SECTION
        ====================================== */}

        <div className="left-section">

          {/* GROWTH MAP */}

          <div className="card growth-card">

            <h2 className="card-title">

              Growth Map

            </h2>

            <div className="growth-map">

              <div className="center-circle">

                AI

                <span>
                  72%
                </span>

              </div>

              <div className="small-circle top">
                React
              </div>

              <div className="small-circle left">
                SQL
              </div>

              <div className="small-circle right">
                DSA
              </div>

              <div className="small-circle bottom">
                Node
              </div>

            </div>

          </div>

          {/* SKILLS */}

          <div className="card">

            <h2 className="card-title">

              Skills

            </h2>

            <div className="skill">

              <div className="skill-info">

                <span>
                  Frontend
                </span>

                <span>
                  72%
                </span>

              </div>

              <div className="progress-bar">

                <div className="progress frontend"></div>

              </div>

            </div>

            <div className="skill">

              <div className="skill-info">

                <span>
                  Backend
                </span>

                <span>
                  58%
                </span>

              </div>

              <div className="progress-bar">

                <div className="progress backend"></div>

              </div>

            </div>

            <div className="skill">

              <div className="skill-info">

                <span>
                  DSA
                </span>

                <span>
                  45%
                </span>

              </div>

              <div className="progress-bar">

                <div className="progress dsa"></div>

              </div>

            </div>

          </div>

          {/* STRONG WEAK */}

          <div className="card">

            <h2 className="card-title">

              Strong & Weak Areas

            </h2>

            <div className="area-item strong">

              <span>
                ● Strong
              </span>

              <p>
                HTML, CSS, React
              </p>

            </div>

            <div className="area-item weak">

              <span>
                ● Weak
              </span>

              <p>
                Dynamic Programming, SQL
              </p>

            </div>

          </div>

        </div>

        {/* =====================================
             RIGHT SECTION
        ====================================== */}

        <div className="right-section">

          {/* MONTHLY ACTIVITY */}

          <div className="card monthly-card">

            <div className="activity-header">

              <h2 className="card-title">

                Last 3 Months Activity

              </h2>

              <span className="activity-label">

                Consistency Tracker

              </span>

            </div>

            <div className="months-wrapper">

              {/* JAN */}

              <div className="month-block">

                <h3>
                  JAN
                </h3>

                <div className="heatmap-grid">

                  {[...Array(35)].map((_, i) => (

                    <div
                      key={i}
                      className={`heat ${
                        i % 2 === 0
                          ? "active"
                          : ""
                      }`}
                    ></div>

                  ))}

                </div>

              </div>

              {/* FEB */}

              <div className="month-block">

                <h3>
                  FEB
                </h3>

                <div className="heatmap-grid">

                  {[...Array(35)].map((_, i) => (

                    <div
                      key={i}
                      className={`heat ${
                        i % 3 === 0
                          ? "active"
                          : ""
                      }`}
                    ></div>

                  ))}

                </div>

              </div>

              {/* MAR */}

              <div className="month-block">

                <h3>
                  MAR
                </h3>

                <div className="heatmap-grid">

                  {[...Array(35)].map((_, i) => (

                    <div
                      key={i}
                      className={`heat ${
                        i % 2 !== 0
                          ? "active"
                          : ""
                      }`}
                    ></div>

                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* NEXT TOPIC */}

          <div className="card next-topic-card">

            <div className="next-top">

              <h2 className="card-title">

                Next Topic

              </h2>

              <button className="start-btn">

                Start Learning

              </button>

            </div>

            <div className="topic-item">

              <div className="topic-left">

                <div className="topic-icon">

                  {"</>"}

                </div>

                <div>

                  <h3>
                    Dynamic Programming
                  </h3>

                  <p>
                    Weak topic detected
                  </p>

                </div>

              </div>

              <div className="topic-arrow">

                ›

              </div>

            </div>

          </div>

          {/* SUBMITTED TESTS */}

          <div className="card">

            <h2 className="card-title">

              Submitted Tests

            </h2>

            <div className="test-item">

              <div>

                <h3>
                  Frontend Mock Test
                </h3>

                <p>
                  Submitted 2 hours ago
                </p>

              </div>

              <div className="score">

                78%

              </div>

            </div>

            <div className="test-item">

              <div>

                <h3>
                  Aptitude Test
                </h3>

                <p>
                  Submitted Yesterday
                </p>

              </div>

              <div className="score">

                64%

              </div>

            </div>

          </div>

          {/* AI RECOMMENDATIONS */}

          <div className="card">

            <h2 className="card-title">

              AI Recommendations

            </h2>

            <div className="recommend-item">

              <div className="recommend-left">

                <div className="recommend-icon">

                  ◎

                </div>

                <div>

                  <h3>
                    Dynamic Programming
                  </h3>

                  <p>
                    Practice more questions from this topic
                  </p>

                </div>

              </div>

              <button className="recommend-btn">

                Start

              </button>

            </div>

            <div className="recommend-item">

              <div className="recommend-left">

                <div className="recommend-icon">

                  ◈

                </div>

                <div>

                  <h3>
                    SQL Optimization
                  </h3>

                  <p>
                    Improve your backend concepts
                  </p>

                </div>

              </div>

              <button className="recommend-btn">

                Start

              </button>

            </div>

          </div>

        </div>

      </div>

    </>

  );
}