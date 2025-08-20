import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1 className="logo">SkillSync</h1>
          <nav className="nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Tutors</a>
            <a href="#" className="nav-link">Students</a>
            <a href="#" className="nav-link">About</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Hero Section */}
          <section className="hero">
            <h2 className="hero-title">Connect. Learn. Grow.</h2>
            <p className="hero-subtitle">
              Find the perfect tutor or share your expertise with students worldwide
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Find a Tutor</button>
              <button className="btn btn-secondary">Become a Tutor</button>
            </div>
          </section>

          {/* Features Section */}
          <section className="features">
            <h3 className="section-title">Why Choose SkillSync?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <h4>🎯 Personalized Matching</h4>
                <p>Our algorithm matches you with the perfect tutor based on your learning style and goals.</p>
              </div>
              <div className="feature-card">
                <h4>💬 Interactive Learning</h4>
                <p>Engage in real-time sessions with video calls, screen sharing, and collaborative tools.</p>
              </div>
              <div className="feature-card">
                <h4>⭐ Quality Assurance</h4>
                <p>All tutors are verified and rated by students to ensure high-quality learning experiences.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 SkillSync. Connecting minds, building futures.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
