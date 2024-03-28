var bgImg = [];
for (i = 1; i < 5; i++) {
  bgImg.push(`./img/year_${i}.jpeg`);
}

var index = 0; // 현재 이미지 인덱스
var $year23 = document.querySelector("#year .year .img_all");
console.log($year23);
function moveRight() {
  index++;

  if (index >= bgImg.length) {
    index = 0;
  }
  var nowImg = bgImg[index];
  $year23.style.backgroundImage = `url(${nowImg})`;
}
function moveLeft() {
  index--;

  if (index < 0) {
    index = bgImg.length - 1;
  }
  var nowImg = bgImg[index];
  $year23.style.backgroundImage = `url(${nowImg})`;
}

// 햄버거 이모티콘 누르기
var $menu = document.querySelector(".menu");

function openMenu() {
  $menu.classList.add("active");
}
function closeMenu() {
  $menu.classList.remove("active");
}
