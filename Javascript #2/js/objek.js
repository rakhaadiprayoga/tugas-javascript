const objek = {
    nama : "Rakha",
    telp : 0987654321,

    buah : ["Apel", "jeruk", "Mangga"],

    coba : function () {
        return "Coba function dalam objek";
    },

    bolean : true,

    "tulis aja" : 1234456,

};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[1]);
console.log(objek.coba());
console.log(objek.bolean);
console.log(objek["tulis aja"]);