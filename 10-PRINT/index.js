let sketchReloadButton = document.getElementById('reloadSketch');
let sketchFrame = document.querySelector('.sketch');
let windowReloadButton = document.getElementById('reloadWindow');
let scaleFactorSlider = document.getElementById('scaleFactor');
let stochasticFactorSlider = document.getElementById('stochasticFactor');

window.onload = () => {
    scaleFactorSlider.value = 50;
    stochasticFactorSlider.vale = 0.5;
}

sketchReloadButton.addEventListener('click', () => {
    sketchFrame.contentWindow.location.reload(true);
    sketchFrame.scrollIntoView();
});


windowReloadButton.addEventListener('click', () => {
    window.location.reload(true);
});

scaleFactorSlider.addEventListener('change', controlPanelSettingsChanged);
stochasticFactorSlider.addEventListener('change', controlPanelSettingsChanged)

function controlPanelSettingsChanged() {
    let scaleFactor = scaleFactorSlider.value;
    let stochasticFactor = stochasticFactorSlider.value;
    console.log(stochasticFactor);
    let sketchFrameLocation = 'Sketch/10Print.html?';
    sketchFrameLocation += 'scaleFactor=' + scaleFactor;
    sketchFrameLocation += '&stochasticFactor=' + stochasticFactor;
    sketchFrame.contentWindow.location = sketchFrameLocation;
    console.log(sketchFrameLocation);
    sketchFrame.scrollIntoView();
}