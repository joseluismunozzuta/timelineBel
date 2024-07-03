import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyyRztCmDuib7FbpfYhsk7KJsIlpySJck",
    authDomain: "timelinebel.firebaseapp.com",
    projectId: "timelinebel",
    storageBucket: "timelinebel.appspot.com",
    messagingSenderId: "998005125683",
    appId: "1:998005125683:web:6b73f4f265724f48b86946"
};

const data = [
    { id: 1, slides: [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }, { index: 5 }] },
    { id: 2, slides: [{ index: 6 }, { index: 7 }, { index: 8 }, { index: 9 }, { index: 10 }] },
    { id: 3, slides: [{ index: 11 }, { index: 12 }, { index: 13 }, { index: 14 }, { index: 15 }] },
    { id: 4, slides: [{ index: 16 }, { index: 17 }, { index: 18 }, { index: 19 }, { index: 20 }] }
];

const dbData = [];

let elements = [];

function setBackgroundInitial() {
    let backgroundinitial = document.getElementById("container0");
    const min = 1;
    const max = 8;
    const random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    backgroundinitial.style.backgroundImage = `url(assets/img/hero${random_number}.jpg)`;
    backgroundinitial.style.backgroundPosition = "center";


    for (var g = 1; g <= 20; g++) {
        let swiper = document.getElementById(`swiper-slide${g}`);
        const min = 1;
        const max = 5;
        const random_number = Math.floor(Math.random() * (max - min + 1)) + min;
        swiper.style.backgroundImage = `url(assets/img/back${random_number}.jpg)`;
        swiper.style.backgroundPosition = "center";
    }

}

function buildFirstPagination() {
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
            initialSlide: 5,
            breakpoints: {
                768: {
                    direction: 'horizontal',
                }
            }
        });
    });
}

function setAllCarouselItems() {
    let carouselItemHtml1 = `<div
    class="carousel-item h-full flex justify-center ">
    <img
        src=`;
    let carouselItemHtml2 = `>
    </div>`;

    const finalArray = [];

    for (let i = 0; i < 20; i++) {
        let carousel = document.getElementById("carousel" + i);
        const subArray = imagesUrls.filter(url => url.includes(`/img/${i}/`));
        finalArray.push(subArray);
        for (var j = 0; j < finalArray[i].length; j++) {
            carousel.innerHTML += carouselItemHtml1 + subArray[j] + carouselItemHtml2;
        }
    }
}

const getFirebaseDocs = async () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const coll = collection(db, "/moments");
    const reading = await getDocs(query(coll, orderBy("timestamp", "asc")));
    return reading;
}

