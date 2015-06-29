$(document).ready(function () {
	cards = [
		{
			question: "Hola",
			answer: "bye"
		}
	]

	$("#submit").click(function () {
		var card = {};
		card.question = $("#question").val();
		card.answer = $("#answer").val();

		cards.push(card);

		console.log(cards);
	});
});