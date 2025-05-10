    const vibgyor = [
      { name: "Violet", hex: "#8F00FF" },
      { name: "Indigo", hex: "#4B0082" },
      { name: "Blue", hex: "#0000FF" },
      { name: "Green", hex: "#00FF00" },
      { name: "Yellow", hex: "#FFFF00" },
      { name: "Orange", hex: "#FFA500" },
      { name: "Red", hex: "#FF0000" },
    ];

    const container = document.getElementById("btn-container");

    vibgyor.forEach(color => {
      const btn = document.createElement("button");
      btn.className = "color-btn";
      btn.textContent = color.name;
      btn.style.backgroundColor = color.hex;
      if (color.textColor) {
        btn.style.color = color.textColor;
      }

      btn.addEventListener("click", () => {
        document.body.style.backgroundColor = color.hex;
      });

      container.appendChild(btn);
    });