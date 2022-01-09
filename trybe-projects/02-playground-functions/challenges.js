// Desafio 1
function compareTrue(b1, b2) {
    if (b1 === true && b2 === true) {
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
    return frase.split(" ");
}

// Desafio 4
function concatName(name) {
    return name[name.length - 1] + "," + " " + name[0];
}

// Desafio 5
function footballPoints(wins, ties) {
    return (3 * wins) + (1 * ties);
}
// Desafio 6
function highestCount(array) {
    let maior = Math.max(...array);
    let cont = 0;

    for (let index = 0; index < array.length; index++) {
        if (array[index] === maior) {
            cont = cont + 1;
        }
    }
    return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let gato1 = Math.abs(cat1 - mouse);
    let gato2 = Math.abs(cat2 - mouse);

    if (gato1 < gato2) {
        return "cat1";
    } else if (gato1 > gato2) {
        return "cat2";
    } else {
        return "os gatos trombam e o rato foge";
    }
}

// Desafio 8
function fizzBuzz(array) {
    let result = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] % 3 === 0 && array[index] % 5 === 0) {
            result.push("fizzBuzz");
        } else if (array[index] % 5 === 0) {
            result.push("buzz");
        } else if (array[index] % 3 === 0) {
            result.push("fizz");
        } else {
            result.push("bug!");
        }
    }
    return result;
}

// Desafio 9
function encode(string) {
    return string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/, 5);
}

function decode(string) {
    return string.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/, "u");
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};