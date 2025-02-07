import React from "react";

import pink from "../assets/pink.jpg";
import yellow from "../assets/yellow.jpg";
import blue from "../assets/blue.jpg";
import purple from "../assets/purple.jpg";
import red from "../assets/red.jpg";

function Home() {
  return (
    <div className="Home">
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f4",
          color: "#333",
        }}
      >
        <header
          style={{
            background: "linear-gradient(90deg, #ff6384,rgb(88, 175, 233))",
            padding: "50px",
            textAlign: "center",
            color: "#fff",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            ChartWise - The Smart Way to Visualize Data
          </h1>
          <p
            style={{
              fontSize: "18px",
              maxWidth: "800px",
              margin: "0 auto",
              opacity: "0.9",
            }}
          >
            Experience the power of interactive and dynamic charting with
            multiple graph types and real-time data manipulation.
          </p>
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#fff",
              color: "#333",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "20px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ddd")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            onClick={() => (window.location.href = "/charts")}
          >
            Get Started
          </button>
        </header>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            padding: "40px 0",
            color: "#444",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "#ff6384" }}>
              Multiple Graph Types
            </h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              Easily switch between Bar, Line, Donut, and other chart types
              dynamically. Customize colors, labels, and datasets with ease.
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={pink}
              alt="Graph Types"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            padding: "40px 0",
            backgroundColor: "rgba(54, 162, 235, 0.1)",
            color: "#444",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "#36a2eb" }}>
              Full Dynamic Control
            </h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              Add, edit, and delete data points in real-time. Experience
              seamless data interaction with smart data detection and
              validation.
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={blue}
              alt="Dynamic Control"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            padding: "40px 0",
            color: "#444",
            backgroundColor: "rgba(255, 206, 86, 0.1)",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "#ffce56" }}>Easy To Use</h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              A user-friendly interface ensures you can create and manage charts
              effortlessly. No prior experience required – just visualize and
              analyze.
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={yellow}
              alt="Easy to Use"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            padding: "40px 0",
            backgroundColor: "rgba(54, 78, 235, 0.1)",
            color: "#444",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "#8a2be2" }}>
              Compair Your Data
            </h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              Effortlessly analyze and compare two datasets within a single
              chart. Spot trends, differences, and insights at a glance!
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={purple}
              alt="Dynamic Control"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            padding: "40px 0",
            color: "#444",
            backgroundColor: "rgba(255, 77, 77, 0.1)",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ fontSize: "30px", color: "rgb(255, 51, 51)" }}>
              AI-Powered Insights (Coming Soon)
            </h2>
            <p style={{ fontSize: "16px", opacity: "0.8" }}>
              Experience next-level analytics with AI-driven insights. Unlock
              automatic pattern detection, smart predictions, and real-time data
              optimizations. This feature is under development and will be
              available in future updates. Stay tuned!
            </p>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={red}
              alt="Dynamic Control"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: "300px",
                borderRadius: "10px",
              }}
            />
          </div>
        </section>
      </div>

      <footer
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "30px 10px",
          marginTop: "40px",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <div>
          <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>About Me</h2>
          <p style={{ fontSize: "16px", opacity: "0.8" }}>
            Explore more of my work on my portfolio website.
          </p>
          <a
            href="https://chinmay-l-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#36a2eb",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Visit My Portfolio
          </a>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>Quick Links</h3>
          <p>
            <a
              href="/"
              style={{
                color: "#ffce56",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Home
            </a>
            <a
              href="/charts"
              style={{
                color: "#ffce56",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Create Chart
            </a>
            <a
              href="https://github.com/stom-breaker-07"
              style={{
                color: "#ffce56",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Contact
            </a>
          </p>
        </div>
        <div style={{ marginTop: "20px", fontSize: "14px", opacity: "0.7" }}>
          &copy; 2025 ChartWise. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
