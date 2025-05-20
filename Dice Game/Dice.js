let rollCount = 0;
    const diceFaces = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    function rollDice() {
      const roll = Math.floor(Math.random() * 6) + 1;
      rollCount++;

      // Update main dice image
      document.getElementById("dice-image").textContent = diceFaces[roll];

      // Create new roll entry
      const rollDiv = document.createElement("div");
      rollDiv.className = "roll-entry";
      rollDiv.innerHTML = `Roll ${rollCount}: <span>${diceFaces[roll]}</span>`;

      // Append to rolls container
      document.getElementById("rolls").appendChild(rollDiv);
    }

    function clearRolls() {
      // Clear dice output and reset count
      document.getElementById("rolls").innerHTML = "";
      document.getElementById("dice-image").textContent = "🎲";
      rollCount = 0;
    }