// Get the number of raters from localStorage or default to 1
var numRaters = localStorage.getItem("numRaters") || 1;
var currentRater = 1;

// Function to store the self-ratings and number of raters in localStorage
function storeRatings() {
  // Get the self-ratings
  var selfRatings = [];
  var selfRatingElements = document.querySelectorAll(".self-rating");
  for (var i = 0; i < selfRatingElements.length; i++) {
    selfRatings.push(parseFloat(selfRatingElements[i].value));
  }

  // Store the self-ratings and number of raters in localStorage
  localStorage.setItem("selfRatings", JSON.stringify(selfRatings));
  localStorage.setItem("numRaters", numRaters);
}

// Function to load the self-ratings and display the appropriate screen
function loadRatings() {
  // Get the self-ratings from localStorage
  var selfRatings = JSON.parse(localStorage.getItem("selfRatings")) || [];

  // Check if all self-ratings have been entered
  if (selfRatings.length === 0 || selfRatings.includes(null) || selfRatings.includes(undefined)) {
    // Display the self-ratings screen
    displaySelfRatings();
  } else {
    // Display the rating screen for the current rater
    displayRatingScreen();
  }
}

// Function to display the self-ratings screen
function displaySelfRatings() {
  // Hide the rating screen
  document.getElementById("ratingScreen").style.display = "none";

  // Show the self-ratings screen
  document.getElementById("selfRatingsScreen").style.display = "block";
}

// Function to display the rating screen for the current rater
function displayRatingScreen() {
  // Hide the self-ratings screen
  document.getElementById("selfRatingsScreen").style.display = "none";

  // Show the rating screen
  document.getElementById("ratingScreen").style.display = "block";

  // Update the rater number
  document.getElementById("raterNumber").textContent = "Rater " + currentRater;

  // Clear any existing ratings
  var ratingInputs = document.querySelectorAll(".rating-input");
  for (var i = 0; i < ratingInputs.length; i++) {
    ratingInputs[i].value = "";
  }
}

// Function to handle the submission of ratings
function submitRatings() {
  // Get the ratings from the inputs
  var ratings = [];
  var ratingInputs = document.querySelectorAll(".rating-input");
  for (var i = 0; i < ratingInputs.length; i++) {
    ratings.push(parseFloat(ratingInputs[i].value));
  }

  // Store the ratings in localStorage
  localStorage.setItem("ratings" + currentRater, JSON.stringify(ratings));

  // Move to the next rater or display the results
  if (currentRater < numRaters) {
    currentRater++;
    displayRatingScreen();
  } else {
    window.location.href = "submit.html";
  }
}

// Function to start the rating process
function startRating() {
  // Get the number of raters
  numRaters = parseInt(document.getElementById("numRaters").value) || 1;

  // Redirect to the rating page
  window.location.href = "rating.html";
}
