const singnInBtn = document.querySelector("#show-login");
const closeBtnpoppup = document.querySelector(".popup .close-btn");
const sigInDashboard = document.querySelector('#sigInDashboard');
const tablehide = document.querySelector('.container #hiddentable');

//sign in pop up close 
singnInBtn.addEventListener("click", () => {
  const popupactive = document.querySelector(".popup");
  popupactive.classList.add("active");
});

closeBtnpoppup.addEventListener("click", () => {
 const popupRemove = document.querySelector(".popup");
   popupRemove.classList.remove("active");
 });

//click sign in button for go to dashboard page

sigInDashboard.addEventListener('click', () => {
  console.log('hello');
  location.href = "dashboard.html";
})

//customer list table  
tablehide.addEventListener('click', () => {
    console.log('hello');
  });

