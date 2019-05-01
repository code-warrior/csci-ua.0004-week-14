window.onload = () => {
    let backgroundImageToggleButton = document.querySelector(`button:first-of-type`);
    let svgToggleButton = document.querySelector(`button:last-of-type`);
    let svgContainer = document.getElementById(`svg-container`);
    let svg = document.querySelector(`[src="img/mouse.svg"]`);
    let backgroundImageIsShowing = true;
    let svgIsShowing = true;

    svgToggleButton.addEventListener(`click`, () => {
        if (svgIsShowing) {
            svg.style.display = `none`;
        } else {
            svg.style.display = `inline`;
        }

        svgIsShowing = !svgIsShowing;
    });

    backgroundImageToggleButton.addEventListener(`click`, () => {
        if (backgroundImageIsShowing) {
            svgContainer.style.backgroundImage = `none`;
        } else {
            svgContainer.style.backgroundImage = `url('img/mouse.jpg')`;
        }

        backgroundImageIsShowing = !backgroundImageIsShowing;
    });
};
