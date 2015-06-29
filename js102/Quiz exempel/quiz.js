// array med alla frågor
var questions = 
[
	// en fråga
	{
		// frågans text
		question: "What color is the sky",

		// array med möjliga svar
		answers: [
			"red", "blue", "yellow", "green", "oarnge", "monkey"
		],
		
		// index till rätt svar
		correct: 1
	},
	{
		question: "What color dose a lemon have",
		answers: [
			"yellow", "green", "unicorn"
		],
		correct: 0
	},
	{
		question: "Vad heter Isak",
		answers: [
			"Peter", "Isak", "Madonna", "Elin"
		],
		correct: 1
	}
];


$("document").ready(function () {
	var quizBox = $("#quiz");
	var questionBox = $("#question");
	var answers = $("#answers");

	// Nuvarande fråga
	var currentQuestion = 0;

	// Svar på frågor som användaren angivit
	var userAnswers = [];

	loadQuestion(currentQuestion);

	// Läs in en fråga
	function loadQuestion (index) {

		// Om de finns mågon fråga att läsa in
		if (index < questions.length) {

			// Ändrar frågetexten
			questionBox.html(questions[index].question);

			// Html som ska sättas in i som svarsalternativ
			var ansHtml = "";

			// Skapar an knapp för varje svarsalternativ i ansHtml texten
			for (var i = 0; questions[index].answers.length > i ; i++) {
				ansHtml += '<button class="ansBtn" data-i="' + i + '">' + questions[index].answers[i] + '</button>';
			}

			// Sätter in knapparna på sidan
			answers.html(ansHtml);

			checkInput(index);
		} else {

			// Visa resultat
			showResults();
		}
	}

	// Registrera knapptryckningar
	function checkInput (index) {

		// Lysna på alla svarsknappar
		$(".ansBtn").click(function () {
			var _this = $(this);

			// Lägg till svaret i userAnswers
			userAnswers.push(_this.data("i"));

			// Läs in nästa fråga och öka currentQuestion
			loadQuestion(++currentQuestion);
		});
	}

	// Visa resultat
	function showResults () {

		// Ändra frågetiteln
		questionBox.html("Results");

		// Html som ska sättas in i som resultat
		var resHtml = "";
		for (var i = 0; i < questions.length; i++) {

			// Om svaret är rätt
			if (questions[i].correct == userAnswers[i]) {
				resHtml += '<p class="correct">' + questions[i].answers[userAnswers[i]] + '</p>';
			} else {
				// Om svaret inte är rätt
				resHtml += '<p class="incorrect">' + questions[i].answers[questions[i].correct] + ' was right, you thought ' + questions[i].answers[userAnswers[i]] + '</p>';
			}
		}

		// Lägg till resHtml på sidan
		answers.html(resHtml);
	}

});