const singnInBtn = document.querySelector("#show-login");
const closeBtnpoppup = document.querySelector(".popup .close-btn");
const sigInDashboard = document.querySelector('#sigInDashboard');
const tablehide = document.querySelector('#hiddentable');

//sign in pop up close 
singnInBtn.addEventListener("click", function () {
  const popupactive = document.querySelector(".popup");
  popupactive.classList.add("active");
});

closeBtnpoppup.addEventListener("click", function () {
  const popupRemove = document.querySelector(".popup");
     popupRemove.classList.remove("active");
});

//click sign in button for go to dashboard page

sigInDashboard.addEventListener('click', function () {
  console.log('hello');
  location.href = "dashboard.html";
})

//customer list table  
tablehide.addEventListener('click', function () {
  console.log('hello');
})