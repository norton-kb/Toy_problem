const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function studentGradeGenerator() {
  let studentNames = [];
  let studentMarks = [];
  let studentGrades = [];

  function askForInput() {
    rl.question("Enter student's name (or 'done' to finish): ", (name) => {
      if (name.toLowerCase() === 'done') {
        rl.close();
        console.log("Student Name\tMark\tGrade");
        for (let i = 0; i < studentNames.length; i++) {
          console.log(`${studentNames[i]}\t\t${studentMarks[i]}\t${studentGrades[i]}`);
        }
      } else {
        rl.question("Enter student's mark (0-100): ", (mark) => {
          const marks = parseInt(mark);
          if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid mark. Please enter a number between 0 and 100.");
            askForInput();
          } else {
            studentNames.push(name);
            studentMarks.push(marks);

            // Calculate and assign the grade here
            let grade;
            if (marks > 79) {
              grade = "A";
            } else if (marks >= 60) {
              grade = "B";
            } else if (marks >= 50) {
              grade = "C";
            } else if (marks >= 40) {
              grade = "D";
            } else {
              grade = "E";
            }
            studentGrades.push(grade);

            askForInput();
          }
        });
      }
    });
  }

  askForInput();
}

studentGradeGenerator();