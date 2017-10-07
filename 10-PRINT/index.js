let sketchReloadButton = document.getElementById('reloadSketch');
let sketchFrame = document.getElementById('sketch');
let windowReloadButton = document.getElementById('reloadWindow');
let scaleFactorSlider = document.getElementById('scaleFactor');
let lineColorSelector = document.getElementById('lineColor');

window.onload = () => {
    scaleFactorSlider.value = 50;
    lineColorSelector.value = '#ffffff';
}

sketchReloadButton.addEventListener('click', () => {
    sketchFrame.contentWindow.location.reload(true);
    sketchFrame.scrollIntoView();
});


windowReloadButton.addEventListener('click', () => {
    window.location.reload(true);
});

function insertParam(key, value) {
    key = encodeURI(key); value = encodeURI(value);
    var kvp = document.location.search.substr(1).split('&');
    var i = kvp.length; var x; while (i--) {
        x = kvp[i].split('=');
        if (x[0] == key) {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }
    if (i < 0) { kvp[kvp.length] = [key, value].join('='); }
    document.location.search = kvp.join('&');
}