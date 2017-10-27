var quizData = require("../data/quizData");

function compareQuizzes(app) {
  app.get("/api/results", function(req, res) {
    res.json(quizData);
  });

  app.post("/api/results", function(request, response) {

    var closest = null;
    var closestDiff = null;

    //turn the request into a user object that can be evaluated and then pushed to quizData
    var newUser = {}
    newUser.name = request.body.name;
    newUser.image = request.body.image;
    newUser.answers = request.body["answers[]"];

    //for each set of answers already in data
    for (index1 in quizData) {
      var sum = 0;
  
      //for each question in this set, add the results to the sum
      for (index2 in quizData[index1].answers) {
        // console.log("data: " + quizData[index1].answers[index2]);
        // console.log("user: " + newUser.answers[index2]);
        sum += Math.abs(parseInt(quizData[index1].answers[index2]) - parseInt(newUser.answers[index2]));
        console.log({sum});
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
      console.log(quizData[index1].name);
      console.log({sum});
      console.log(quizData[closest].name); 
      console.log({closestDiff});
      console.log("____________________");
    }
    quizData.push(newUser);
    response.json(quizData[closest]);
  });
}

module.exports = compareQuizzes;