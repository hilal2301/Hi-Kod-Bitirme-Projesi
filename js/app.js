function intervalFly() {
  let today = new Date();
  let flyDate = new Date("2024-04-07");

  // console.log(today.getMonth());
  let remainingYear = flyDate.getFullYear() - today.getFullYear();
  if (remainingYear < 10) {
    remainingYear = "0" + remainingYear;
  }
  let remainingMonth = flyDate.getMonth() - today.getMonth() - 1;
  if (remainingMonth < 10) {
    remainingMonth = "0" + remainingMonth;
  }
  let remainingDay = 30 - flyDate.getDate() - today.getDate();
  if (remainingDay < 0) {
    remainingDay = -remainingDay;
  }
  if (remainingDay < 10) {
    remainingDay = "0" + remainingDay;
  }
  let remainingHour = 24 - flyDate.getHours() - today.getHours();
  if (remainingHour < 0) {
    remainingHour = -remainingHour;
  }
  if (remainingHour < 10) {
    remainingHour = "0" + remainingHour;
  }
  let remainingMinute = 60 - flyDate.getMinutes() - today.getMinutes();
  if (remainingMinute < 0) {
    remainingMinute = -remainingMinute;
  }
  if (remainingMinute < 10) {
    remainingMinute = "0" + remainingMinute;
  }
  let remainingSecond = 60 - flyDate.getSeconds() - today.getSeconds();
  if (remainingSecond < 0) {
    remainingSecond = -remainingSecond;
  }
  if (remainingSecond < 10) {
    remainingMinute = "0" + remainingMinute;
  }

  const output = `

  <div class="timer-box">
  <h5 class="numbers">${remainingYear}</h5>
  <p>YIL</p>
</div>


  <div class="timer-box">
  <h5 class="numbers">${remainingMonth}</h5>
  <p>AY</p>
</div>


  <div class="timer-box">
  <h5 class="numbers">${remainingDay}</h5>
  <p>GÜN</p>
</div>



<div class="timer-box">
  <h5 class="numbers">${remainingHour}</h5>
  <p>SAAT</p>
</div>



<div class="timer-box">
  <h5 class="numbers">${remainingMinute}</h5>
  <p>DAKİKA</p>
</div>



<div class="timer-box">
  <h5 class="numbers ">${remainingSecond}</h5>
  <p>SANİYE</p>
</div>


`;

  const intervalHtml = document.querySelector("#intervalId");
  intervalHtml.innerHTML = output;
  // console.log(output)
  return output;
}
intervalFly();

setInterval(() => {
  intervalFly();
}, 1000);

const target = document.querySelector("#timer-image");
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.className = "timer-image picture";
      console.log(entry);
    }
  });
};

const options = {
  threshold: 0,
};

const observer = new IntersectionObserver(callback, options);
observer.observe(target);

/* ---- TIMELINE ---- */

const boxes = document.querySelectorAll(".timeline-box");
window.addEventListener("scroll", displayContent);
function displayContent() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;
    if (topBox < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

let navbarNav = document.querySelector(".navbar-nav");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("navbar-active");
  navbarNav.classList.toggle("navbar-active");
});

let active = true;
function displayFunction(num) {
  const element = document.querySelector(`#timeline-content-${num}`);
  console.log(active);
  if (active === false) {
    element.classList.add("passive");
    element.classList.remove("block");
    active = active ? false : true;
  } else {
    element.classList.add("block");
    element.classList.remove("passive");
    active = active ? false : true;
  }
}
