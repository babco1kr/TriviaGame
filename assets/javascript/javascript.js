// variable here
var questions = ["Who marries the receptionist?", "What is the correct way to announce someone's birthday?", "What song helped Michael learn the Pledge of Allegiance?",
                "Which character was originally supposed to remain written out of the Office?", "How does Pam find out she is pregnant?", "Who has won the most, Hottest In the Office Dundees?",
                "What was the name of the company Jim helped start?", "Who is believed to be the real Scranton Strangler?", "What was Andy's famous nickname at the end of the series?",
                "Where do Dwight and Angela get married?", "W"];
var images = ["assets/images/dancing.gif", "assets/images/dead.gif", "assets/images/fast.gif", "assets/images/fistbump.gif", "assets/images/nightmare.gif", "assets/images/highfive.gif",
            "assets/images/No.gif", "assets/images/true.gif", "assets/images/surprised.gif", "assets/images/snow.gif"];
var choices1 = ["Dwight", "Jim", "Toby", "Michael"];
var choices2 = ["Happy Birthday!", "It's your birthday!", "It is your Birthday.", "It is your Birthday!"];
var choices3 = ["Old McDonald", "Happy Birthday", "B.I.N.G.O.", "Ring Around the Rosy"];
var choices4 = ["Pam", "Toby", "Andy", "Ryan"];
var choices5 = ["Hurting her ankle", "Hitting her head", "Falling down", "Catching the flu"]
var choices6 = ["Pam", "Angela", "Andy", "Ryan"];
var choices7 = ["Athleet", "Athlead", "Athlete", "Swoosh"];
var choices8 = ["Ryan", "Michael", "Dwight", "Toby"];
var choices9 = ["Drew", "Mr. Cornell", "Big Bear", "Baby Wa Wa"];
var choices10 = ["Angela's Backyard", "Their graves", "A pool", "At the Office"];
var choices = [choices1, choices2, choices3, choices4, choices5, choices6, choices7, choices8, choices9, choices10];
var answers = [choices1[1], choices2[2], choices3[0], choices4[2], choices5[0], choices6[3], choices7[1], choices8[3], choices9[3], choices10[1]];
var answer = "";
var wins = 0;
var losses = 0;
var intervalId;
var time = 30;
var questionCount = 0;

$(document).ready(function() {

    // assigning classes to id's and classes used later
    $("#timer").addClass("h2");
    $("#wins").addClass("h2");
    $("#losses").addClass("h2");
    $(".game").addClass("h2");
    $("#choices").addClass("h2");

    // sets up the question for the game
    function questionSetup () {
        var question = $("<div>");
        question.addClass("h3");
        question.text(questions[questionCount]);
        $(".game").append(question);
        questionsAnswers(choices[questionCount]);
        $("#wins").text("");
        $("#losses").text("");
        $("#timer").text("Time Remaining: " + time);

    // Adds the buttons and their unique choices to the page
    function questionsAnswers (arr) {
        for (i = 0; i < arr.length; i++) {
            var button = $("<button>");;
            button.text(arr[i]);
            button.addClass("button row");
            button.attr({"selection": arr[i]});
            $("#choices").append(button);
            
    }
}

// Defines interval for the game time counter
intervalId = setInterval(count, 1000);

// Onclick functionality for the game and buttons assigned
$(".button").on("click", function () {
    stop();
    answer = ($(this).attr("selection"));
    check(answer);
    console.log(answer);
})
}

// What happens if the user guesses correct answer
function correct () {
    $(".game").html("Correct!");
    $("#choices").html("");
    var image = $("<img>");
    image.attr("src", images[questionCount]);
    image.addClass("row");
    $("#choices").append(image);
    setTimeout(reset, 5000);
    $("#timer").text("");
    questionCount++;
}

// What happens if user guesses the incorrect answer
function incorrect () {
    $(".game").html("Incorrect! The correct answer was:");
    $("#choices").html(answers[questionCount]);
    var image = $("<img>");
    image.attr("src", images[questionCount]);
    image.addClass("row");
    $("#choices").append(image);
    setTimeout(reset, 5000);
    $("#timer").text("");
    questionCount++;
}

// What happens if the user doesnt answer before time expires
function noAnswer () {
    $(".game").html("You didn't Answer! The correct answer was:");
    $("#choices").html(answers[questionCount]);
    var image = $("<img>");
    image.attr("src", images[questionCount]);
    image.addClass("row");
    $("#choices").append(image);
    setTimeout(reset, 5000);
    questionCount++;
}

// Sets up the button that when clicked starts the entire game
function start () {
    var button = $("<button>");
        button.text("Start");
        button.addClass("button");
        $("#choices").append(button);
        $(".button").on("click", function () {
            reset();
        })
}

// Function that resets the entire game at the end if user wants to play again
function restart () {
    
    var button = $("<button>");;
        button.text("Restart");
        button.addClass("button");
        $("#choices").append(button);
        wins = 0;
        losses = 0;

        $(".button").on("click", function () {
            questionCount = 0;
            reset();
        })
}

// Calls function start that gives the user the option to play the game
start();
    function check (x) {
        if (x === answers[questionCount]) {
            wins++;
            correct();
        }
        else {
            losses++;
            incorrect();
        }
    }

    // Page displayed at the end of the game
    function finish () {
        $(".game").html("");
        $("#wins").text("Correct: " + wins);
        $("#losses").text("Incorrect: " + losses);
        restart();
    }

    // Function that moves onto the next question or finishes the game if there arent any remaining questions
    function reset () {
        answer = "";
        if (questionCount < questions.length - 1) {
        $(".game").html("");
        $("#choices").html("");
        questionSetup();
        time = 30;
        }
        else {
            finish();
        }
    }

// Timer for the game
function count () {
    time--;
    $("#timer").text("Time Remaining: " + time);

    if (time === 0) {
        noAnswer();
        losses++;
        stop();
        $("#timer").text("");
    }
}

// Stops the counter when it reaches 0 after being called
function stop () {
    clearInterval(intervalId);
}
});