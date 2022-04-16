const submitBtn = $(".submit-button");
const preSubmissionCard = $(".pre-submission-card");
const postSubmissionCard = $(".post-submission-card");
let submissionCircle = $("#submission-circle");
let selectedRating = null;

$(".circle-btns").click(function () {
	selectedRating = this.innerText;
	console.log(selectedRating);
	$(".circle").removeClass("selected");
	this.classList.add("selected");
});

$(".submit-button").click(function () {
	preSubmissionCard.addClass("hide");
	postSubmissionCard.removeClass("hide");
	$("#submission-circle").text("You selected " + selectedRating + " out of 5");
});
