const canvas = document.getElementsByClassName("drawing-board-canvas");

let context= canvas.getContext('2d');
context.fillstyle="white";

let draw_color= "black";
let draw_width= "2";
let is_drawing= false;

canvas.addEventListener("touchstart",start,false);
canvas.addEventListener("touchmove",draw,false);
canvas.addEventListener("mousedown",start,false);
canvas.addEventListener("mousemove",draw,false);


function start(event)
{
    is_drawing=true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop  );
    event.preventDefault();

}


function draw(event)
{
     if(is_drawing)
     {
         context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop  );
         context.strokeStyle = draw_color;
         context.linewidth=draw_width;
         context.lineCap= "round";
         context.lineJoin="round";
         context.stroke();


     }
}

