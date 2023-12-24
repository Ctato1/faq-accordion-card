const lists = document.querySelectorAll("li");

lists.forEach((item) => {
  item.addEventListener("click", (el) => {
    const closestLi = el.target.closest("li");


    if (closestLi.classList.contains("active")) {
      closestLi.classList.remove("active");
    } else {
      lists.forEach((li) => {
        li.classList.remove("active");
      });
      closestLi.classList.add("active");
    }
  });
});
