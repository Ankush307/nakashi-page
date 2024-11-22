const menubar = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const body = document.body;

menubar.addEventListener("click", function () {
    menuList.classList.toggle("-right-full");
    menubarFirst.classList.toggle("w-[32px]")
    menubarFirst.classList.toggle("rotate-[-43deg]")
    menubarSecond.classList.toggle("rotate-[40deg]")
    menubarFirst.classList.toggle("translate-x-[-1px]")
    menubarFirst.classList.toggle("translate-y-[-7px]")
    menubar.classList.toggle("fixed")
    menuList.classList.toggle("right-0");
    body.classList.toggle("overflow-hidden")
    menuBar.addEventListener('click', () => {
    });

})
// =====================counter============================
for (let i = 1; i <= 4000; i++) {
    (function (i) {
        setTimeout(function () {
            document.getElementById('counter').innerText = i;
        }, i * 2);
    })(i);
}
// ======================team slider=====================
$(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
// ================================anime-slider=====================================
$(".anime-slider").slick({
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    centerMode: true,
    variableWidth: true,
    nextArrow: '.next_arrow',
    prevArrow: '.previous_arrow',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});