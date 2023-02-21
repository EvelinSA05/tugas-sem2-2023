const url = "https://dummyjson.com/products";

// ---------------------DATABASE SMK----------------------------

//SELECT DATA
function gets() {
  axios({
    method: "get",
    url: "http://localhost/tugas-6-axios-dummy/php/select.php",
  }).then(function (response) {
    let tampill = `<table class="table mt-3">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Pelanggan</th>
            <th scope="col">Alamat</th>
            <th scope="col">Telp</th>
            <th scope="col">Hapus</th>
            <th scope="col">Ubah</th>
            <th scope="col">Beli</th>
          </tr>
        </thead></table>`;
    response.data.forEach((el) => {
      tampill += `<tr>
                          <td id="idpelanggan">${el.idpelanggan}</td>
                          <td id="pelanggan">${el.pelanggan}</td>
                          <td id="alamat">${el.alamat}</td>
                          <td id="telp">${el.telp}</td>
                          <td><button type="button" id="delete" class="btn btn-danger btn-dell" onclick="deleteItemm(${el.idpelanggan})">DEL</button></td>
                          <td><button type="button" id="update" class="btn btn-warning btn-ubahh" onclick="updateItemm(${el.idpelanggan})">UBAH</button></td>
                          <td><button type="button" id="tambah" class="btn btn-dark btn-tambahh" onclick="tambahItemm(${el.idpelanggan})">BUY</button></td>
                      </tr>`;
    });
    tampill += `</table>`;
    document.querySelector("#dbsmk").innerHTML = tampill;
  });
}
gets();

// Keranjang
var idbrg = "";
var hrg = "";
var brg = "";
function tambahItem(idu) {
  axios.get("https://dummyjson.com/products/" + idu).then(function (response) {
    let out =
      '<table class="table table-secondary table-striped-columns"><thead><tr><th>ID</th><th>Nama Barang</th><th>Harga</th></tr></thead><tbody>';
    out += `<tr>
      <td id="idbrg">${response.data.id}</td>
      <td id="brg">${response.data.title}</td>
      <td id="hrg">${response.data.price}</td>
  </tr>`;
    out += `<button type="button" class="btn btn-outline-success mt-4" onclick="checkout('${response.data.id}','${response.data.price}','${response.data.title}')">Checkout</button>`;
    document.querySelector("#dummy").innerHTML = out;
  });
}

// Dipesan Oleh
var idplgn = "";
var nama = "";
var alamat = "";
var telp = "";
function tambahItemm(idpelanggan) {
  axios
    .get(
      "http://localhost/tugas-6-axios-dummy/php/selectwhere.php?id=" +
        idpelanggan
    )
    .then(function (response) {
      let out = `<table class="table mt-3">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Pelanggan</th>
      <th scope="col">Alamat</th>
      <th scope="col">Telp</th>
    </tr>
  </thead></table>`;
      out += `<tr>
                    <td id="idpelanggan">${response.data.idpelanggan}</td>
                    <td id="pelanggan">${response.data.pelanggan}</td>
                    <td id="alamat">${response.data.alamat}</td>
                    <td id="telp">${response.data.telp}</td>
                </tr>`;
      document.querySelector("#dummyy").innerHTML = out;
      idplgn = response.data.idpelanggan;
      nama = response.data.pelanggan;
      alamat = response.data.alamat;
      telp = response.data.telp;
    });
}

// Checkout
function checkout(idbrg, hrg, brg) {
  let idorder = 4;
  let jumlah = 2;
  let data = {
    idorder: idorder,
    idbarang: idbrg,
    jumlah: jumlah,
    harga: hrg,
    barang: brg,
    idpelanggan: idplgn,
    pelanggan: nama,
    alamat: alamat,
    telp: telp,
  };
  axios
    .post(
      "http://localhost/tugas-6-axios-dummy/php/addtocart.php",
      JSON.stringify(data)
    )
    .then(function (response) {
      window.location.href = "http://127.0.0.1:5502/layout/index.html?";
      alert("Data Pemesanan Valid!");
    });
}

