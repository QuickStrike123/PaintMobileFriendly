var Canvas = document.getElementById("Canvas").value;

var ctx = Canvas.getContext("2d");

var LastPostitionOfMouseX , LastPostitionOfMouseY;

var Colour = document.getElementById("TextColour").value;

var Width = document.getElementById("TextWidth").value;

var mouseEvent = "empty";

addEventListener("mousedown" , MouseDown);

function MouseDown(e) {

    Colour = document.getElementById("TextColour").value;

    Width = document.getElementById("TextWidth").value;

    mouseEvent = "mousedown";
    
}

addEventListener("mouseup" , MouseUp);

function MouseUp(e) {

    mouseEvent = "mouseup";
    
}

addEventListener("mouseleave" , MouseLeave);

function MouseLeave(e) {

    mouseEvent = "mouseleave";
    
}

addEventListener("mousemove" , MouseMove);

function MouseMove(e) {

    var CurrentPositionOfMouseX = e.clientX - Canvas.offsetLeft;

    var CurrentPositionOfMouseY = e.clientY - Canvas.offsetTop;

    if (mouseEvent == "mousedown") {

        ctx.beginPath();

        ctx.strokeStyle = Colour;

        ctx.lineWidth = Width;

        ctx.moveTo(LastPostitionOfMouseX , LastPostitionOfMouseY);

        ctx.lineTo(CurrentPositionOfMouseX , CurrentPositionOfMouseY);

        ctx.stroke();
        
    }

    LastPostitionOfMouseX = CurrentPositionOfMouseX;

    LastPostitionOfMouseY = CurrentPositionOfMouseY;
    
}

function ClearArea() {
    
    ctx.ClearRect(0 , 0 , ctx.Canvas.width , ctx.Canvas.height)

}

addEventListener("touchstart" , TouchMove);

function TouchMove(e) {

    Colour = document.getElementById("TextColour");

    Width = document.getElementById("TextWidth");
 
    var LastPostitionOfTouchX , LastPostitionOfTouchY;
    
}

addEventListener("touchmove" , touchMove);

function touchMove(e) {

    var CurrentPositionOfTouchX = e.touches[0].clientX - Canvas.offsetLeft;

    var CurrentPositionOfTouchY = e.touches[0].clientY - Canvas.offsetTop;

    ctx.beginPath();

    ctx.strokeStyle = Colour;

    ctx.lineWidth = width

    ctx.moveTo(LastPostitionOfTouchX , LastPostitionOfTouchY);

    ctx.lineTo(CurrentPositionOfTouchX , CurrentPositionOfTouchY);

    ctx.stroke;

    LastPostitionOfTouchX = CurrentPositionOfTouchX;

    LastPostitionOfTouchY = CurrentPositionOfTouchY;
    
}