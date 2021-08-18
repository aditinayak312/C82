var mouseEvent="empty";

canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    linewidth=document.getElementById("linewidth").value;
    mouseEvent="down";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="up";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="leave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentmouseX=e.clientX-canvas.offsetLeft;
    currentmouseY=e.clientY-canvas.offsetTop;
    if (mouseEvent=="down"){
        ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.arc(currentmouseX,currentmouseY,radius,0,2*Math.PI);
ctx.stroke();
    }
}
function clearA(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}