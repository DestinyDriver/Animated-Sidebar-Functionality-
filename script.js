const nav1 = document.querySelector(".nav1");
const nav2 = document.querySelector(".nav2");
const nav3 = document.querySelector(".nav3");
const nav4 = document.querySelector(".nav4");
const nav5 = document.querySelector(".nav5");
const but = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const navList = [nav1, nav2, nav3, nav4, nav5];

function addanimation(dir1, dir2) {
  navList.forEach((element, i) => {
    element.classList.remove(`slide-${dir1}-${i + 1}`);
    element.classList.add(`slide-${dir2}-${i + 1}`);
  });
}

function toggleNav() {
  overlay.classList.toggle("overlay-active");
  if (!overlay.classList.contains("overlay-active")) {
    addanimation("in", "out");
  } else {
    addanimation("out", "in");
  }
}

but.addEventListener("click", toggleNav);

// u can use .replace('"in","out") instead of add and remove
// what is toogle
