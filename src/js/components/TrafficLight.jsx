import React, { useState } from "react";

const GLOW = {
  red: "0 0 30px 12px #ff0000, 0 0 60px 20px #ff000088",
  yellow: "0 0 30px 12px #ffcc00, 0 0 60px 20px #ffcc0088",
  green: "0 0 30px 12px #00dd00, 0 0 60px 20px #00dd0088",
  purple: "0 0 30px 12px #aa00ff, 0 0 60px 20px #aa00ff88",
};

const ACTIVE_COLOR = {
  red: "#ff2222",
  yellow: "#ffdd00",
  green: "#22ee22",
  purple: "#cc44ff",
};

const DIM_COLOR = {
  red: "#4a0000",
  yellow: "#3a3000",
  green: "#003a00",
  purple: "#1e0033",
};

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [lights, setLights] = useState(["red", "yellow", "green"]);

  const cycleColor = () => {
    const current = lights.indexOf(color);
    const next = (current + 1) % lights.length;
    setColor(lights[next]);
  };

  const addPurple = () => {
    if (!lights.includes("purple")) {
      setLights([...lights, "purple"]);
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Traffic Light</h2>

      <div style={styles.housing}>
        {lights.map((c) => {
          const active = color === c;
          return (
            <div
              key={c}
              onClick={() => setColor(c)}
              style={{
                ...styles.light,
                background: active ? ACTIVE_COLOR[c] : DIM_COLOR[c],
                boxShadow: active ? GLOW[c] : "inset 0 2px 6px #00000088",
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>

      <div style={styles.controls}>
        <button style={styles.btn} onClick={cycleColor}>
          Cycle Color
        </button>
        <button
          style={{ ...styles.btn, ...styles.purpleBtn }}
          onClick={addPurple}
          disabled={lights.includes("purple")}
        >
          Add Purple
        </button>
      </div>

      <p style={styles.label}>
        Selected:{" "}
        <strong style={{ color: ACTIVE_COLOR[color] }}>{color}</strong>
      </p>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    background: "#1a1a2e",
    paddingTop: "40px",
    fontFamily: "sans-serif",
  },
  title: {
    color: "#e0e0e0",
    marginBottom: "24px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  housing: {
    background: "#222",
    border: "4px solid #444",
    borderRadius: "16px",
    padding: "20px 28px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "0 8px 32px #00000099",
  },
  light: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "3px solid #333",
    transition: "background 0.2s, box-shadow 0.2s",
  },
  controls: {
    marginTop: "32px",
    display: "flex",
    gap: "16px",
  },
  btn: {
    padding: "10px 24px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "none",
    background: "#3a3a5c",
    color: "#e0e0e0",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  purpleBtn: {
    background: "#4a2060",
  },
  label: {
    marginTop: "20px",
    color: "#aaa",
    fontSize: "16px",
    textTransform: "capitalize",
  },
};

export default TrafficLight;
