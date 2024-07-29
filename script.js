const container = document.querySelector(".container");
const btn = document.querySelector(".akim");
const count = document.querySelector(".count");
let countClicks = 0;

btn.addEventListener("click", () => {
countClicks++;

if (countClicks === 0) {
count.textContent = "0";
} else {
count.textContent = `${countClicks}`;
}
});

console.log(countClicks);