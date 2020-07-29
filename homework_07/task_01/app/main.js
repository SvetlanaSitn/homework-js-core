function morseDecoder (line){
    let wordsArr = [];
    const words = line.split('  ');
    const encodes = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        ".-.-.-": ".",
        "--..--": ",",
        "..--..": "?",
        "-.-.--": "!" 
    }
    for (const word of words){
        const wordArr = word.split(' ').reduce((line, el) => {
            return line + encodes[el];
        }, '');
        wordsArr.push(wordArr);
    }
    return wordsArr.join(' ');
}
console.log(morseDecoder('.... . .-.. .-.. --- -.-.--'));