import React, { useState, useEffect } from "react";
import user from "./assets/user.jpg";
import PixelTransition from "../ReactBits/PixelTransition/PixelTransition";
import "./homePages.css";
import Contact from "../components/contact";

const HomePage = () => {
  const [showPopup, setshowPopup] = useState(false);

  const openPopup = () => {
    setshowPopup(true);
  };

  const closePopup = () => {
    setshowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".post-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              {/* &times; */}
            </span>
            <Contact />
          </div>
        </div>
      )}
      <div className="container">
        <header>
          <nav className="navbar">
            <div className="logo">
              <img
                src={user}
                alt="Utakarsh"
                style={{
                  width: 40,
                  borderRadius: "50%",
                  marginRight: 10,
                  marginBottom: -10,
                  marginTop: 5,
                }}
              />
              Utakarsh
            </div>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#" onClick={openPopup}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className={showPopup ? "blurred" : ""}>
          <section className="hero">
            <div className="hero-text">
              <h1>
                Hi, It's Me <span style={{ color: "#275dca" }}>Utakarsh</span>
                <br />
                <div className="typewriter-container">
                  <h4 className="typewriter-text">
                    Full{" "}
                    <span style={{ color: "#275dca" }}>Stack Developer</span>
                  </h4>
                </div>
              </h1>
              <p style={{ fontSize: 20 }}>
                I am a full stack developer with a passion for creating
                beautiful and functional web applications. I am a quick learner
                and I am always looking to improve my skills.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="https://drive.google.com/file/d/1KWcZL9IJyCdpLkrF9kvnjVNe2wd2u2YT/view?usp=drive_link"
                  className="btn"
                >
                  Download Resume
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/arbitronmaths" target="_blank">
                  <i
                    className="fab fa-github"
                    style={{
                      fontSize: "2.0rem",
                      color: "#275dca",
                      marginRight: 20,
                    }}
                  ></i>
                </a>
                <a
                  href="https://linkedin.com/in/utakarsh-baranwal-65487628b/"
                  target="_blank"
                >
                  <i
                    className="fab fa-linkedin"
                    style={{
                      fontSize: "2.0rem",
                      color: "#275dca",
                      marginRight: 20,
                    }}
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/kashtech.ai/"
                  target="_blank"
                >
                  <i
                    class="fab fa-instagram"
                    style={{ fontSize: "2.0rem", color: "#275dca" }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <PixelTransition
                firstContent={
                  <img
                    src={user}
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "3rem",
                        color: "#ffffff",
                      }}
                    >
                      Meow!
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </section>
          <section id="about">
          <div style={{marginTop: 50,marginBottom:50}}>
          <span
          style={{
                marginTop: 100,
                backgroundColor: "transparent",
                border:"4px solid  #275dca",
                color:"#f0f2f5ff",
                borderRadius:50,
                padding: 20,
                paddingLeft: 50,
                paddingRight: 50,
                textAlign: "center",
                width: "100%",
                fontSize:25,
                fontWeight:"bolder"
              }}>
              Me and My Tech Stack
            </span></div>
            <div className="about-content">
              <div className="about-section">
                <div
                  style={{
                    border: "2px solid #275dca",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(90deg, #23232a 60%, #275dca22 100%)",
                    padding: "32px 28px",
                    marginTop: 50,
                    marginLeft: 50,
                    boxShadow: "0 4px 24px 0 #23232a55",
                    position: "relative",
                    maxWidth: 650,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: -18,
                      left: 30,
                      background: "#23232a",
                      color: "#275dca",
                      fontWeight: "bold",
                      fontSize: 16,
                      padding: "0 10px",
                      letterSpacing: 1,
                    }}
                  >
                    <i
                      className="fas fa-user-astronaut"
                      style={{ marginRight: 8 }}
                    ></i>
                    About Me
                  </span>
                  <p style={{ fontSize: 20, color: "#e4e7ec", margin: 0 }}>
                    I'm a passionate{" "}
                    <span style={{ color: "#60a5fa", fontWeight: 600 }}>
                      MERN stack developer
                    </span>{" "}
                    with a strong foundation in building modern, scalable web
                    applications. Alongside my expertise in{" "}
                    <span style={{ color: "#60a5fa", fontWeight: 600 }}>
                      MongoDB
                    </span>
                    ,{" "}
                    <span style={{ color: "#60a5fa", fontWeight: 600 }}>
                      Express
                    </span>
                    ,{" "}
                    <span style={{ color: "#60a5fa", fontWeight: 600 }}>
                      React
                    </span>
                    , and{" "}
                    <span style={{ color: "#60a5fa", fontWeight: 600 }}>
                      Node.js
                    </span>
                    , I also have hands-on experience in{" "}
                    <span style={{ color: "#60a5fa", fontWeight: 600 }}>
                      Machine Learning
                    </span>
                    , allowing me to create intelligent solutions that bridge
                    the gap between web development and data-driven insights.
                  </p>
                </div>
              </div>
              <div className="tech-stack">
                <ul
                  className="tech-tree"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  <li style={{ marginBottom: 20 }}>
                    <h3>Frontend</h3>
                    <div
                      style={{ display: "flex", gap: "50px", marginTop: 10 }}
                    >
                      <style jsx>{`
                        .tech-icon {
                          font-size: 5rem;
                          color: #ff6b6b;
                          margin-right: 20px;
                          transition: color 0.2s, transform 0.2s;
                          cursor: pointer;
                        }
                        .tech-icon:last-child {
                          margin-right: 0;
                        }
                        .tech-icon:hover {
                          color: #fff;
                          transform: scale(1.15);
                        }
                      `}</style>
                      <i
                        className="devicon-html5-plain-wordmark tech-icon"
                        title="HTML5"
                      ></i>
                      <i
                        className="devicon-css3-plain-wordmark tech-icon"
                        title="CSS3"
                      ></i>
                      <i
                        className="devicon-bootstrap-plain-wordmark tech-icon"
                        title="Bootstrap"
                      ></i>
                      <i
                        className="devicon-tailwindcss-plain-wordmark tech-icon"
                        title="Tailwind CSS"
                      ></i>
                      <i
                        className="devicon-react-original-wordmark tech-icon"
                        title="React"
                      ></i>
                    </div>
                  </li>
                  <li style={{ marginBottom: 20 }}>
                    <h3>Backend & Database</h3>
                    <div
                      style={{ display: "flex", gap: "50px", marginTop: 10 }}
                    >
                      <i
                        className="devicon-nodejs-plain-wordmark tech-icon"
                        title="Node.js"
                      ></i>
                      <i
                        className="devicon-flask-original-wordmark tech-icon"
                        title="Flask"
                      ></i>
                      <i
                        className="devicon-firebase-plain-wordmark tech-icon"
                        title="Firebase"
                      ></i>
                      <i class="devicon-mongodb-plain-wordmark tech-icon"></i>
                      <i class="devicon-azuresqldatabase-plain tech-icon"></i>
                    </div>
                  </li>
                  <li style={{ marginBottom: 20 }}>
                    <h3>Programming Languages</h3>
                    <div
                      style={{ display: "flex", gap: "50px", marginTop: 10 }}
                    >
                      <i
                        className="devicon-python-plain-wordmark tech-icon"
                        title="Python"
                      ></i>
                      <i
                        className="devicon-cplusplus-plain-wordmark tech-icon"
                        title="C++"
                      ></i>
                      <i class="devicon-javascript-plain tech-icon"></i>
                    </div>
                  </li>
                  <li>
                    <h3>Data Science & ML</h3>
                    <div
                      style={{ display: "flex", gap: "50px", marginTop: 10 }}
                    >
                      <i class="devicon-numpy-plain-wordmark tech-icon"></i>
                      <i
                        className="devicon-scikitlearn-plain-wordmark tech-icon"
                        title="Scikit-learn"
                      ></i>
                      <i
                        className="devicon-matplotlib-plain-wordmark tech-icon"
                        title="Matplotlib"
                      ></i>
                      <i
                        className="devicon-pandas-plain-wordmark tech-icon"
                        title="Pandas"
                      ></i>
                      <i
                        className="devicon-tensorflow-original-wordmark tech-icon"
                        title="TensorFlow"
                      ></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="recent-posts">
            <div className="section-header">
              <h2>My Projects</h2>
            </div>
            <div className="posts">
              <div className="post-card">
                <h3>Cargosence: A Cargo Management System</h3>
                <p className="meta">
                  10 April 2025 • Arduino, ESP32, GSM, GPS, Sensors, Web
                  Application
                </p>
                <p>
                  Cargosence is a cargo management system that allows you to
                  manage your cargo shipments and track their status. Real-time
                  environmental monitoring for cargo using Arduino, ESP32, GSM,
                  GPS, and sensors. Data visualization and monitoring using Web
                  Application.
                </p>
              </div>
              <div className="post-card">
                <h3>Skillink: A resume based job portal</h3>
                <p className="meta">
                  September 2024 • HTML, CSS, JavaScript, flask, ML Algorithm
                </p>
                <p>
                  Skillink is a resume based job portal that allows you to find
                  jobs and apply to them. It is a platform for job seekers to
                  find jobs and for employers to find candidates. It uses ML
                  algorithm to match the resume with the job description.
                </p>
              </div>
              <div className="post-card">
                <h3>Weight Tracker: A Weight Tracker Application</h3>
                <p className="meta">
                  July 2025 • React, Chatjs, MongoDB, Express, Node.js
                </p>
                <p>
                  Weight Tracker is a web application that allows users to track
                  their weight and see their progress over time using graphical
                  representation. It also has JWT authentication for personal
                  data.
                </p>
              </div>
              <div className="post-card">
                <h3>Expense Tracker with authentication</h3>
                <p className="meta">
                  July 2025 • React, MongoDB, Express, Node.js
                </p>
                <p>
                  Track your expenses with this application. It has JWT
                  authentication and allows users to add, edit, and delete their
                  expenses. It also has a graphical representation of the
                  expenses.
                </p>
              </div>
              <div className="post-card">
                <h3>RISC 32 Bit Processor Design</h3>
                <p className="meta">
                  July 2024 • Verilog, VHDL, FPGA, Computer Architecture
                </p>
                <p>
                  Designed a 32-bit RISC processor using Verilog and VHDL. With
                  all neccesary components like ALU, Register File, Memory
                  Interface, Instruction Memory, and Data Memory.
                </p>
              </div>
              <div className="post-card">
                <h3>Floating Point Unit Using Verilog</h3>
                <p className="meta">
                  July 2024 • Verilog, VHDL, FPGA, Computer Architecture
                </p>
                <p>
                  Designed 32 bit Floating Point Unit using Verilog and VHDL.
                  With all neccesary components like Adder, Multiplier, Divider,
                  and Normalizer. Focusing primarily on reducing LUT, number of
                  Flip-Flops and Delay.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
