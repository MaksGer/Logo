
let red = 18;
let green = 70;
let blue = 166;

function generatedColor(argument) {

    let color = (argument === true)?randomColor():smartChange();

    function randomColor() {
        red = Math.random() * 255;
        green = Math.random() * 255;
        blue = Math.random() * 255;
        setColor();
    }
    function smartChange() {

        //Начало блока кривой логики
        if (red > green) {
            if (red > blue) red -= 17; //red самая большая величина
            else blue -= 17; //blue самая большая величина
        } else {
            if (green > blue) green -= 17; // green самая большая величина
            else blue -= 17; // blue самая большая величина
        }
        if (red < green) {
            if (red < blue) red += 25; //red самая маленькая величина
            else blue += 25; //blue самая маленькая величина
        }
        else {
            if (green < blue) green += 25; // green самая маленькая величина
            else blue += 25; // blue самая маленькая величина
        }
        //Конец блока кривой логики
    }
    setColor();

}
function setColor() {
    let elementsWithClassLogo = document.getElementsByClassName("logo");
    for (let i = 0; i < elementsWithClassLogo.length; i++) {
        elementsWithClassLogo[i].style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    }
}


setInterval(function() {generatedColor(2);}, 3000)

