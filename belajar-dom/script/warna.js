const buttonWarna = document.getElementById('ubahwarna');
const buttonResetWarna = document.getElementById('resetwarna');


buttonWarna.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    // document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ')';
});

buttonResetWarna.addEventListener('click',function () {
    document.body.style.backgroundColor = 'white';
    
})

const rangeRed = document.getElementById('redrange');
const rangeGreen = document.getElementById("greenrange");
const rangeBlue = document.getElementById("bluerange");

rangeRed.addEventListener('input', function () {
    const r = rangeRed.value;
    const g = rangeGreen.value;
    const b = rangeBlue.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
rangeGreen.addEventListener("input", function () {
  const r = rangeRed.value;
  const g = rangeGreen.value;
  const b = rangeBlue.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
rangeBlue.addEventListener("input", function () {
  const r = rangeRed.value;
  const g = rangeGreen.value;
  const b = rangeBlue.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});