// 1) Scroll Navigation
// 메뉴 버튼을 클릭하면 선택된 영역으로 부드럽게 스크롤 되면서 이동되는 내비게이션 기능 만들기
var aTags = document.querySelectorAll("header a");
    // header의 a 태그를 가져온다
for(var i = 0; i < aTags.length; i ++) {
    aTags[i].onclick = function(e) {
        // 가져온 a 태그에 만든 함수를 적용한다
        e.preventDefault(); // 현재 이벤트의 기본 동작을 중지시킬 때 사용
        var target = document.querySelector(this.getAttribute("href")); // this는 이벤트가 발생한 오브젝트를 의미
            // 이벤트가 발생한 오브젝트의 href의 내용물을 가져오는 코드

        window.ScrollTo({
            // 원하는 지점으로 움직일 수 있다
            'behavior': 'smooth',
                // 어떻게 움직일지 정한다. smooth는 부드럽게
            'top': target.offsetTop
                // 움직인 후에 화면 최상단의 좌표
        })
    }
}


// 2) Image Slider
// 이미지가 일정시간 간격으로 슬라이드되도록 한다
var slider = document.querySelector("#slider");
var slides = slider.querySelector(".slides");
var slide = slides.querySelectorAll(".slide");

var currentSlide = 0;
    // 현재 화면에 보여지고 있는 슬라이드가 몇번 슬라이드인지 보여주기 위한 변수

setInterval(function() {
    // 3000ms 간격으로 function을 실행시킨다
    var from = -(1024 * currentSlide);
    var to = from - 1024;
        // from, to는 이미지가 현재 위치에서 어디로 이동할지 저장하는 변수
        // from에서 1024를 뺀 지점으로 이동한다
    slides.animate({
        // 슬라이드를 이동시킨다
        marginLeft: [from + "px", to + "px"]
            // from px에서 to px로 이동시킨다
    }, {
        //duration: 500,
            // 이미지가 이동하는 시간
        duration: 2000,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    currentSlide++;
        // 다음 슬라이드
    if (currentSlide === (slide.length - 1)) {
        currentSlide = 0;
        // 마지막 슬라이드일때는 0번 슬라이드로 바꾸나
    }
//}, 3000);
}, 5000);

// 3) Tabs
// 탭 버튼 기능 구현하기
// 탭을 클릭했을 때 원하는 화면 출력하기
var links = document.querySelectorAll(".tabs-list li a")
var items = document.querySelectorAll(".tabs-list li")
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        e.preventDefault;
            // a태그의 href는 그 위치로 이동시키는 기능이 있지만
            // 다른 기능을 원하므로 정지시킨다
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        // 탭에 클릭이 발생했을 때 function 호출
        var tabId = this.querySelector("a").getAttribute("href");
            // a태그의 링크를 가져온다
        console.log(this.classList);
        document.querySelectorAll(".tabs-list li, .tabs div.tab").forEach(function(item) {
            item.classList.remove("active");
                // 기존의 active라는 클래스를 제거한다
            console.log(item);
        });
        document.querySelector(tabId).classList.add("active");
            // active라는 클래스를 추가한다
        this.classList.add("active");
    }  
} 

// 4) Click Image Slider
// 화살표 버튼을 클릭했을 때  Fade효과가 적용된 이미지 슬라이드 기능을 구현하기
// fade 효과란 이미지가 서서히 나타났다가 서서히 사라지는 효과
document.querySelector(".right-arrow").onclick = function () {
    // 오른쪽 버튼의 element를 클릭했을 때 함수 실행
    var currentSlide = document.querySelector("#photo .slide.active");
        // slide.active인 사진을 가져옴
    var nextSlide = currentSlide.nextElementSibling;
        // 다음 형제 element를 가져옴
    if (nextSlide === null) {
        // 막내 슬라이드라면
        nextSlide = currentSlide.parentElement.firstElementChild;
            // 현재 슬라이드의 부모의 첫번째 자식을 가져옴
    }
        currentSlide.animate({
        opacity: [1, 0]
            // 투명도가 1에서 0으로 변한다
    }, {
        duration: 500,
        easing: "ease",
            // ease 방식으로
        iterations: 1,
            // 반복은 한 번
        fill: "both"
    });
    currentSlide.classList.remove("active");
        // class에서 active 를 삭제함
    nextSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both"
    });
    nextSlide.classList.add("active");
}

//왼쪽 이미지 슬라이드 기능 구현
document.querySelector(".left-arrow").onclick = function() {
    var currentSlide = document.querySelector("#photo .slide.active");
    var previousSlide = currentSlide.previousElementSibling;
    if (previousSlide == null) {
        previousSlide = currentSlide.parentElement.lastElementChild;
    }
    currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations : 1,
        fill: "both",
    })
    currentSlide.classList.remove("active");
    previousSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations : 1,
        fill: "both",
    })
    previousSlide.classList.add("active");
}
  
