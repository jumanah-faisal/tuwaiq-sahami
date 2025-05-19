// JavaScript to create and toggle the display of more cards
const cardContainer = document.getElementById("cardContainer");
const showMoreButton = document.getElementById("showMoreButton");

// Arrays of data for each card
const names = [" فرح حميدي", " لمى الداود", " جمانة العشيوان", " الهنوف العريني ", "Investor 5", "Investor 6", "Investor 7", "Investor 8"];
const investorTypes = ["الاسهم", " عملات الرقمية", " العقار", "...", "...", ".. .", ".. .", "..."];
const yearsOfExperience = [5, 15, 10, 3, 5, 8, 10, 3];
const followerCount = [780,951,4247,900,671,543,12,19]

// Array of image URLs
const profilePictures = [
    "../media/userimg2.png",
    "../media/userimg2.png",
    "../media/userimg2.png",
    "../media/userimg2.png",
    "../media/userimg2.png",
    "../media/userimg2.png",
    "../media/userimg2.png",
    "../media/userimg2.png"
];

// Array of page URLs
const pageUrls = [
    "farahinvestor.html",
    "lamainvestor.html",
    "alhanoufinvestor.html",
    "jumanahinvestor.html",

];

// Function to create a card element with data from arrays
function createCard(investorNumber) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${profilePictures[investorNumber - 1]}" alt="${names[investorNumber - 1]}" style="width: 70px; height: 70px;"> <!-- Adjust width and height here -->
        <h2>${names[investorNumber - 1]}</h2>
        <p>المجال: ${investorTypes[investorNumber - 1]}</p>
        <p>سنوات الخبرة: ${yearsOfExperience[investorNumber - 1]} سنوات</p>
        <p>عدد المستفيدين: ${followerCount[investorNumber - 1]}</p>

        <div class="star-rating">
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
        </div>
        <a href="${pageUrls[investorNumber - 1]}" class="read-more-button">تعرف اكثر</a>
    `;
    return card;

}

let nextInvestorNumber = 1; 
const maxCards = 9; 
// Function to check if the button should be hidden
function checkButtonVisibility() {
    if (nextInvestorNumber >= maxCards) {
        showMoreButton.style.display = "none"; // Hide the button
    }
}

// Add the initial four cards
for (let i = 0; i < 4; i++) {
    const card = createCard(nextInvestorNumber);
    cardContainer.appendChild(card);
    nextInvestorNumber++;
}

checkButtonVisibility();

showMoreButton.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        if (nextInvestorNumber < maxCards) {
            const card = createCard(nextInvestorNumber);
            cardContainer.appendChild(card);
            nextInvestorNumber++;
        }
    }
    checkButtonVisibility(); // Check visibility after adding cards
});