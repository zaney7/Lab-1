const btn = document.getElementById("my-button");
btn.addEventListener("click", () => {
console.log("You clicked me!");
});
document.getElementById('btn-under-100').addEventListener('click', function() {
    var counter = document.getElementById('counter-under-100');
    counter.textContent = parseInt(counter.textContent) + 1;
});

document.getElementById('btn-100-150').addEventListener('click', function() {
    var counter = document.getElementById('counter-100-150');
    counter.textContent = parseInt(counter.textContent) + 1;
});

document.getElementById('btn-150-200').addEventListener('click', function() {
    var counter = document.getElementById('counter-150-200');
    counter.textContent = parseInt(counter.textContent) + 1;
});

document.getElementById('btn-200-250').addEventListener('click', function() {
    var counter = document.getElementById('counter-200-250');
    counter.textContent = parseInt(counter.textContent) + 1;
});

document.getElementById('btn-over-250').addEventListener('click', function() {
    var counter = document.getElementById('counter-over-250');
    counter.textContent = parseInt(counter.textContent) + 1;
});