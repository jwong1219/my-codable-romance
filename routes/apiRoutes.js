var answArr = require("../data/quizData");

function compareQuizzes(app) {
  app.get("/api/results", function(req, res) {
    res.json(quizData);
  });

  app.post("/api/results", function(request, response) {
    var arr2 = request.body["answers[]"];
    // console.log(parseInt(arr2[0]));

    var closest = null;
    var closestDiff = null;

    for (index1 in answArr) {
      var sum = 0;
    
      for (index2 in answArr[index1].results) {

        sum += Math.abs(parseInt(answArr[index1].results[index2]) - parseInt(arr2[index2]));
      }
      console.log({sum});
      if(!closest){
        closest = answArr[index1].name;
        closestDiff = sum;
        console.log({closest});
        console.log({closestDiff});
      }
      else {
        if (sum < closestDiff) {
          closest = answArr[index1].name;
          closestDiff = sum;
          console.log({closest});
          console.log({closestDiff});
        }
      } 
    }
    console.log({closest});
    console.log({closestDiff});
  });
}

module.exports = compareQuizzes;