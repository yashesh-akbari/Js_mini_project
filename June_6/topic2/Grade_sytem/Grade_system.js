 document
        .getElementById("form_submit")
        .addEventListener("submit", (event) => {
          event.preventDefault();
          let grade = parseInt(document.getElementById("Grade").value);
          let grade_output = (grade) => {
            document.getElementById("demo").innerHTML = `congratulation you get the ` + grade+" grade";
          };
          if (grade >= 90 && grade <= 100) {
            grade_output("A");
          } else if (grade >= 75) {
            grade_output("B");
          } else if (grade >= 50) {
            grade_output("C");
          } else if (grade < 50 && grade >= 0) {
            grade_output("F");
          } else {
            document.getElementById("demo").innerHTML =
              "you are write wrong input please enter input between 0 to 100";
          }
        });