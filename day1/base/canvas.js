window.onload = function () {
    /* sample */
    const cvs = document.getElementById("my-canvas");
    const ctx = cvs.getContext("2d");
    ctx.fillStyle = "gray";
    ctx.fillRect(50, 50, 200, 100);

    /* implement here */
    ctx.fillStyle = "green";
    ctx.fillRect(50, 150, 300, 300);
}