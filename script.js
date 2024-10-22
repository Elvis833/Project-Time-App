function updateTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    document.getElementById('time').textContent = now.toLocaleTimeString('en-US', options);
}
document.getElementById('colorButton').addEventListener('click', function () {
    this.classList.toggle('clicked');
});
document.getElementById('alertButton').addEventListener('click', function () {
    alert("HEYYY, Stop clicking this button!");
});
setInterval(updateTime, 1000);
updateTime();
