const nama  = "Nur Solikhin";
let umur = 10;

let biodata = document.getElementById("biodata");


function generateBiodata() {
    let generasi ;

    if (umur > 10 && umur < 20) {
     generasi = "generasi remaja.";
    } 
    else if (umur > 20 && umur < 30) {
      generasi = "generasi dewasa.";
    }
    else if (umur >= 30) {
        generasi = "generasi tua.";
    }
    else if (umur < 10 && umur > 2) {
        generasi = "generasi anak-anak.";
    }
    else {
        // kode yang akan dijalankan jika kondisi tidak terpenuhi
        generasi = "generasi bayi.";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(umur);

generateBiodata();