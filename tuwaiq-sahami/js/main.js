// document.addEventListener("DOMContentLoaded", function() {
//           const scrollContent = document.querySelector(".feedback");
//           const prevButton = document.querySelector(".back");
//           const nextButton = document.querySelector(".front");
      
//           prevButton.addEventListener("click", function() {
//               scrollContent.scrollBy({
//                   left: -100, 
//                   behavior: "smooth"
//               });
//           });
      
//           nextButton.addEventListener("click", function() {
//               scrollContent.scrollBy({
//                   left: 100, 
//                   behavior: "smooth"
//               });
//           });
//       });
const feedback = document.querySelector('.feedback');

feedback.addEventListener('mouseenter', () => {
    feedback.style.animation = 'none';
});

feedback.addEventListener('mouseleave', () => {
    feedback.style.animation = 'scroll 20s linear infinite'; 
});