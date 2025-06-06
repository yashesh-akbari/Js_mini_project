   // Generate the random number once
      let random_number = Math.floor(Math.random() * 20) + 1;
      console.log("Random Number:", random_number); // For testing

      document
        .getElementById("form_submit")
        .addEventListener("submit", (event) => {
          event.preventDefault();

          let guess_number = parseInt(
            document.getElementById("guess_number").value
          );
          let message = "";

          if (guess_number === random_number) {
            message = "🎉 Correct! You guessed the number!";
          } else if (guess_number < random_number) {
            message = "🔼 Too low! Try a higher number.";
          } else if (guess_number > random_number) {
            message = "🔽 Too high! Try a lower number.";
          } else {
            message = "❌ Please enter a valid number between 1 and 20.";
          }

          document.getElementById("demo").innerHTML = message;
        });