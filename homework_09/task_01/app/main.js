class MarkerPen{
    constructor(color, ink){
        this.color = color;
        this.ink = ink;
    }

    print(str) {
        let content = document.querySelector(".page");
        for (let i = 0; i < str.length; i++) {
            if (this.ink != 0) {
                if (str[i] == " ") {
                    this.ink += 0.5;
                }
                content.innerHTML += str[i];
                content.style.color = this.color;
                this.ink -= 0.5;
            } else {
                document.write("Not enough ink!");
                break;
            }
        }
    }
}

class FillUpMarker extends MarkerPen {
    fill(ink) {
        if (ink > 100) {
            ink = 100;
        }
        this.ink += ink;
    }
}

function rndColor() {
    return '#' + Math.floor(Math.random() * 12345678).toString(16);
}

let markerPen = new FillUpMarker($color = rndColor(), 5);
markerPen.fill(150);
const exmStr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
markerPen.print(exmStr);

/* let markerPenTwo = new FillUpMarker($color = rndColor(), 5);
markerPenTwo.fill(15);
const exampleStr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
markerPenTwo.print(exampleStr); */