// // Keranjang
// function tambahItem(idu) {
//   axios.get("https://dummyjson.com/products/" + idu).then(function (response) {
//       let produk = response.data;
//       let out = "<h2>Invoice</h2>";
//       out += '<table class="table table-secondary table-striped-columns"><thead><tr><th>ID</th><th>Nama Pemesan</th><th>Nama Barang</th><th>Harga</th><th>Jumlah</th><th>Checkout</th></tr></thead><tbody>';
//       out += `<tr>
//               <th>${produk.id}</th>
//               <th id="pesan"></th>
//               <th>${produk.title}</th>
//               <th>$ ${produk.price}</th>
//               <th><input type="number" class="small" id="jumlah"></th>
//               <th><button type="button" class="btn btn-outline-success fw-bolder" onclick="checkout('${produk.id}','${produk.price}','${produk.title}')">Checkout</button></th>
//           </tr>`;
//       out += "</tbody></table>";
//       document.querySelector("#dummyy").innerHTML = out;
//   })
// }

// // Dipesan Oleh
// var idplgn = "";
// var nama = "";
// var alamat = "";
// var telp = "";
// function tambahItemm(idpelanggan) {
//   axios.get("http://localhost/tugas-6-axios-dummy/php/selectwhere.php?id=" + idpelanggan).then(function (response) {
//       let keluar = response.data.pelanggan;
//       document.querySelector("#pesan").innerHTML = keluar;
//       idplgn = response.data.idpelanggan;
//       nama = response.data.pelanggan;
//       alamat = response.data.alamat;
//       telp = response.data.telp;
//   })
// }

// // Checkout
// function checkout(idbarang, harga, ba rang) {
//   let idorder = 4;
//   let jumlah = document.getElementById("jumlah").value;
//   let data = {
//       idorder: idorder,
//       idbarang: idbarang,
//       jumlah: jumlah,
//       harga: harga,
//       barang: barang,
//       idpelanggan: idplgn,
//       pelanggan: nama,
//       alamat: alamat,
//       telp: telp
//   };
//   axios.post("http://localhost/tugas-6-axios-dummy/php/addtocart.php", JSON.stringify(data)).then(function (response) {
//       window.location.href = "http://127.0.0.1:5502/layout/index.html?";
//       alert("Data Pemesanan Valid!");
//   })
// }

// function tambahItemm(id) {
//   axios({
//     method: "GET",
//     url: "http://localhost/tugas-6-axios-dummy/php/selectwhere.php?id=" + id,
//   }).then(function (response) {
//     let out = `<table class="table mt-3">
//           <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Pelanggan</th>
//             <th scope="col">Alamat</th>
//             <th scope="col">Telp</th>
//           </tr>
//         </thead></table>`;
//     out += `<tr>
//                           <td id="idpelanggan">${response.data.idpelanggan}</td>
//                           <td id="pelanggan">${response.data.pelanggan}</td>
//                           <td id="alamat">${response.data.alamat}</td>
//                           <td id="telp">${response.data.telp}</td>
//                       </tr>`;
//     document.querySelector("#dummyy").innerHTML = out;
//   });
// }

// function submittt(idbarang, harga, barang) {
//   idorder = 1;
//   jumlah = 2;
//   // idbarang = document.getElementById("idbarang").value;
//   // harga = document.getElementById("harga").value;
//   // barang = document.getElementById("barang").value;
//   // idpelanggan = document.getElementById("idpelanggan").value;
//   // pelanggan = document.getElementById("pelanggan").value;
//   // alamat = document.getElementById("alamat").value;
//   // telp = document.getElementById("telp").value;

//   // idorder= 1;
//   //   idbarang= 1;
//   //   jumlah= 1;
//   //   harga= 5000;
//   //   barang= 'barang';
//   //   idpelanggan= 1;
//   //   pelanggan= 'pelanggan';
//   //   alamat= 'alamat'
//   //   telp= 124;

//   let dataAdd = {
//     idorder: idorder,
//     idbarang: idbarang,
//     jumlah: jumlah,
//     harga: harga,
//     barang: barang,
//     idpelanggan: idpelanggan,
//     pelanggan: pelanggan,
//     alamat: alamat,
//     telp: telp,
//   };

