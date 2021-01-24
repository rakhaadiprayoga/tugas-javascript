let coba = function () {
    return "Coba function";
}

let buah = [
    'apel',
    'mangga',
    'jeruk',
    10,
    coba(),
    tes = () => "Hasil return arrow function",
    function nama() {
        return "Belajar javascript";
    }
];

console.log(buah);

console.log(buah[0]);

for(let i in buah){
    console.log(buah[i]);
}

console.log(buah[5]());

console.log(buah[6]());

