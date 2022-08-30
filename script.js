const tabsBtn = document.querySelectorAll(".tabs__nav-btn");

const tabsItem = document.querySelectorAll(".tabs__item");

const popupOpen = document.querySelector('.open-btn');

tabsBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let activeBtn = btn;
        console.log(activeBtn);

        let tabId = activeBtn.getAttribute("data-tab");
        console.log(tabId);

        let activeTab = document.querySelector(tabId);

        tabsBtn.forEach(function (btn) {
            btn.classList.remove('active');
        })

        tabsItem.forEach(function (item) {
            item.classList.remove('active');
        })

        activeBtn.classList.add('active');
        activeTab.classList.add('active');

        // зробити щоб при кліку на кожну tab кнопку опис popup кнопки змінювався на назву клікнутого бренду

        popupOpen.textContent = 'Buy Vlone'
    });
});



const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');

const popupClose = document.querySelector('.close-popup');

popupOpen.addEventListener('click', function () {
    popupBg.classList.add('active');
    popup.classList.add('active');

});

popupClose.addEventListener('click', function () {
    popupBg.classList.remove('active');
    popup.classList.remove('active');

});

document.addEventListener('click', (event) => {
    if (event.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('acrive');
    }
});


let deadline = '09-01-2022';
function getTime(endtime) {

    let time = Date.parse(deadline) - Date.parse(new Date());
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let hours = Math.floor(time / (1000 * 60 * 60)) % 24;
    let days = Math.floor((time / (1000 * 60 * 60 * 24)));

    return {
        'total': time,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'days': days,
    };

};



function setTime(id, endtime) {
    let timer1 = document.getElementById(id);
    let seconds = timer1.querySelector('.seconds');
    let minutes = timer1.querySelector('.minutes');
    let hours = timer1.querySelector('.hours');
    let days = timer1.querySelector('.days');
    timeInterval = setInterval(updateTime, 1000);

    function updateTime() {
        let time = getTime(endtime);
        seconds.textContent = `${time.seconds} Seconds`;
        minutes.textContent = `${time.minutes} Minutes`;
        hours.textContent = `${time.hours} Hours`;
        days.textContent = `${time.days} Days`;

        if (time.total <= 0) {
            clearInterval(timeInterval);
        };

    };

};

setTime('timer1', deadline);