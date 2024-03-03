function leetConverter(text) {
    const leetDict = {
        'a': '4',
        'b': '8',
        'c': '<',
        'd': '|)',
        'e': '3',
        'f': '|=',
        'g': '9',
        'h': '#',
        'i': '1',
        'j': '_|',
        'k': '|<',
        'l': '|',
        'm': '|\\/|',
        'n': '|\\|',
        'o': '0',
        'p': '|°',
        'q': '(,)',
        'r': '|2',
        's': '5',
        't': '7',
        'u': '|_|',
        'v': '\\/',
        'w': '\\/\\/',
        'x': '><',
        'y': '`/',
        'z': '2'
    };

    let leetText = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        leetText += leetDict[char] || text[i];
    }

    return leetText;
}

const inputText = prompt("Ingrese el texto a convertir a lenguaje hacker (leet):");
const leetResult = leetConverter(inputText);
console.log("Texto original:", inputText);
console.log("Lenguaje hacker (leet):", leetResult);
