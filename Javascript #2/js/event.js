function tampil(b) {
    a = document.querySelector("p").innerText="Sedang mempelajari materi event JS " + b;
    //a.innerText="Sedang mempelajari materi event JS";
    console.log("Sedang mempelajari materi event JS");
}

judul.onclick = function () {
    console.log("Sedang mempelajari materi event JS menggunakan id");

    document.querySelector(".isi").innerHTML="Sedang mempelajari materi event JS menggunakan id";
}