// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = 'none';
//     // atau bisa (tapi menambahkan params e)
//     e.target.parentElement.style.display ='none';
//   });
// };
// close.forEach( function(el) {
//     console.log('ini console el :' + el);
//     el.addEventListener('click', function (e) {
//         console.log('Clicker:', e.target);
//         e.target.parentElement.style.display = 'none';
//     });
// });

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  } else if (e.target.classList.contains("card")) {
    alert("ok");
    e.stopPropagation(); // Mencegah event bubbling
  }
});
