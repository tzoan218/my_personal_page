import { Link } from 'react-router-dom';
import './App.css';

function AboutPage() {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h2
        style={{
          color: "#00F5C4",
          marginBottom: "32px",
          marginTop: "0px"
        }}
      >
        About Me
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            flexShrink: 0
          }}
        >
          <img
            src="/WhatsApp%20Image%202025-11-25%20at%2023.05.08.jpeg"
            alt="Ioanna Stamou"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center 60%",
              border: "4px solid #00F5C4",
              boxShadow: "0 8px 24px rgba(0, 245, 196, 0.3)"
            }}
          />
        </div>
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            maxWidth: "500px",
            textAlign: "left"
          }}
        >
          <p
            style={{
              margin: 0,
              lineHeight: "1.8",
              fontSize: "18px"
            }}
          >
           Hello! Welcome to my personal website. I’m a researcher in theoretical physics and a developer working with Python, Java, and machine learning. I enjoy building complete, reliable systems and learning new things along the way.
           Here you’ll find my publications, projects, and notes from my work and interests.
          </p>
        </div>
      </div>

      <h2
        style={{
          color: "#00F5C4",
          marginBottom: "32px",
          marginTop: "0px"
        }}
      >
        Expertise
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          maxWidth: "700px",
          margin: "0 auto"
        }}
      >
        {['Python', 'Java & Spring Boot', 'Machine Learning', 'Numerical Analysis', 'Physics', 'DevOps (Docker/K8s)'].map((skill) => {
          const skillUrl = `/skill/${encodeURIComponent(skill)}`;
          return (
            <Link
              key={skill}
              to={skillUrl}
              style={{
                padding: "12px 24px",
                backgroundColor: "rgba(0, 245, 196, 0.1)",
                border: "1px solid #00F5C4",
                borderRadius: "24px",
                color: "#00F5C4",
                fontSize: "16px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(0, 245, 196, 0.1)";
              }}
            >
              {skill}
            </Link>
          );
        })}
      </div>

      <h2
        style={{
          color: "#00F5C4",
          marginBottom: "32px",
          marginTop: "60px"
        }}
      >
        Notes for Understanding Machine Learning
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "left",
          backgroundColor: "rgba(0, 245, 196, 0.05)",
          padding: "32px",
          borderRadius: "12px",
          border: "1px solid rgba(0, 245, 196, 0.2)"
        }}
      >
        <p
          style={{
            marginBottom: "24px",
            lineHeight: "1.8",
            fontSize: "16px",
            color: "#e0e0e0"
          }}
        >
          A personal learning textbook covering the fundamentals of machine learning, from statistical foundations to practical implementations. These notes provide a comprehensive overview of key concepts, algorithms, and Python tools used in modern machine learning.
        </p>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ color: "#00F5C4", marginBottom: "16px", fontSize: "20px" }}>
            1. Statistics You Need for Machine Learning
          </h3>
          <ul style={{ color: "#e0e0e0", lineHeight: "2", paddingLeft: "24px" }}>
            <li>Types of Variables (Numerical & Categorical)</li>
            <li>Descriptive Statistics (Mean, Median, Variance, Standard Deviation)</li>
            <li>Correlation and Covariance</li>
            <li>Probability Theory Basics</li>
            <li>Bayes' Theorem: Updating Beliefs from Data</li>
            <li>Likelihood and Maximum Likelihood Estimation</li>
            <li>Probability Distributions</li>
            <li>Statistical Inference</li>
            <li>Linear & Logistic Regression</li>
            <li>Bias–Variance Tradeoff</li>
          </ul>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ color: "#00F5C4", marginBottom: "16px", fontSize: "20px" }}>
            2. Python for Machine Learning
          </h3>
          <ul style={{ color: "#e0e0e0", lineHeight: "2", paddingLeft: "24px" }}>
            <li>Supervised Data Handling</li>
            <li>Loss Functions and Risk Minimization</li>
            <li>Train/Validation/Test Splits</li>
            <li>Python Ecosystem (NumPy, Pandas, Scikit-learn)</li>
          </ul>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ color: "#00F5C4", marginBottom: "16px", fontSize: "20px" }}>
            3. Machine Learning Algorithms
          </h3>
          <ul style={{ color: "#e0e0e0", lineHeight: "2", paddingLeft: "24px" }}>
            <li>Decision Trees</li>
            <li>Random Forest</li>
            <li>Gradient Boosting</li>
            <li>XGBoost: Extreme Gradient Boosting</li>
            <li>Algorithm Comparison and Selection</li>
          </ul>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ color: "#00F5C4", marginBottom: "16px", fontSize: "20px" }}>
            4. Neural Networks & Deep Learning
          </h3>
          <ul style={{ color: "#e0e0e0", lineHeight: "2", paddingLeft: "24px" }}>
            <li>The Perceptron: The Simplest Neural Unit</li>
            <li>Multi-Layer Perceptron (MLP)</li>
            <li>Forward Pass and Loss Functions</li>
            <li>Backpropagation: How Neural Networks Learn</li>
            <li>Training with Gradient Descent</li>
            <li>Why Deep Networks Work</li>
            <li>Overfitting and Regularization</li>
            <li>Python Examples with Keras</li>
          </ul>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ color: "#00F5C4", marginBottom: "16px", fontSize: "20px" }}>
            5. Practical Machine Learning
          </h3>
          <p style={{ color: "#e0e0e0", lineHeight: "1.8" }}>
            Practical applications and best practices for implementing machine learning solutions in real-world scenarios.
          </p>
        </div>

        <div style={{
          marginTop: "32px",
          padding: "20px",
          backgroundColor: "rgba(0, 245, 196, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(0, 245, 196, 0.3)",
          textAlign: "center"
        }}>
          <p style={{ color: "#00F5C4", margin: "0 0 12px 0", fontSize: "16px", fontWeight: "500" }}>
            Key Idea
          </p>
          <p style={{ color: "#e0e0e0", margin: 0, lineHeight: "1.8", fontStyle: "italic" }}>
            Machine learning is not magic. It is a systematic way to: collect data, find patterns, and use those patterns to make predictions or decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

