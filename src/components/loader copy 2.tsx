import React from "react";
import styled, { keyframes } from "styled-components";

// ✅ Animation keyframes (kept same timing & behavior)
const spin = keyframes`
  10% { transform: translateY(-102%); }
  25% { transform: translateY(-100%); }
  35% { transform: translateY(-202%); }
  50% { transform: translateY(-200%); }
  60% { transform: translateY(-302%); } 
  75% { transform: translateY(-300%); }
  85% { transform: translateY(-402%); }
  100% { transform: translateY(-400%); }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black; /* optional for better contrast */

  .loader {
    color: #f1e7e7ff;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: clamp(32px, 8vw, 70px); /* ✅ dynamic font size */
    display: flex;
    border-radius: 8px;
    gap: 10px;
  }

  .words {
    overflow: hidden;
    position: relative;
    height: 1.2em; /* matches text height */
  }

  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      black 10%,
      transparent 30%,
      transparent 70%,
      black 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 10px;
    color: #08aadbff;
    animation: ${spin} 4s linear forwards;
  }
  }

  /* ✅ Mobile Optimization */
  @media (max-width: 768px) {
    .loader {
      font-size: clamp(24px, 6vw, 40px);
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 4px;
    }

    .word {
    display: block;
    height: 100%;
    padding-left: 10px;
    color: #08aadbff;
    animation: ${spin} 4s linear forwards;
  }
`;

const Loader: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <p>Aero</p>
        <div className="words">
          <span className="word">Flights</span>
          <span className="word">Tours</span>
          <span className="word">Visa</span>
          <span className="word">Insurances</span>
          <span className="word">Fly</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Loader;
