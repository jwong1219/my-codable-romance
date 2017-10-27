var answArr = require("../data/quizData");

function compareQuizzes(app) {
  app.get("/api/results", function(req, res) {
    res.json(answArr);
  });

  app.post("/api/results", function(request, response) {
    var arr2 = request.body["answers[]"];
    // console.log(parseInt(arr2[0]));

    var closest = null;
    var closestDiff = null;

    //for each set of answers already in data
    for (index1 in answArr) {
      var sum = 0;
      var times = 0;
      //for each question in this set, add the results to the sum
      for (index2 in answArr[index1].results) {

        sum += Math.abs(parseInt(answArr[index1].results[index2]) - parseInt(arr2[index2]));
        times++;
      }
      //if there is not already a closest match, this must be the closest
      if(!closest){
        closest = index1; //set "closest" to the index with the closest matched result.
        closestDiff = sum;
      }
      //if there is a closest found match, see if this one is closer
      else {
        if (sum < closestDiff) {
          closest = index1; //set "closest" to the index with the closest matched result.
          closestDiff = sum;
        }
      } 
    }
    response.json(answArr[closest]);
  });
}

module.exports = compareQuizzes;