function addContainersAndSlides(dbDocs) {
    let newConts = Math.ceil(dbDocs / 5);
    console.log(newConts);
    let initial_containerid = 5;
    let initial_index = 21;
    let last_indexes = dbDocs % 5;

    let containerSection = document.getElementById("slides_section");

    for (let j = 0; j < newConts; j++) {
        let slides = [];
        let timestamp;
        let titulo;
        let descripcion;
        let url;
        let contDiv = document.createElement("div");
        contDiv.classList.add("container", "h-screen", "relative");
        contDiv.id = `container${initial_containerid}`;
        let previousDivId = `container${initial_containerid - 1}`;
        let slides_container_html = `
                <div class="timeline">
                    <a class="absolute bottom-0 right-0 p-1 m-1 scroll-down"
                        style="z-index:999"
                        data-value="${initial_containerid}">
                        <button type="button" style="background-color: white;"
                            class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:pointer-events-none w-8 max-w-[40px] h-8 max-h-[40px] text-xs text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:shadow-none rounded-full">
                            <span
                                class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em" viewBox="0 0 384 512"><path
                                        d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></span>
                        </button>
                    </a>
                    <a class="absolute bottom-0 left-0 p-1 m-1 scroll-up"
                        style="z-index:999"
                        data-value="${initial_containerid}">
                        <button type="button" style="background-color: white;"
                            class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:pointer-events-none w-8 max-w-[40px] h-8 max-h-[40px] text-xs text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:shadow-none rounded-full">
                            <span
                                class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em" viewBox="0 0 384 512"><path
                                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg></span>
                        </button>
                    </a>
                    <div class="swiper-container">
                        <div class="swiper-wrapper" id="swiper_container${initial_containerid}">
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
        `;
        contDiv.innerHTML = slides_container_html;
        let referencePrevCont = document.getElementById(previousDivId);
        containerSection.insertBefore(contDiv, referencePrevCont);
        let swiper_container_div = document.getElementById(`swiper_container${initial_containerid}`);

        let swiperHtml = ``;
        if (j == newConts - 1 && last_indexes !== 0) {
            for (let x = 0; x < last_indexes; x++) {
                timestamp = elements[j][x].timestamp;
                let date = new Date(timestamp.toMillis());

                let formattedDateWithoutYear = date.toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }).replace(/ de \d{4}$/, '');

                titulo = elements[j][x].title;
                descripcion = elements[j][x].description;
                url = elements[j][x].imgUrl;
                let slideDiv = document.createElement("div");
                slideDiv.classList.add("swiper-slide");
                let min = 1;
                let max = 5;
                let random_number = Math.floor(Math.random() * (max - min + 1)) + min;
                slideDiv.style.backgroundImage = `url(assets/img/back${random_number}.jpg)`;
                swiperHtml = `                
    
                <div class="swiper-slide-content">
                    <span
                        class="timeline-year">${formattedDateWithoutYear}</span>
                    <div
                        class="h-60 carousel carousel-vertical rounded-box"
                        id="carousel0">
                        <div class="carousel-item h-full flex justify-center ">
                    <img src="${url}">
                    </div>
    
                    </div>
                    <h4 class="timeline-title">${titulo}</h4>
                    <div class="timeline-text">${descripcion}
                    </div>
                </div>
                `;
                slideDiv.innerHTML = swiperHtml;
                swiper_container_div.appendChild(slideDiv);
                var ind = { index: initial_index };
                slides.push(ind);
                initial_index++;
            }
        } else {
            for (let x = 0; x < 5; x++) {
                timestamp = elements[j][x].timestamp;
                let date = new Date(timestamp.toMillis());

                let formattedDateWithoutYear = date.toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }).replace(/ de \d{4}$/, '');
                titulo = elements[j][x].title;
                descripcion = elements[j][x].description;
                url = elements[j][x].imgUrl;
                let slideDiv = document.createElement("div");
                slideDiv.classList.add("swiper-slide");
                let min = 1;
                let max = 5;
                let random_number = Math.floor(Math.random() * (max - min + 1)) + min;
                slideDiv.style.backgroundImage = `url(assets/img/back${random_number}.jpg)`;
                swiperHtml = `                
    
                <div class="swiper-slide-content">
                    <span
                        class="timeline-year">${formattedDateWithoutYear}</span>
                    <div
                        class="h-60 carousel carousel-vertical rounded-box"
                        id="carousel0">
                        <div class="carousel-item h-full flex justify-center ">
                    <img src="${url}">
                    </div>
    
                    </div>
                    <h4 class="timeline-title">${titulo}</h4>
                    <div class="timeline-text">${descripcion}
                    </div>
                </div>
                `;
                slideDiv.innerHTML = swiperHtml;
                swiper_container_div.appendChild(slideDiv);
                var ind = { index: initial_index };
                slides.push(ind);
                initial_index++;
            }
        }

        var obj = { id: initial_containerid, slides: slides };
        dbData.push(obj);
        initial_containerid++;
    }
}

function buildSecondPagination() {
    dbData.forEach(containerData => {
        const containerId = `container${containerData.id}`;
        const swiperSelector = `#${containerId} .swiper-container`;

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
            initialSlide: 5,
            breakpoints: {
                768: {
                    direction: 'horizontal',
                }
            }
        });
    });
}

