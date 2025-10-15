import React from "react";

function Logo() {
  return (
    <span
      className="navbar__logo"
      tabIndex={0}
      aria-label="Home"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="#232a3d"
          stroke="#70b7ff"
          strokeWidth="2"
        />
        <text
          x="24"
          y="28"
          textAnchor="middle"
          fill="#70b7ff"
          fontSize="16"
          fontFamily="monospace"
          fontWeight="bold"
        >
          SJH
        </text>
      </svg>
    </span>
  );
}

export default Logo;
