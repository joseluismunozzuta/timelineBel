const data = [
    { id: 1, slides: [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }] },
    { id: 2, slides: [{ index: 6 }, { index: 7 }, { index: 8 }, { index: 9 }, { index: 10 }] },
    { id: 3, slides: [{ index: 11 }, { index: 12 }, { index: 13 }, { index: 14 }, { index: 15 }] },
    { id: 4, slides: [{ index: 16 }, { index: 17 }, { index: 18 }, { index: 19 }] }
    // Add more container data as needed
];



data.forEach(containerData => {
    const containerId = `container${containerData.id}`;
    const swiperSelector = `#${containerId} .swiper-container`;
    console.log(containerData.slides);

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
const scrollToContainer1Button = document.getElementById("scrollToContainer1");
const scrollToContainer2Button = document.getElementById("scrollToContainer2");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");


scrollToContainer2Button.addEventListener("click", () => {
    container2.scrollIntoView({ behavior: "smooth" });
});

scrollToContainer1Button.addEventListener("click", () => {
    container1.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {

    let backgroundinitial = document.getElementById("heroInitial");
    const min = 1;
    const max = 8;
    const random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    backgroundinitial.style.backgroundImage = `url(/assets/img/hero${random_number}.jpg)`;
    backgroundinitial.style.backgroundPosition = "center";


    let carouselItemHtml1 = `<div
    class="carousel-item h-full flex justify-center ">
    <img
        src=`;
    let carouselItemHtml2 = `>
    </div>`;

    const finalArray = [];

    for (let i = 0; i < 19; i++) {
        let carousel = document.getElementById("carousel" + i);
        const subArray = imagesUrls.filter(url => url.includes(`/img/${i}/`));
        console.log(subArray);
        console.log(subArray.length);
        finalArray.push(subArray);
        for (var j = 0; j < finalArray[i].length; j++) {
            carousel.innerHTML += carouselItemHtml1 + subArray[j] + carouselItemHtml2;
        }
    }

});

const imagesUrls = [
    "/assets/img/0/20230810_203145.jpg",
"/assets/img/0/20230810_203154.jpg",
"/assets/img/0/20230810_203211.jpg",
"/assets/img/0/20230810_203213.jpg",
"/assets/img/0/20230810_203231.jpg",
"/assets/img/0/20230810_203312.jpg",
"/assets/img/1/0897edc1.jpg",
"/assets/img/1/1874478ce.jpg",
"/assets/img/1/27ac2c7e.jpg",
"/assets/img/1/3d8f417e.jpg",
"/assets/img/1/4251136.jpg",
"/assets/img/1/43fa384.jpg",
"/assets/img/1/4e06a9fc.jpg",
"/assets/img/1/5615fb48.jpg",
"/assets/img/1/66fda627.jpg",
"/assets/img/1/9bc86855.jpg",
"/assets/img/1/ba414df9.jpg",
"/assets/img/1/bf377142.jpg",
"/assets/img/1/d4f83e5.jpg",
"/assets/img/1/f280fda4.jpg",
"/assets/img/1/_b1fa566b.jpg",
"/assets/img/10/20231006_174826.jpg",
"/assets/img/10/20231006_174828.jpg",
"/assets/img/10/20231006_174843.jpg",
"/assets/img/11/20231006_191238.jpg",
"/assets/img/11/20231006_191242.jpg",
"/assets/img/11/20231006_192110.jpg",
"/assets/img/11/20231006_192345.jpg",
"/assets/img/11/20231006_192355.jpg",
"/assets/img/11/20231006_192419.jpg",
"/assets/img/11/20231006_192445.jpg",
"/assets/img/11/20231006_192449.jpg",
"/assets/img/11/20231006_192458.jpg",
"/assets/img/11/20231006_192606.jpg",
"/assets/img/11/20231006_192620.jpg",
"/assets/img/11/20231006_192628.jpg",
"/assets/img/11/20231006_192749.jpg",
"/assets/img/11/20231006_195847.jpg",
"/assets/img/12/20231023_200242.jpg",
"/assets/img/12/20231023_200512.jpg",
"/assets/img/12/20231023_200517.jpg",
"/assets/img/12/20231023_200933.jpg",
"/assets/img/12/20231023_224406.jpg",
"/assets/img/12/20231023_224835.jpg",
"/assets/img/12/20231023_224849.jpg",
"/assets/img/12/20231023_224934.jpg",
"/assets/img/12/20231023_224938.jpg",
"/assets/img/13/20231026_190343.jpg",
"/assets/img/13/20231026_193104.jpg",
"/assets/img/13/20231026_193110.jpg",
"/assets/img/13/20231026_193112.jpg",
"/assets/img/13/20231026_193115.jpg",
"/assets/img/13/20231026_193118.jpg",
"/assets/img/13/20231026_193127.jpg",
"/assets/img/13/20231026_193142.jpg",
"/assets/img/13/20231026_193152.jpg",
"/assets/img/13/20231026_193155.jpg",
"/assets/img/13/20231026_193157.jpg",
"/assets/img/13/20231026_193244.jpg",
"/assets/img/14/20231029_175912.jpg",
"/assets/img/14/20231029_175914.jpg",
"/assets/img/14/20231029_175928.jpg",
"/assets/img/14/20231029_175935.jpg",
"/assets/img/14/20231029_175959.jpg",
"/assets/img/14/20231029_180004.jpg",
"/assets/img/14/20231029_180044.jpg",
"/assets/img/14/20231029_180125.jpg",
"/assets/img/15/20231029_193420.jpg",
"/assets/img/15/20231029_193442.jpg",
"/assets/img/15/20231029_193535_05.jpg",
"/assets/img/15/20231029_193838_07.jpg",
"/assets/img/15/20231029_194414.jpg",
"/assets/img/15/20231029_194715.jpg",
"/assets/img/15/20231029_194745.jpg",
"/assets/img/15/20231029_194757.jpg",
"/assets/img/15/20231029_201314.jpg",
"/assets/img/15/20231029_201412.jpg",
"/assets/img/15/20231029_202152.jpg",
"/assets/img/15/20231029_202213.jpg",
"/assets/img/15/20231029_204411.jpg",
"/assets/img/15/20231029_204513.jpg",
"/assets/img/15/20231029_204613.jpg",
"/assets/img/15/20231029_204800.jpg",
"/assets/img/15/20231029_205413.jpg",
"/assets/img/15/20231029_205430_06.jpg",
"/assets/img/16/20231029_212022.jpg",
"/assets/img/16/20231029_212026.jpg",
"/assets/img/17/20231101_003914.jpg",
"/assets/img/17/20231101_003920.jpg",
"/assets/img/17/20231101_003942.jpg",
"/assets/img/17/20231101_004312.jpg",
"/assets/img/17/20231101_004332.jpg",
"/assets/img/17/20231101_004406.jpg",
"/assets/img/17/20231101_040430.jpg",
"/assets/img/17/20231101_041603.jpg",
"/assets/img/17/20231101_041616.jpg",
"/assets/img/17/20231101_041639.jpg",
"/assets/img/17/20231101_041717.jpg",
"/assets/img/18/20231101_004023.jpg",
"/assets/img/18/20231101_004052.jpg",
"/assets/img/18/20231101_004057.jpg",
"/assets/img/18/20231101_004201.jpg",
"/assets/img/18/20231101_004233.jpg",
"/assets/img/18/20231101_004439.jpg",
"/assets/img/18/20231101_004506.jpg",
"/assets/img/18/20231101_004536.jpg",
"/assets/img/2/20230820_180449.jpg",
"/assets/img/2/20230820_180515.jpg",
"/assets/img/2/20230820_180517.jpg",
"/assets/img/2/20230820_180520.jpg",
"/assets/img/2/20230820_180556.jpg",
"/assets/img/2/20230820_180559.jpg",
"/assets/img/2/20230820_180602.jpg",
"/assets/img/2/20230820_180617.jpg",
"/assets/img/2/20230820_180619.jpg",
"/assets/img/2/20230820_180622.jpg",
"/assets/img/2/20230820_180629.jpg",
"/assets/img/2/20230820_180634.jpg",
"/assets/img/2/20230820_180635.jpg",
"/assets/img/2/20230820_180638.jpg",
"/assets/img/2/20230820_180648.jpg",
"/assets/img/2/20230820_180650.jpg",
"/assets/img/2/20230820_180653.jpg",
"/assets/img/2/20230820_180658.jpg",
"/assets/img/2/20230820_180700.jpg",
"/assets/img/2/20230820_180704.jpg",
"/assets/img/2/20230820_180708.jpg",
"/assets/img/2/20230820_180726.jpg",
"/assets/img/2/20230820_180727.jpg",
"/assets/img/2/20230820_180801_08.jpg",
"/assets/img/2/20230820_180933_05.jpg",
"/assets/img/2/20230820_181019.jpg",
"/assets/img/2/20230820_181020.jpg",
"/assets/img/2/20230820_181022.jpg",
"/assets/img/2/20230820_181031.jpg",
"/assets/img/2/20230820_181050.jpg",
"/assets/img/3/20230825_231746.jpg",
"/assets/img/3/20230825_231755.jpg",
"/assets/img/3/20230825_231757.jpg",
"/assets/img/3/20230825_231759.jpg",
"/assets/img/3/20230825_231801.jpg",
"/assets/img/3/20230825_231807.jpg",
"/assets/img/4/20230912_000401.jpg",
"/assets/img/4/20230912_000432.jpg",
"/assets/img/4/20230912_000549.jpg",
"/assets/img/4/20230912_000556.jpg",
"/assets/img/4/20230912_000657.jpg",
"/assets/img/4/20230912_000914.jpg",
"/assets/img/4/20230912_000937.jpg",
"/assets/img/4/20230912_000944.jpg",
"/assets/img/5/20230915_223022.jpg",
"/assets/img/5/20230919_224657.jpg",
"/assets/img/6/20230916_235526.jpg",
"/assets/img/7/20230921_202206.jpg",
"/assets/img/7/20230921_202355.jpg",
"/assets/img/8/00_20230923_214057.jpg",
"/assets/img/8/20230923_213324.jpg",
"/assets/img/8/20230923_213444.jpg",
"/assets/img/8/20230923_213458.jpg",
"/assets/img/8/20230923_213609.jpg",
"/assets/img/8/20230923_213625.jpg",
"/assets/img/8/20230923_214036.jpg",
"/assets/img/8/20230923_214419.jpg",
"/assets/img/8/20230923_214450.jpg",
"/assets/img/8/20230923_214501.jpg",
"/assets/img/8/20230923_214532.jpg",
"/assets/img/8/20230923_230202.jpg",
"/assets/img/8/90230923_212250.jpg",
"/assets/img/9/20230929_223923.jpg",
"/assets/img/9/20230929_223944.jpg",
"/assets/img/9/20230929_224117.jpg",
"/assets/img/9/7c45.jpg"
]