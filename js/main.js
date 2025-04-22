// 스크롤 이동 기능
const navItems = document.querySelectorAll(".header__menu__item");
navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = item.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 프로젝트 필터링
const categoryButtons = document.querySelectorAll(".category");
const projects = document.querySelectorAll(".project");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 버튼 스타일 업데이트
    categoryButtons.forEach((btn) =>
      btn.classList.remove("category--selected")
    );
    button.classList.add("category--selected");

    const categoryText = button.innerText.split(" ")[0];
    projects.forEach((project) => {
      const title = project.querySelector(".project__title").innerText;
      if (categoryText === "ALL" || title.includes(categoryText)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// 스크롤 시 화살표(⬆️) 버튼 보이기
const arrowUp = document.querySelector(".arrow-up");

// 스크롤 시: 버튼 보이기/숨기기
document.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
});

// 클릭 시: 부드럽게 위로 스크롤
arrowUp.addEventListener("click", (event) => {
  event.preventDefault(); // 기본 동작 방지
  const home = document.querySelector("#home");
  home.scrollIntoView({ behavior: "smooth" });
});
