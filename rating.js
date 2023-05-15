// rating.js

// Initialize the rater number and ratings array
var raterNumber = 1;
var ratings = [];

// Function to handle the next button click event
function onNextButtonClick() {
  // Get the rating input value
  var ratingInput = document.getElementById("ratingInput");
  var rating = parseInt(ratingInput.value);

  // Validate the input
  if (isNaN(rating) || rating < 1 || rating > 10) {
    alert("Please enter a number between 1 and 10.");
    return;
  }

  // Add the rating to the ratings array
  ratings.push(rating);

  // Clear the input value
  ratingInput.value = "";

  // Increase the rater number
  raterNumber++;

  // Check if all raters have completed
  if (raterNumber > numRaters) {
    // Calculate the overall score
    var overallScore = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

    // Store the self score and feedback in local storage
    localStorage.setItem("selfScore", overallScore.toFixed(2));
    localStorage.setItem("feedback", generateFeedback(overallScore));

    // Redirect to the submission page
    window.location.href = "submit.html";
  } else {
    // Update the rater number on the page
    document.getElementById("raterNumber").innerText = "Rater Number " + raterNumber;
  }
}

// Function to generate feedback based on the overall score
function generateFeedback(overallScore) {
  // Generate the feedback based on the score
  var feedback = "";
  if (overallScore < 6) {
    feedback = "Recommendation: Consider focusing on personal development and self-improvement.";
  } else if (overallScore < 8) {
    feedback = "Recommendation: Continue to work on enhancing your desirable traits.";
  } else {
    feedback = "Recommendation: Congratulations! You have strong desirable traits.";
  }

  return feedback;
}
