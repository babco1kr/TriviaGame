// variable here
var questions = ["Who marries the receptionist?"];
var choices1 = ["Dwight", "Jim", "Toby", "Michael"];
var questionCount = 0;

$(document).ready(function() {
    $("#question").text(questions[questionCount]);
    for (i = 0; i < choices1.length; i++) {
        var button = $("<button>");
        button.text(choices1[i]);
        $("#choices").append(button);
    }
});