const accordians = document.querySelectorAll(".accordian");

accordians.forEach((op) => {
  const icon = op.querySelector(".icon");
  const answer = op.querySelector(".answer");

  op.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
      answer.style.marginBottom = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.marginBottom = "12px";
    }
  });
});
