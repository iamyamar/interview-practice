const productListEl = document.getElementById("product-list")
const loadingStateEl = document.getElementById("loading-state")
const errorStateEl = document.getElementById("error-state");
const reviewFormContainer = document.querySelector(".review-form-container");
const step1El = document.getElementById("step-1");
const step2El = document.getElementById("step-2");
const displayRatingEl = document.getElementById("display-rating");
const ratingInput = document.getElementById("rating");
const reviewTextEl = document.getElementById("review-text");
const charCountEl = document.getElementById("char-count");
const toastEl = document.getElementById("toast");

let currentProduct = null;
let currentStep = 1;


async function fetchProducts() {
    productListEl.innerHTML = "";
    loadingStateEl.hidden = false;
    errorStateEl.hidden = true;
    try {
        const products = await fetch("https://jsonplaceholder.typicode.com/todos")
        const list = await products.json()
        loadingStateEl.hidden = true;
        renderProductList(list)
    } catch(err){
        loadingStateEl.hidden = true
        errorStateEl.hidden = false
    }
}

function renderProductList(products){
    products.forEach((elem)=>{
        const li = document.createElement("li");
        li.textContent = elem.title;
        li.addEventListener("click",()=>selectedProduct(elem));
        productListEl.appendChild(li)
    })
}

function selectedProduct(product){
    currentProduct = product;
    reviewFormContainer.hidden = false;
    loadExistingReview();
}

function loadExistingReview() {
    const savedReview = JSON.parse(localStorage.getItem(currentProduct.id));
    if(savedReview) {
        ratingInput.value = savedReview.rating;
        reviewTextEl.value = savedReview.text;
        charCountEl.textContent =  `${savedReview.text.length/100}`;
        displayRatingEl.textContent = savedReview.rating;
    } else {
        ratingInput.value = "";
        reviewTextEl.value = "";
        charCountEl.textContent = "0/100";
        displayRatingEl.textContent = "";
    }
}

// Move to the next step
function nextStep() {
    if (!ratingInput.value) {
      alert("Please provide a rating");
      return;
    }

    currentStep = 2;
    displayRatingEl.textContent = ratingInput.value;
    step1El.hidden = true;
    step2El.hidden = false;
  }

  // Move to the previous step
  function prevStep() {
    currentStep = 1;
    step1El.hidden = false;
    step2El.hidden = true;
  }

  // Check review text length
  function checkReviewText() {
    const text = reviewTextEl.value;
    charCountEl.textContent = `${text.length}/100`;
  }

  // Submit the review
  function submitReview() {
    if (reviewTextEl.value.length > 100) {
      alert("Review text cannot exceed 100 characters");
      return;
    }
    if (!reviewTextEl.value) {
      alert("Please provide a review");
      return;
    }

    // Save review in LocalStorage
    const review = {
      rating: ratingInput.value,
      text: reviewTextEl.value,
    };
    localStorage.setItem(currentProduct.id, JSON.stringify(review));

    // Reset and show success message
    resetForm();
    showToast("Review for product submitted successfully");
  }

  // Reset form and return to product list
  function resetForm() {
    reviewFormContainer.hidden = true;
    step1El.hidden = false;
    step2El.hidden = true;
    ratingInput.value = "";
    reviewTextEl.value = "";
    charCountEl.textContent = "0/100";
    currentStep = 1;
  }

  // Show toast notification
  function showToast(message) {
    toastEl.textContent = message;
    toastEl.hidden = false;
    setTimeout(() => (toastEl.hidden = true), 3000);
  }

  // Initialize the app
  fetchProducts();