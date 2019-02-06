const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  let filterGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let tempGrade;
    let placeHolder1;
    let placeHolder2;

    if (grades[i] > 37) {
      if (grades[i] > 98) {
        tempGrade = 100;
        filterGrades.push(tempGrade);
      } else {
        tempGrade = grades[i].toString().split('');
        placeHolder1 = Number(tempGrade[0]);
        placeHolder2 = Number(tempGrade[1]);

        if (5 > placeHolder2 && placeHolder2 > 2) {
          placeHolder2 = 5;
        }
        if (10 > placeHolder2 && placeHolder2 > 7) {
          placeHolder2 = 0;
          placeHolder1 = placeHolder1 + 1;
        }
        tempGrade = Number(`${placeHolder1}${placeHolder2}`);
        filterGrades.push(tempGrade);
      }
    } else {
      filterGrades.push(grades[i]);
    }
  }
  return filterGrades;
}

console.log(gradingStudents(grades));
