var grade = 9;
var letterGrade;

// if (grade === 10) {
//     letterGrade = "A";
// } else if (grade === 9) {
//     letterGrade = "A";
// } else if (grade === 8) {
//     letterGrade = "B";
// } else if (grade === 7) {
//     letterGrade = "C";
// } else {
//     letterGrade = "Unkown";
// }

switch(grade) {
    case 10:
    case 9:
        letterGrade = "A";
        break;
    case 8:
        letterGrade = "B";
        break;
    case 7:
        letterGrade = "C";
        break;
    case 6:
        letterGrade = "D";
        break;
    case 5:
        letterGrade = "E";
        break;
    default:
        letterGrade = "Fail";
}

console.log(letterGrade);