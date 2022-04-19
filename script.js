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
let z = 10;
windowContact.addEventListener('click', () => {
    windowContact.style.zIndex = z++;
})
windowPortfolio.addEventListener('click', () => {
    windowPortfolio.style.zIndex = z++;
})


// Make the DIV element draggable:
dragElement(document.getElementById("window-cont"));
dragElement(document.getElementById("window-portfolio"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}