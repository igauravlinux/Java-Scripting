let cursor = document.getElementById("cursor");

document.addEventListener("mousemove",customCursor);



function customCursor(e) {
    cursor.style.left = (e.clientX - 50) + "px";
    cursor.style.top = (e.clientY - 50) + "px";
}