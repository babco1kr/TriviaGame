// variable here
var questions = ["Who marries the receptionist?", "What is the correct way to announce someone's birthday?", "What song helped Michael learn the Pledge of Allegiance?"];
var choices1 = ["Dwight", "Jim", "Toby", "Michael"];
var choices2 = ["Happy Birthday!", "It's your birthday!", "It is your Birthday.", "It is your Birthday!"];
var choices3 = ["Old McDonald", "Happy Birthday", "B.I.N.G.O.", "Ring Around the Rosy"];
var choices = [choices1, choices2, choices3];
var answers = [choices1[1], choices2[2], choices3[0]];
var answer = "";
var wins = 0;
var losses = 0;

var questionCount = 0;

$(document).ready(function() {
    function questionSetup () {
        var question = $("<div>");
        question.text(questions[questionCount]);
        $(".game").append(question);
    questionsAnswers(choices[questionCount]);

    function questionsAnswers (arr) {
        for (i = 0; i < arr.length; i++) {
            var button = $("<button>");;
            button.text(arr[i]);
            button.addClass("button" + i);
            button.addClass("button");
            button.attr({"selection": arr[i]});
            $("#choices").append(button);
            
    }
}
$(".button").on("click", function () {
    answer = ($(this).attr("selection"));
    check(answer);
    console.log(answer);
})
}

function correct () {
    $(".game").html("Correct!");
    $("#choices").html("");
    setTimeout(reset, 5000);
}

function incorrect () {
    $(".game").html("Incorrect!");
    $("#choices").html("");
    setTimeout(reset, 10000);
}

questionSetup();
    function check (x) {
        if (x === answers[questionCount]) {
            wins++;
            questionCount++;
            correct();
        }
        else {
            losses++;
            questionCount++;
            incorrect();
        }
    }

    function reset () {
        answer = "";
        $(".game").html("");
        // Add back in when photo added to correct/incorrect screen
        // $("#choices").html("");
        questionSetup();
    }
});