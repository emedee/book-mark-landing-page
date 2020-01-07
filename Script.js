let simpleBookmarking = document.querySelector('#lip1');
let speedySearching = document.querySelector('#lip2');
let easySharing = document.querySelector('#lip3');
let firstTab = document.querySelector('.block');
let secondTab = document.querySelector('.none');
let thirdTab = document.querySelector('.none1');
let whatIsBookmark = document.querySelector('.q1');
let requestNewBrowser = document.querySelector('.q2');
let isThereMobileApp = document.querySelector('.q3');
let otherBrowsers = document.querySelector('.q4');
let firstAccordion = document.querySelector('.non1')
let secondAccordion = document.querySelector('.non2')
let thirdAccordion = document.querySelector('.non3')
let fourthAccordion = document.querySelector('.non4');
let hamburgerIcon = document.querySelector('.hamb');
let hamburgerMenu = document.querySelector('.mybar');
let body = document.querySelector('.body');
let closeIcon = document.querySelector('.ww2');
let myDisplay = document.querySelector('.mydisp');
let myDisplay1 = document.querySelector('.mydisp1');
let myDisplay2 = document.querySelector('.mydisp2');
let myArray = [firstAccordion, secondAccordion, thirdAccordion, fourthAccordion];
let anotherArray = [whatIsBookmark, requestNewBrowser, isThereMobileApp, otherBrowsers];


simpleBookmarking.addEventListener('click', function(){
    firstTab.style.display = 'flex';
    secondTab.style.display = 'none';
    thirdTab.style.display = 'none';
    myDisplay.style.display = 'block';
    myDisplay1.style.display = 'none';
    myDisplay2.style.display = 'none';
})
speedySearching.addEventListener('click', function(){
    firstTab.style.display = 'none';
    secondTab.style.display = 'flex';
    thirdTab.style.display = 'none';
    myDisplay.style.display = 'none';
    myDisplay1.style.display = 'block';
    myDisplay2.style.display = 'none';
})
easySharing.addEventListener('click', function(){
    firstTab.style.display = 'none';
    secondTab.style.display = 'none';
    thirdTab.style.display = 'flex';
    myDisplay.style.display = 'none';
    myDisplay1.style.display = 'none';
    myDisplay2.style.display = 'block';
})
// whatIsBookmark.addEventListener('click', function(){
//     if (firstAccordion.style.display === 'block') {
//         firstAccordion.style.display = 'none';
//     } else {
//         firstAccordion.style.display = 'block';
//     }
// })
// requestNewBrowser.addEventListener('click', function(){
//     if (secondAccordion.style.display === 'block') {
//         secondAccordion.style.display = 'none';
//     } else {
//         secondAccordion.style.display = 'block';
//     }
// })
// isThereMobileApp.addEventListener('click', function(){
//     if (thirdAccordion.style.display === 'block') {
//         thirdAccordion.style.display = 'none';
//     } else {
//         thirdAccordion.style.display = 'block';
//     }
// })
// otherBrowsers.addEventListener('click', function(){
//     if (fourthAccordion.style.display === 'block') {
//         fourthAccordion.style.display = 'none';
//     } else {
//         fourthAccordion.style.display = 'block';
//     }
// })
for (i = 0; i < anotherArray.length; i++)
    anotherArray[i].addEventListener('click', function(){
    this.classList.toggle('active');

    myArray = this.nextElementSibling;
    if(myArray.style.display === 'block'){
        myArray.style.display = 'none'
    } else {
        myArray.style.display = 'block'
    }   
    })
hamburgerIcon.addEventListener('click', function(){
    hamburgerMenu.style.display = 'block';
    body.style.display = 'none';
})
closeIcon.addEventListener('click', function(){
    hamburgerMenu.style.display = 'none';
    body.style.display = 'block';
})