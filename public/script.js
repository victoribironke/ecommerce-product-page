const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const emptyDiv = document.querySelector(".empty");
const itemDiv = document.querySelector(".item");
const text = document.querySelector(".text");
const cartImg = document.querySelector(".cartImg");
const cartDiv = document.querySelector(".chacha");
cartImg.style.cursor = "pointer";

const changeCart = () => {
  setTimeout(() => {
    const counter = document.querySelector(".cha").textContent;
    const counterInt = parseInt(counter);

    if (counter != "0") {
      emptyDiv.classList.add("hide");
      itemDiv.classList.remove("hide");
      text.innerHTML = `$125.00 x ${counterInt} <span class='span'>$${
        125 * counterInt
      }.00</span>`;
    }
    if (counter == "0") {
      emptyDiv.classList.remove("hide");
      itemDiv.classList.add("hide");
    }
  }, 200);
};

plus.addEventListener("click", changeCart);
minus.addEventListener("click", changeCart);
cartImg.addEventListener("click", () => {
  console.log(cartDiv.classList);
});
