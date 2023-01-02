export function processFullData(data) {
  const examData = data.examData;
  const alphasArray = ["A", "B", "C", "D", "E", "F"];
  const numeralsArray = [1, 2, 3, 4, 5, 6, 7, 8];
  var DataToReturn = [];
  examData.forEach((element) => {
    var objectToAppend = {};
    var totalMarks = 0;

    objectToAppend["Seat Number"] = element.seatNo;
    objectToAppend["Email"] = element.email;
    objectToAppend["First Name"] = element.firstName;
    objectToAppend["Last Name"] = element.lastName;
    objectToAppend["Department"] = element.department;

    const marksObject = JSON.parse(element.marksObject);
    numeralsArray.forEach((number) => {
      alphasArray.forEach((alphas) => {
        if (
          marksObject[number] !== undefined &&
          marksObject[number][alphas] !== undefined
        ) {
          objectToAppend[`Q${number}. ${alphas}`] = parseInt(
            marksObject[number][alphas]
          );
          totalMarks += parseInt(marksObject[number][alphas]);
        }
      });
    });

    objectToAppend["Total Marks"] = totalMarks;
    DataToReturn.push(objectToAppend);
  });

  return DataToReturn;
}

export function processPartialData(data) {
  const examData = data.examData;
  const alphasArray = ["A", "B", "C", "D", "E", "F"];
  const numeralsArray = [1, 2, 3, 4, 5, 6, 7, 8];
  var DataToReturn = [];
  examData.forEach((element) => {
    var objectToAppend = {};
    var totalMarks = 0;

    objectToAppend["Seat Number"] = element.seatNo;
    objectToAppend["Email"] = element.email;
    objectToAppend["First Name"] = element.firstName;
    objectToAppend["Last Name"] = element.lastName;
    objectToAppend["Department"] = element.department;

    const marksObject = JSON.parse(element.marksObject);
    numeralsArray.forEach((number) => {
      var qTotalMarks = 0;
      alphasArray.forEach((alphas) => {
        if (
          marksObject[number] !== undefined &&
          marksObject[number][alphas] !== undefined
        ) {
          qTotalMarks += parseInt(marksObject[number][alphas]);
          totalMarks += parseInt(marksObject[number][alphas]);
        }
      });
      if (marksObject[number] !== undefined) {
        objectToAppend[`Q.${number}`] = parseInt(qTotalMarks);
      }
    });

    objectToAppend["Total Marks"] = totalMarks;
    DataToReturn.push(objectToAppend);
  });

  return DataToReturn;
}
