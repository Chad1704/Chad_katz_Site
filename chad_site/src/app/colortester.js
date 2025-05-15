import React, { useState, useEffect } from "react";

const colorThemes = [
  {
    light: "#2BAE66FF",
    dark: "#fcf6f5ff",
    border: "43 , 174 , 102 ",
  },
  {
    light: "#ADEFD1FF",
    dark: "#00203FFF",
    border: "173, 239, 209",
  },

  {
    light: "#FFE6F0",
    dark: "#5C1A72",
    border: "255, 230, 240",
  },

  {
    light: "#78BC61",
    dark: "#131200",
    border: "120, 188, 97",
  },
  {
    light: "#ffffff",
    dark: "#000000",
    border: "225, 225, 225",
  },
];

export default function ColorTester() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const theme = colorThemes[themeIndex];
    const root = document.documentElement;

    if (isSwapped) {
      root.style.setProperty("--color-light", theme.dark);
      root.style.setProperty("--color-dark", theme.light);
      root.style.setProperty("--color-border", convertHexToRGB(theme.dark));
    } else {
      root.style.setProperty("--color-light", theme.light);
      root.style.setProperty("--color-dark", theme.dark);
      root.style.setProperty("--color-border", theme.border);
    }
  }, [themeIndex, isSwapped]);

  function convertHexToRGB(hex) {
    let cleaned = hex.slice(0, 7);
    if (!cleaned.startsWith("#")) return "0, 0, 0";

    const r = parseInt(cleaned.substring(1, 3), 16);
    const g = parseInt(cleaned.substring(3, 5), 16);
    const b = parseInt(cleaned.substring(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }

  const theme = colorThemes[themeIndex];
  const displayLight = isSwapped ? theme.dark : theme.light;
  const displayDark = isSwapped ? theme.light : theme.dark;
  const displayBorder = isSwapped ? convertHexToRGB(theme.dark) : theme.border;

  return (
    <div
      className="transition duration-400 ease-in-out"
      style={{ padding: 20 }}
    >
      <div
        style={{
          marginBottom: 15,
          display: "flex",
          justifyContent: "center",
          gap: 12,
        }}
        className="w-fill"
      >
        {colorThemes.map((t, i) => (
          <button
            key={i}
            onClick={() => setThemeIndex(i)}
            title={`Theme ${i + 1}`}
            style={{
              width: 12,
              height: 12,
              transform: "rotate(45deg)",
              borderRadius: 70,
              border:
                i === themeIndex
                  ? `2px solid ${theme.light}`
                  : "1px solid #ccc",
              cursor: "pointer",
              background: `linear-gradient(to right, ${t.dark} 50%, ${t.light} 50%)`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      ></div>
    </div>
  );
}
