let sketchReloadButton = document.getElementById('reloadSketch');
let sketchHolder = document.getElementById('sketch-holder');
let sketchFrame = document.querySelector('.sketch');
let windowReloadButton = document.getElementById('reloadWindow');
let scaleFactorSlider = document.getElementById('scaleFactor');
let stochasticFactorSlider = document.getElementById('stochasticFactor');
let openControlPanelButton = document.getElementById('openControlPanel');
let controlPanel = document.getElementById('control-panel');
let controlPanelOpenStatus = false;

window.onload = () => {
    scaleFactorSlider.value = 50;
    stochasticFactorSlider.vale = 0.5;
}

openControlPanelButton.addEventListener('click', ()=> {
    if(controlPanelOpenStatus){
        controlPanel.style.display = 'none';
        sketchHolder.classList.remove('col-md-8');
        sketchHolder.classList.add('col-md-12');
        controlPanelOpenStatus = false;
        openControlPanelButton.innerText = 'Open Control Panel';
    }
    else{
        sketchHolder.classList.remove('col-md-12');
        sketchHolder.classList.add('col-md-8');
        controlPanel.style.display = 'block';
        controlPanelOpenStatus = true;
        openControlPanelButton.innerText = 'Close Control Panel';
    }
});

sketchReloadButton.addEventListener('click', () => {
    sketchFrame.contentWindow.location.reload(true);
    document.getElementById('sketch-holder').scrollIntoView();
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