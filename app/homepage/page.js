import "../../styles/homepage.css";

export default function DashboardPage() {

  return (

    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

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

      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div className="container">

        {/* =========================
            TOP CARDS
        ========================= */}

        <div className="top-cards">

          {/* CARD 1 */}

          <div className="top-card roadmap-card">

            <div>

              <h3>
                Generate Roadmap
              </h3>

              <p>
                AI roadmap based on your goal
              </p>

              <button>
                Generate
              </button>

            </div>

            <div className="top-icon">
              🎯
            </div>

          </div>

          {/* CARD 2 */}

          <div className="top-card notes-card">

            <div>

              <h3>
                Generate Notes
              </h3>

              <p>
                AI notes for any topic
              </p>

              <button>
                Create Notes
              </button>

            </div>

            <div className="top-icon">
              📄
            </div>

          </div>

          {/* CARD 3 */}

          <div className="top-card resume-card">

            <div>

              <h3>
                Resume Analysis
              </h3>

              <p>
                Improve your ATS score
              </p>

              <button>
                Upload
              </button>

            </div>

            <div className="top-icon">
              🧾
            </div>

          </div>

          {/* CARD 4 */}

          <div className="top-card interview-card">

            <div>

              <h3>
                Mock Interview
              </h3>

              <p>
                Practice interview rounds
              </p>

              <button>
                Start
              </button>

            </div>

            <div className="top-icon">
              🎤
            </div>

          </div>

        </div>

        {/* =========================
            MAIN LAYOUT
        ========================= */}

        <div className="content-layout">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="main-content">

            <div className="latest-content">

              {/* HEADER */}

              <div className="section-header">

                <h2>
                  Latest Content
                </h2>

                <a href="#">
                  View All →
                </a>

              </div>

              {/* TABS */}

              <div className="content-tabs">

                <button className="active">
                  All
                </button>

                <button>
                  DSA
                </button>

                <button>
                  Python
                </button>

                <button>
                  DBMS
                </button>

                <button>
                  OS
                </button>

                <button>
                  Aptitude
                </button>

              </div>

              {/* CONTENT */}

              <div className="content-scroll">

                <div className="content-list">

                  {/* ITEM 1 */}

                  <div className="content-item">

                    <div className="content-left">

                      <div className="content-icon purple">
                        {}
                      </div>

                      <div>

                        <h3>
                          Two Pointer Technique
                        </h3>

                        <p>
                          Complete interview preparation guide with questions
                        </p>

                        <div className="content-meta">

                          <span>
                            45 Questions
                          </span>

                          <span>•</span>

                          <span>
                            1 Hour
                          </span>

                          <span>•</span>

                          <span>
                            Intermediate
                          </span>

                        </div>

                      </div>

                    </div>

                    <a href="#">
                      Continue →
                    </a>

                  </div>

                  {/* ITEM 2 */}

                  <div className="content-item">

                    <div className="content-left">

                      <div className="content-icon green">
                        Py
                      </div>

                      <div>

                        <h3>
                          Python List Comprehension
                        </h3>

                        <p>
                          Learn advanced python shortcuts with examples
                        </p>

                        <div className="content-meta">

                          <span>
                            20 Exercises
                          </span>

                          <span>•</span>

                          <span>
                            35 Min
                          </span>

                          <span>•</span>

                          <span>
                            Beginner
                          </span>

                        </div>

                      </div>

                    </div>

                    <a href="#">
                      Start →
                    </a>

                  </div>

                  {/* ITEM 3 */}

                  <div className="content-item">

                    <div className="content-left">

                      <div className="content-icon yellow">
                        📊
                      </div>

                      <div>

                        <h3>
                          Time & Work Questions
                        </h3>

                        <p>
                          Shortcut methods for placement aptitude
                        </p>

                        <div className="content-meta">

                          <span>
                            30 Questions
                          </span>

                          <span>•</span>

                          <span>
                            50 Min
                          </span>

                          <span>•</span>

                          <span>
                            Moderate
                          </span>

                        </div>

                      </div>

                    </div>

                    <a href="#">
                      Practice →
                    </a>

                  </div>

                  {/* ITEM 4 */}

                  <div className="content-item">

                    <div className="content-left">

                      <div className="content-icon purple">
                        SQL
                      </div>

                      <div>

                        <h3>
                          DBMS SQL Interview Set
                        </h3>

                        <p>
                          Most asked SQL queries in product companies
                        </p>

                        <div className="content-meta">

                          <span>
                            60 Questions
                          </span>

                          <span>•</span>

                          <span>
                            90 Min
                          </span>

                          <span>•</span>

                          <span>
                            Advanced
                          </span>

                        </div>

                      </div>

                    </div>

                    <a href="#">
                      Open →
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="right-panel">

            <div className="right-panel-card">

              {/* CONTINUE */}

              <div className="continue-section">

                <h2>
                  Continue Journey 👋
                </h2>

                <p>
                  Pick up where you left off
                </p>

                <div className="continue-course">

                  <div className="course-icon">
                    {"</>"}
                  </div>

                  <div>

                    <h3>
                      Binary Search
                    </h3>

                    <span>
                      43% Completed
                    </span>

                  </div>

                </div>

                <button>
                  Continue Learning →
                </button>

              </div>

              {/* DIVIDER */}

              <div className="panel-divider"></div>

              {/* ITEM */}

              <div className="panel-item">

                <div>

                  <h4>
                    Arrays in DSA
                  </h4>

                  <p>
                    20 Questions
                  </p>

                </div>

                <a href="#">
                  Start →
                </a>

              </div>

              {/* DIVIDER */}

              <div className="panel-divider"></div>

              {/* ITEM */}

              <div className="panel-item">

                <div>

                  <h4>
                    Python Basics
                  </h4>

                  <p>
                    15 Exercises
                  </p>

                </div>

                <a href="#">
                  Practice →
                </a>

              </div>

              {/* DIVIDER */}

              <div className="panel-divider"></div>

              {/* ITEM */}

              <div className="panel-item">

                <div>

                  <h4>
                    DBMS Interview Qs
                  </h4>

                  <p>
                    Top company questions
                  </p>

                </div>

                <a href="#">
                  Open →
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}