//   axios
//     .post(
//       "http://localhost/tugas-6-axios-dummy/php/addtocart.php",
//       JSON.stringify(dataAdd)
//     )
//     .then(function (response) {
//       alert("Data Berhasil Dimasukkan !");
//       console.log(response.data);
//     });

//   // axios({
//   //   method: 'post',
//   //   url: 'http://localhost/tugas-6-axios-dummy/php/addtocart.php',
//   //   data:  JSON.stringify(dataAdd),
//   //   responseType: 'text'
//   // }).then(function (response) {
//   //   alert('Data Berhasil Dimasukkan !');
//   //   console.log(dataAdd);
//   // })
// }

//DELETE DATA
function deleteItemm(id) {
  let idpelanggan = {
    idpelanggan: id,
  };

  axios({
    method: "post",
    url: "http://localhost/tugas-6-axios-dummy/php/delete.php",
    data: JSON.stringify(idpelanggan),
  }).then(function (response) {
    alert("Data Berhasil Dihapus!");
    window.location.reload("http://127.0.0.1:5502/layout/");
  });
  gets();
}

//INSERT DATA
function addpItem() {
  const data = {
    pelanggan: document.getElementById("pelanggan").value,
    alamat: document.getElementById("alamat").value,
    telp: document.getElementById("telp").value,
  };

  axios
    .post(
      "http://localhost/tugas-6-axios-dummy/php/insert.php",
      JSON.stringify(data)
    )
    .then((response) => {
      alert("Data Berhasil Ditambahkan!");
      window.location.reload("http://127.0.0.1:5502/layout/");
    });
  gets();
}

function updateItemm(idp) {
  let idpelanggan = {
    idpelanggan: idp,
  };
  axios
    .post(
      "http://localhost/tugas-6-axios-dummy/php/selectupdate.php",
      JSON.stringify(idpelanggan)
    )
    .then(function (response) {
      document.getElementById("idp").value = response.data.idpelanggan;
      document.getElementById("pelanggan").value = response.data.pelanggan;
      document.getElementById("alamat").value = response.data.alamat;
      document.getElementById("telp").value = response.data.telp;
    });
}

function updatee() {
  let dataPelanggan = {
    idpelanggan: document.getElementById("idp").value,
    pelanggan: document.getElementById("pelanggan").value,
    alamat: document.getElementById("alamat").value,
    telp: document.getElementById("telp").value,
  };
  axios
    .post(
      "http://localhost/tugas-6-axios-dummy/php/update.php",
      JSON.stringify(dataPelanggan)
    )
    .then(function (response) {
      alert("Data Berhasil Diupdate!");
      window.location.reload("http://127.0.0.1:5502/layout/");
    });
}

// function ubahItemo() {
//   let idu = document.getElementById("id").value;
//   let data = {
//     id: document.getElementById("id").value,
//     title: document.getElementById("title").value,
//     price: document.getElementById("price").value,
//     stock: document.getElementById("stock").value,
//   };
//   axios
//     .put("https://dummyjson.com/products/" + idu, JSON.stringify(data))
//     .then(function (response) {
//       console.log(data);
//       alert("Data Berhasil Di Update !");
//     });
// }

// ---------------------DATA DUMMY JSON-------------------------

//SELECT DATA
function getd() {
  axios({
    method: "get",
    url: url,
  }).then(function (response) {
    let tampil = `<table class="table mt-3">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nama</th>
          <th scope="col">Harga</th>
          <th scope="col">Stock</th>
          <th scope="col">Hapus</th>
          <th scope="col">Ubah</th>
          <th scope="col">Beli</th>
        </tr>
      </thead></table>`;
    response.data.products.forEach((el) => {
      tampil += `<tr>
                        <td id="idbarang">${el.id}</td>
                        <td id="barang">${el.title}</td>
                        <td id="harga">${el.price}</td>
                        <td>${el.stock}</td>
                        <td><button type="button" id="delete" class="btn btn-danger btn-del" onclick="deleteItem(${el.id})">DEL</button></td>
                        <td><button type="button" id="update" class="btn btn-warning btn-ubah" onclick="ubahItem(${el.id})">UBAH</button></td>
                        <td><button type="button" id="tambah" class="btn btn-dark btn-tambah" onclick="tambahItem(${el.id})">BUY</button></td>
                    </tr>`;
    });
    tampil += `</table>`;
    document.querySelector("#out").innerHTML = tampil;
  });
}
getd();

