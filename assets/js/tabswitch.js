const tabs = document.querySelectorAll('.tab');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

function updateTabDisplay(index) {
    tabs.forEach((tab, i) => {
        tab.classList.remove('active-tab');
        if (i === index) {
            tab.classList.add('active-tab');
        }
    });
}

rightArrow.addEventListener('click', () => {
    if (currentIndex < tabs.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateTabDisplay(currentIndex);
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = tabs.length - 1;
    }
    updateTabDisplay(currentIndex);
});

// Initialize with the first tab active
updateTabDisplay(currentIndex);