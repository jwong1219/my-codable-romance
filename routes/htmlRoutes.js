var path = require("path");

function htmlRouting(app) {
  app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/quiz", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/quiz.html"));
  });

  app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
  });
}

module.exports = htmlRouting;