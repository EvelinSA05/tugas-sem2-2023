let isi = document.querySelector("#isi");

isi.innerHTML = "<h1>Soto</h1>" + "<p>Deskripsi soto</p>" + '<img src="images/smenda.jpg" alt="">';
isi.innerHTML = "<h1>Rawon</h1>";
isi.innerHTML += "<p>Deskripsi Rawon</p>";
isi.innerHTML += '<img src="images/smenda.jpg" alt="">';

let tabel = document.querySelector("#tabel");
tabel.innerHTML = "<table><thead><tr><th>Nomer</th></tr></thead>" + "<tbody><tr><td>1</td></tr>" + "<tr><td>2</td></tr>" + "<tr><td>3</td></tr>" + "<tr><td>4</td></tr>" + "<tr><td>5</td></tr></tbody></table>"; 

tabel.innerHTML = "<table><thead><tr><th>Nomer</th></tr></thead></table>";
// tabel.innerHTML += "<tr><td>1</td></tr>";
// tabel.innerHTML += "<tr><td>2</td></tr>";
// tabel.innerHTML += "<tr><td>3</td></tr>";

// for (let i = 0; i < 10; i++) {
//     document.querySelector("#paragraf").innerHTML += "<h1>" + i + "</h1>";
// }

for (let i = 1; i < 8; i++) {
    tabel.innerHTML += "<tr><td>" + i + "</td></tr>";
}