function scrollButtonsLogic() {

    document.getElementById("scrollToContainer1").addEventListener('click', function () {
        document.getElementById("container1").scrollIntoView({ behavior: "smooth" });
    })

    let scrollDownElements = document.querySelectorAll('.scroll-down');
    scrollDownElements.forEach(function (element) {
        element.classList.add("opacity-60");
        let dataValue = element.getAttribute('data-value');
        //console.log('Down - Data Value:', dataValue);
        let nextCont = document.getElementById("container" + (parseInt(dataValue) + 1));
        if (nextCont) {
            //console.log("It has next container");
            element.addEventListener('click', function (e) {
                e.preventDefault();
                nextCont.scrollIntoView({ behavior: "smooth" });
            });
        } else {
            element.classList.add("invisible");
        }
    });

    let scrollUpElements = document.querySelectorAll('.scroll-up');
    scrollUpElements.forEach(function (element) {
        element.classList.add("opacity-60");
        let dataValue = element.getAttribute('data-value');
        //console.log('Up - Data Value:', dataValue);
        let prevCont = document.getElementById("container" + (dataValue - 1));
        if (prevCont) {
            //console.log("It has previous container");
            element.addEventListener('click', function (e) {
                e.preventDefault();
                prevCont.scrollIntoView({ behavior: "smooth" });
            });
        } else {
            element.classList.add("invisible");
        }
    });
}

document.addEventListener("DOMContentLoaded", async function () {

    setBackgroundInitial();

    buildFirstPagination();

    setAllCarouselItems();

    const collectionDocs = await getFirebaseDocs();

    //Convert to array
    const dataArray = collectionDocs.docs.map(doc => doc.data());
    for (let i = 0; i < dataArray.length; i += 5) {
        elements.push(dataArray.slice(i, i + 5));
    }

    let dbDocs = collectionDocs.size;

    console.log(dbDocs);

    addContainersAndSlides(dbDocs);

    buildSecondPagination();

    scrollButtonsLogic();

});