function submit() {
  let Url;
  let category = document.getElementById("list").value;
  if (category === "smartphones") {
    Url = "https://dummyjson.com/products/category/smartphones";
  }
  if (category === "laptops") {
    Url = "https://dummyjson.com/products/category/laptops";
  }
  if (category === "fragrances") {
    Url = "https://dummyjson.com/products/category/fragrances";
  }
  if (category === "skincare") {
    Url = "https://dummyjson.com/products/category/skincare";
  }
  if (category === "groceries") {
    Url = "https://dummyjson.com/products/category/groceries";
  }
  if (category === "home-decoration") {
    Url = "https://dummyjson.com/products/category/home-decoration";
  }

  axios({
    method: "get",
    url: Url,
  }).then(function (response) {
    let tampil = `<table class="table mt-3">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nama</th>
          <th scope="col">Harga</th>
          <th scope="col">Stock</th>
          <th scope="col">Hapus</th>
          <th scope="col">Ubah</th>
          <th scope="col">Beli</th>
        </tr>
      </thead></table>`;
    response.data.products.forEach((el) => {
      tampil += `<tr>
                        <td id="idbarang">${el.id}</td>
                        <td id="barang">${el.title}</td>
                        <td id="harga">${el.price}</td>
                        <td>${el.stock}</td>
                        <td><button type="button" id="delete" class="btn btn-danger btn-del" onclick="deleteItem(${el.id})">DEL</button></td>
                        <td><button type="button" id="update" class="btn btn-warning btn-ubah" onclick="ubahItem(${el.id})">UBAH</button></td>
                        <td><button type="button" id="tambah" class="btn btn-dark btn-tambah" onclick="tambahItem(${el.id})">BUY</button></td>
                    </tr>`;
    });
    tampil += `</table>`;
    document.querySelector("#out").innerHTML = tampil;
  });
}

// function tambahItem(idu) {
//   axios({
//     method: "GET",
//     url: `https://dummyjson.com/products/${idu}`,
//     data: JSON.stringify(idu),
//   }).then(function (response) {
//     let out = `<table class="table mt-3">
//           <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Barang</th>
//             <th scope="col">Harga</th>
//           </tr>
//         </thead></table>`;
//     out += `<tr>
//                           <td id="idbrg">${response.data.id}</td>
//                           <td id="brg">${response.data.title}</td>
//                           <td id="hgr">${response.data.price}</td>
//                       </tr>`;
//     document.querySelector("#dummy").innerHTML = out;
//   });
// }

//DELETE DATA
const deleteItem = (id) => {
  axios.delete(`https://dummyjson.com/products/${id}`).then((response) => {
    alert("Data Berhasil Dihapus!");
    console.log("Data Berhasil Dihapus!", response.data);
  });
};

//INSERT DATA
function addItem() {
  const data = {
    id: document.getElementById("id").value,
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    stock: document.getElementById("stock").value,
  };

  axios.post("https://dummyjson.com/products/add", data).then((response) => {
    console.log("Data Berhasil Ditambahkan!", response.data);
    alert("Data Berhasil Ditambahkan!");
  });
}

//UPDATE DATA
function ubahItem(id) {
  axios.get(`https://dummyjson.com/products/${id}`).then(function (response) {
    document.getElementById("id").value = response.data.id;
    document.getElementById("title").value = response.data.title;
    document.getElementById("price").value = response.data.price;
    document.getElementById("stock").value = response.data.stock;
  });
}

function ubahItemo() {
  let id = document.getElementById("id").value;
  let data = {
    id: document.getElementById("id").value,
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    stock: document.getElementById("stock").value,
  };
  axios
    .put("https://dummyjson.com/products/" + id, JSON.stringify(data))
    .then(function (response) {
      console.log("Data Berhasil Diupdate !", data);
      alert("Data Berhasil Diupdate !");
    });
}
