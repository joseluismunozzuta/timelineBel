const data = [
    { id: 1, slides: [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }] },
    { id: 2, slides: [{ index: 5 }, { index: 6 }, { index: 7 }, { index: 8 }] },
    { id: 3, slides: [{ index: 9 }, { index: 10 }, { index: 11 }, { index: 12 }] },
    // Add more container data as needed
];

data.forEach(containerData => {
    const containerId = `container${containerData.id}`;
    const swiperSelector = `#${containerId} .swiper-container`;

    // Initialize a new Swiper instance for each container
    const timelineSwiper = new Swiper(swiperSelector, {
        direction: 'vertical',
        loop: false,
        speed: 1600,
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
            const number = containerData.slides[index].index;
            return `<span class="${className}">${number}</span>`;
        },
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            768: {
                direction: 'horizontal',
            }
        }
    });
});


function createSwipers() {
    var timelineSwiper = new Swiper('#container1 .swiper-container', {
        direction: 'vertical',
        loop: false,
        speed: 1600,
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
            var year = document.querySelectorAll('#container1 .swiper-slide')[index].getAttribute('data-year');
            console.log(year);
            console.log(index);
            console.log(className);
            return '<span class="' + className + '">' + year + '</span>';
        },
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            768: {
                direction: 'horizontal',
            }
        }
    });

    var timelineSwiper = new Swiper('#container2 .swiper-container', {
        direction: 'vertical',
        loop: false,
        speed: 1600,
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
            var year = document.querySelectorAll('#container2 .swiper-slide')[index].getAttribute('data-year');
            console.log(year);
            console.log(index);
            return '<span class="' + className + '">' + year + '</span>';
        },
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            768: {
                direction: 'horizontal',
            }
        }
    });
}
//createSwipers();
const scrollToContainer2Button = document.getElementById("scrollToContainer2");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");


scrollToContainer2Button.addEventListener("click", () => {
    container2.scrollIntoView({ behavior: "smooth" });
});