const imagesUrls = [
    "assets/img/0/20230810_203145.jpg",
    "assets/img/0/20230810_203154.jpg",
    "assets/img/0/20230810_203211.jpg",
    "assets/img/0/20230810_203213.jpg",
    "assets/img/0/20230810_203231.jpg",
    "assets/img/0/20230810_203312.jpg",
    "assets/img/1/0897edc1.jpg",
    "assets/img/1/1874478ce.jpg",
    "assets/img/1/27ac2c7e.jpg",
    "assets/img/1/3d8f417e.jpg",
    "assets/img/1/4251136.jpg",
    "assets/img/1/43fa384.jpg",
    "assets/img/1/4e06a9fc.jpg",
    "assets/img/1/5615fb48.jpg",
    "assets/img/1/5e6f5ad6.jpg",
    "assets/img/1/66fda627.jpg",
    "assets/img/1/9bc86855.jpg",
    "assets/img/1/ba414df9.jpg",
    "assets/img/1/bf377142.jpg",
    "assets/img/1/d1e71e.jpg",
    "assets/img/1/d4f83e5.jpg",
    "assets/img/1/f280fda4.jpg",
    "assets/img/1/_b1fa566b.jpg",
    "assets/img/10/020231006_174828.jpg",
    "assets/img/10/20231006_174843.jpg",
    "assets/img/10/920231006_174826.jpg",
    "assets/img/11/0120231006_192449.jpg",
    "assets/img/11/20231006_191242.jpg",
    "assets/img/11/20231006_192345.jpg",
    "assets/img/11/20231006_192620.jpg",
    "assets/img/11/20231006_192749.jpg",
    "assets/img/11/20231006_195847.jpg",
    "assets/img/12/020231023_200517.jpg",
    "assets/img/12/20231023_200242.jpg",
    "assets/img/12/20231023_200933.jpg",
    "assets/img/12/20231023_224406.jpg",
    "assets/img/12/20231023_224835.jpg",
    "assets/img/12/20231023_224934.jpg",
    "assets/img/13/20231026_190343.jpg",
    "assets/img/13/20231026_193104.jpg",
    "assets/img/13/20231026_193112.jpg",
    "assets/img/13/20231026_193142.jpg",
    "assets/img/13/20231026_193157.jpg",
    "assets/img/14/020231029_180044.jpg",
    "assets/img/14/20231029_175912.jpg",
    "assets/img/14/20231029_175928.jpg",
    "assets/img/14/20231029_175959.jpg",
    "assets/img/14/7130440.jpg",
    "assets/img/15/20231029_193442.jpg",
    "assets/img/15/20231029_194715.jpg",
    "assets/img/15/20231029_194757.jpg",
    "assets/img/15/20231029_201412.jpg",
    "assets/img/15/20231029_202213.jpg",
    "assets/img/15/20231029_204513.jpg",
    "assets/img/15/20231029_204800.jpg",
    "assets/img/15/20231029_205413.jpg",
    "assets/img/15/20231029_205430_06.jpg",
    "assets/img/16/20231029_212022.jpg",
    "assets/img/16/20231029_212026.jpg",
    "assets/img/17/020231101_004332.jpg",
    "assets/img/17/20231101_003942.jpg",
    "assets/img/17/20231101_004312.jpg",
    "assets/img/17/20231101_004406.jpg",
    "assets/img/17/20231101_040430.jpg",
    "assets/img/17/20231101_041603.jpg",
    "assets/img/17/20231101_041616.jpg",
    "assets/img/17/20231101_041639.jpg",
    "assets/img/17/20231101_041717.jpg",
    "assets/img/18/020231101_004201.jpg",
    "assets/img/18/20231101_004023.jpg",
    "assets/img/18/20231101_004052.jpg",
    "assets/img/18/20231101_004057.jpg",
    "assets/img/18/20231101_004233.jpg",
    "assets/img/18/20231101_004439.jpg",
    "assets/img/18/20231101_004506.jpg",
    "assets/img/18/20231101_004536.jpg",
    "assets/img/19/20231109_192751.jpg",
    "assets/img/19/20231109_193226.jpg",
    "assets/img/19/20231109_193349.jpg",
    "assets/img/19/20231109_202608.jpg",
    "assets/img/19/20231109_213648.jpg",
    "assets/img/19/20231109_213825.jpg",
    "assets/img/19/20231109_214106.jpg",
    "assets/img/19/20231109_214429.jpg",
    "assets/img/2/20230820_180520.jpg",
    "assets/img/2/20230820_180559.jpg",
    "assets/img/2/20230820_180602.jpg",
    "assets/img/2/20230820_180629.jpg",
    "assets/img/2/20230820_180634.jpg",
    "assets/img/2/20230820_180638.jpg",
    "assets/img/2/20230820_180933_05.jpg",
    "assets/img/2/20230820_181022.jpg",
    "assets/img/3/20230825_231746.jpg",
    "assets/img/3/20230825_231801.jpg",
    "assets/img/3/20230825_231807.jpg",
    "assets/img/4/20230912_000401.jpg",
    "assets/img/4/20230912_000432.jpg",
    "assets/img/4/20230912_000549.jpg",
    "assets/img/4/20230912_000556.jpg",
    "assets/img/4/20230912_000944.jpg",
    "assets/img/5/20230915_223022.jpg",
    "assets/img/5/20230919_224657.jpg",
    "assets/img/6/20230916_235526.jpg",
    "assets/img/7/20230921_202206.jpg",
    "assets/img/7/20230921_202355.jpg",
    "assets/img/8/00_20230923_214057.jpg",
    "assets/img/8/20230923_213444.jpg",
    "assets/img/8/20230923_213458.jpg",
    "assets/img/8/20230923_213625.jpg",
    "assets/img/8/20230923_214450.jpg",
    "assets/img/8/20230923_214501.jpg",
    "assets/img/8/20230923_230202.jpg",
    "assets/img/8/90230923_212250.jpg",
    "assets/img/9/20230929_223923.jpg",
    "assets/img/9/20230929_223944.jpg",
    "assets/img/9/20230929_224117.jpg",
    "assets/img/9/7c45.jpg"
]