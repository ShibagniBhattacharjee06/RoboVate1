let currentPage = 0;

function nextPage() {
    const book = document.querySelector('.book');
    currentPage += 180;
    book.style.transform = `rotateY(${currentPage}deg)`; 

function previousPage() {
    const book = document.querySelector('.book');
    currentPage -= 180;
    book.style.transform = `rotateY(${currentPage}deg)`; 
}

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const moreInfo = this.previousElementSibling;
        
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';  
            this.textContent = 'Read Less';   
        } else {
            moreInfo.style.display = 'none'; 
            this.textContent = 'Read More';   
        }
    });
});
}
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        const moreInfo = this.previousElementSibling; 
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            moreInfo.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}


function checkScroll() {
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => {
        if (isInViewport(box)) {
            box.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', checkScroll);


window.addEventListener('load', checkScroll);
