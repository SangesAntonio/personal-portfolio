console.log('js script')

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let time = h + ":" + m;
document.getElementById("hours").innerHTML = time;

/*funzione click icone
let dragValue;
function move(id) {
    const element = document.getElementById('window');
    element.style.position = 'absolute';
    element.onmousedown = function () {
        dragValue = element
    }
}
document.onmouseup = function (e) {
    dragValue = null;
}
document.onmousemove = function (e) {
    let x = e.pageX;
    let y = e.pageY
    dragValue.style.left = x + 'px';
    dragValue.style.top = y + 'px';
}*/

//click icone
const iconCont = document.getElementById('icon-contacts');
const iconPortfolio = document.getElementById('icon-portfolio');
const windowContact = document.getElementById('window-cont');
const windowPortfolio = document.getElementById('window-portfolio');


iconCont.addEventListener('click', () => {
    windowContact.classList.add('show')
})
iconPortfolio.addEventListener('click', () => {
    windowPortfolio.classList.add('show')
})

//chiudo finestra 

const closeWindow = document.getElementById('contact-close');
const closePortfolio = document.getElementById('portfolio-close');

closeWindow.addEventListener('click', () => {
    windowContact.classList.remove('show')
})
closePortfolio.addEventListener('click', () => {
    windowPortfolio.classList.remove('show')
})
// incremento x index
let z = 10000;
windowContact.addEventListener('click', () => {
    windowContact.style.zIndex = z++;
})
windowPortfolio.addEventListener('click', () => {
    windowPortfolio.style.zIndex = z++;
})
