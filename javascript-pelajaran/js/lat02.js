// document.querySelector("#paragraf").innerHTML = "saya belajar javascript";

// document.querySelector("#content").innerHTML = "<h1>ganti isi</h1>";

let tanggal = 10;
let bulan = 12;
let hasil = "salah";

if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
    hasil =  "Zodiak belum dibuat";
    if (bulan == 1) {
        hasil = "capricorn";
        if (tanggal > 19) {
            hasil = "Aquarius";
        }
    } 
    if (bulan == 2) {
        hasil = "Aquarius";
        if (tanggal > 19) {
            hasil = "Pisces";
        }
    }
    if (bulan == 3) {
        hasil = "Pisces";
        if (tanggal > 19) {
            hasil = "Aries";
        }
    }
    if (bulan == 4) {
        hasil = "Aries";
        if (tanggal > 19) {
            hasil = "Taurus";
        }
    }
    if (bulan == 5) {
        hasil = "Taurus";
        if (tanggal > 19) {
            hasil = "Gemini";
        }
    }
    if (bulan == 6) {
        if (tanggal > 19 && tanggal < 32) {
            hasil = "Cancer";
        }hasil = "Gemini";
    }
    if (bulan == 7) {
        if (tanggal > 19 && tanggal < 32) {
            hasil = "Leo";
        }hasil = "Cancer";
    }
    if (bulan == 8) {
        if (tanggal > 19 && tanggal < 32) {
            hasil = "Virgo";
        }hasil = "Leo";
    }
    if (bulan == 9) {
        if (tanggal > 19 && tanggal < 32) {
            hasil = "Libra";
        }hasil = "Virgo";
    }
    if (bulan == 10) {
        if (tanggal > 19 && tanggal < 32) {
            hasil = "Scorpio";
        }hasil = "Libra";
    }
    if (bulan == 11) {
        if (tanggal > 19 && tanggal < 32) {
            hasil = "Sagittarius";
        }hasil = "Scorpio";
    }
    if (bulan == 12) {
        if (tanggal > 19 && tanggal < 32) {
            hasil = "Capricorn";
        }hasil = "Sagittarius";
    }

}

// console.log(hasil);

document.querySelector("#content").innerHTML = '<h1>' + hasil + '</h1>';