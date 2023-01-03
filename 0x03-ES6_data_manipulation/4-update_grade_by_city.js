export default function updateStudentGradeByCity(studentList, city, newGrade) {
  const newArray = studentList.filter((val) => val.location === city).map((val) => {
    val.grade = 'N/A';
    for (let i = 0; i < newGrade.length; i += 1) {
      if (val.id === newGrade[i].studentId) {
        val.grade = newGrade[i].grade;
      }
    }
    return val;
  });
  return newArray;
}
