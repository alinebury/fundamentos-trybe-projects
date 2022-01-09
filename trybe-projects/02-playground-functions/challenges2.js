// Desafio 10
function techList(array, name) {
    let newArray = [];

    for (let arr of array.sort()) {
        newArray.push({ tech: arr, name });
    }
    if (newArray.length === 0) {
        return "Vazio!";
    } else {
        return newArray;
    }
}

// Desafio 11
function generatePhoneNumber(phone) {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

}


// Desafio 13
function hydrate(string) {
    let number = string.match(/\d+/g).map(Number);
    let cont = 0;

    for (let index = 0; index < number.length; index++) {
        cont = cont + number[index];
    }
    if (cont === 1) {
        return "1 copo de água";
    } else {
        return cont + " copos de água";
    }
}

module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};