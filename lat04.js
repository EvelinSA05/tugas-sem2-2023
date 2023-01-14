zodiak(5, 4);
function zodiak(bln, tgl) {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "Capricorn";
            if (tgl > 21) {
                hasil = "Aquarius";
            }
        }
        if (bln == 2 && tgl < 30) {
            hasil = "Aquarius";
            if (tgl > 19) {
                hasil = "Pisces";
            }
        }
        if (bln == 3) {
            hasil = "Pisces";
            if (tgl > 20) {
                hasil = "Aries";
            }
        }
        if (bln == 4) {
            hasil = "Aries";
            if (tgl > 19) {
                hasil = "Taurus";
            }
        }
        if (bln == 5) {
            hasil = "Taurus";
            if (tgl > 20) {
                hasil = "Gemini";
            }
        }
        if (bln == 6) {
            hasil = "Gemini";
            if (tgl > 21) {
                hasil = "Cancer";
            }
        }
        if (bln == 7) {
            hasil = "Cancer";
            if (tgl > 23) {
                hasil = "Leo";
            }
        }
        if (bln == 8) {
            hasil = "Leo";
            if (tgl > 23) {
                hasil = "Virgo";
            }
        }
        if (bln == 9) {
            hasil = "Virgo";
            if (tgl > 22) {
                hasil = "Libra";
            }
        }
        if (bln == 10) {
            hasil = "Libra";
            if (tgl > 22) {
                hasil = "Scorpio";
            }
        }
        if (bln == 11) {
            hasil = "Scorpio";
            if (tgl > 22) {
                hasil = "Sagitarius";
            }
        }
        if (bln == 12) {
            hasil = "Sagitarius";
            if (tgl > 21) {
                hasil = "Capricorn";
            }
        }
    }
    console.log(hasil);
}

lulus(100);
function lulus(nilai) {
    let hasil = "nilai tidak sesuai";
    if (nilai >= 0 && nilai <= 100) {
        hasil = "Anda Tidak Lulus, Nilai di Bawah KKM";
        if (nilai >= 70) {
            hasil = "Anda Lulus, Nilai di Atas KKM";
        }
    }
    console.log(hasil);
}

function terbilang(angka) {
    const bil = {0:'Nol', 1:'Satu', 2:'Dua', 3:'Tiga', 4:'Empat', 5:'Lima', 6:'Enam', 7:'Tujuh', 8:'Delapan', 9:'Sembilan'};
    
    if (angka < 100000000) {
    
        if (angka < 10) {
            return bil[angka];
        }

        if (angka < 20) {
            const belasan = Math.floor(angka/10);
            const satuan = angka % 10;

            if (satuan === 0) {
                return 'Sepuluh' ; 
            }
            if (satuan === 1) {
                return 'Sebelas';
            }else{
                return bil[satuan] + ' Belas';
            }
        }

        if (angka < 100) {
            const puluhan = Math.floor(angka/10);
            const satuan = angka % 10;

            if (satuan === 0) {
                return bil[puluhan] + ' Puluh ';
            }else{
                return bil[puluhan] + ' Puluh ' + bil[satuan];
            }
        }

        if (angka < 1000) {
            const ratusan = Math.floor(angka/100);
            const satuan = angka % 100;

            if (satuan === 0) {
                return bil[ratusan] + ' Ratus ';
            }else{
                return bil[ratusan] + ' Ratus ' + terbilang(satuan);
            }
        }

        if (angka < 1000000) {
            const ribuan = Math.floor(angka/1000);
            const satuan = angka%1000;

            if (satuan === 0) {
                return terbilang(ribuan) + ' Ribu ';
            } else {
                return terbilang(ribuan) + ' Ribu ' + terbilang(satuan);  
            }
        }

        if (angka < 100000000) {
            const jutaan = Math.floor(angka/1000000);
            const satuan = angka%1000000;

            if (satuan === 0) {
                return terbilang(jutaan) + ' Juta ';
            }else{
                return terbilang(jutaan) + ' Juta ' + terbilang(satuan);
            }
        }
    }else{
        return "Angka Terbilang Belum Dibuat, Maksimal Hingga 99 Juta";
    }
}
console.log(terbilang(223000));

function prima(bilangan) {
    if (bilangan < 2) {
        return 'Bukan Bilangan Prima';
    }

    for (let i = 2; i <= Math.sqrt(bilangan); i++){
        if (bilangan % i === 0) {
            return 'Bukan Bilangan Prima';
        } 
    }
    return 'Bilangan Prima';
}
console.log(prima(3));