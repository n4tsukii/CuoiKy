const thread = document.querySelector(".threads");
const replies = document.querySelector(".replies");
const logo = document.querySelector("#threadlogo");
const header = document.querySelector(".header");
const qrcode = document.querySelector("#qrcode-img");
const hiddenReplies = document.querySelector(".replies-post");
const main = document.querySelectorAll(".thread-main");
const repliesBtn = document.querySelectorAll(".replies-post");
const aLinks = document.querySelector("#a-links");

replies.addEventListener("click", () => {
  repliesBtn.forEach((x) => {
    x.classList.remove("hide");
  });

  main.forEach((x) => {
    x.classList.add("hide");
  });

  hiddenReplies.classList.add("show");
});

thread.addEventListener("click", () => {
  repliesBtn.forEach((x) => {
    x.classList.add("hide");
  });

  main.forEach((x) => {
    x.classList.remove("hide");
  });
});

logo.addEventListener("click", () => {
  document.body.classList.toggle("bgchange");
  thread.classList.toggle("bgchange");
  replies.classList.toggle("bgchange");
  aLinks.classList.toggle("textchange");
  document.body.style.transition = "1s";
});