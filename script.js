
//INICIAL DATA
let currentColor = 'black';
let canDraw =  false;
let screen = document.queryCommandValue('#tela');
let ctx = screen.getContext('2d');

//EVENTS
document.querySelectorAll('.colorArea .color').forEach(item =>{
   item.addEventListener('click', colorClickEvent); 
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);


//FUNCTIONS
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active');
}


function mouseDownEvent(){
    canDraw = true;
}


function mouseMoveEvent(e){
    if(canDraw){
        let pointX = e.pageX - screen.offsetLeft;
        let pointY = e.pageY - screen.offsetTop
    }
}


function mouseUpEvent(){
    canDraw = false;
}

//Parei em 30:00
