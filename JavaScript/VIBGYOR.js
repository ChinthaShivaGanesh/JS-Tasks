const container = document.getElementById("btn-container");


    for (let i = 1; i <= 7; i++) {
      const btn = document.createElement("button");
      btn.className = "color-btn";


      let colorName = "";
      let color = "";


      if (i === 1) {
        colorName = "Violet";
        color = "#8F00FF";
      } else if (i === 2) {
        colorName = "Indigo";
        color = "#4B0088";
      } else if (i === 3) {
        colorName = "Blue";
        color = "#0000FF";
      } else if (i === 4) {
        colorName = "Green";
        color = "#00FF00";
      } else if (i === 5) {
        colorName = "Yellow";
        color = "#FFFF00";
      } else if (i === 6) {
        colorName = "Orange";
        color = "#FFA500";
      } else if (i === 7) {
        colorName = "Red";
        color = "#FF0000";
      }


      btn.textContent = colorName;
      btn.style.backgroundColor = color; 

      btn.addEventListener("click", () => {
        // Change body background
        document.body.style.backgroundColor = color;


        // Reset all buttons to original color
        const allBtns = document.querySelectorAll(".color-btn");
        allBtns.forEach(b => {
          b.style.backgroundColor = b.textContent.toLowerCase(); // sets to color name like "blue"
          b.style.color = "white";
        });


        // Make clicked button white with black text
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
      });


      container.appendChild(btn);
    }