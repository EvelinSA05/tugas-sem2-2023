// ---------------------DATABASE SMK----------------------------

// SELECT DATA
function gets() {
  axios({
    method: "GET",
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
                          <th scope="col">User</th>
                        </tr>
                      </thead>`;
    response.data.forEach((el) => {
      tampill += `<tr>
                  <td id="idpelanggan">${el.idpelanggan}</td>
                  <td id="pelanggan">${el.pelanggan}</td>
                  <td id="alamat">${el.alamat}</td>
                  <td id="telp">${el.telp}</td>
                  <td><button type="button" class="btn btn-outline-danger" onclick="deleteItemm(${el.idpelanggan})">DEL</button></td>
                  <td><button type="button" class="btn btn-outline-warning" onclick="updateItemm(${el.idpelanggan})">UBAH</button></td>
                  <td><button type="button" class="btn btn-outline-dark" onclick="tambahItemm(${el.idpelanggan})">PILIH</button></td>
                </tr>`;
    });
    tampill += `</table>`;
    document.querySelector("#dbsmk").innerHTML = tampill;
  });
}
gets();

// TAMBAH DATA PRODUK
let idbrg = "";
let hrg = "";
let brg = "";
function tambahItem(id) {
  axios.get("https://dummyjson.com/products/" + id).then(function (response) {
    let out = `<table class="table table-secondary table-striped-columns">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                  </tr>
              </thead>`;
    out += `<tr>
      <td id="idbrg">${response.data.id}</td>
      <td id="brg">${response.data.title}</td>
      <td id="hrg">${response.data.price}</td>
  </tr>`;
    out += `<button type="button" class="btn btn-outline-info mt-4" onclick="checkout('${response.data.id}', '${response.data.price}', '${response.data.title}')">Add to Cart</button>`;
    document.querySelector("#dummy").innerHTML = out;
  });
}

// TAMBAH DATA PELANGGAN
let idplgn = "";
let nama = "";
let alamat = "";
let telp = "";
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
    </thead>`;
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

// ADD TO CART
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

// DELETE DATA
function deleteItemm(idp) {
  let idpelanggan = {
    idpelanggan: idp,
  };

  axios({
    method: "POST",
    url: "http://localhost/tugas-6-axios-dummy/php/delete.php",
    data: JSON.stringify(idpelanggan),
  }).then(function (response) {
    alert("Data Berhasil Dihapus!");
    window.location.href = "http://127.0.0.1:5502/layout/";
  });
  gets();
}

// INSERT DATA
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
    .then(function (response) {
      alert("Data Berhasil Ditambahkan!");
      window.location.href = "http://127.0.0.1:5502/layout/";
    });
  gets();
}

// SELECT DATA UPDATE
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

// UPDATE DATA
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
      window.location.href = "http://127.0.0.1:5502/layout/";
    });
}

// ---------------------DATA DUMMY JSON-------------------------

const url = "https://dummyjson.com/products";

//SELECT DATA
function getd() {
  axios({
    method: "GET",
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
                      </thead>`;
    response.data.products.forEach((el) => {
      tampil += `<tr>
                  <td id="idbarang">${el.id}</td>
                  <td id="barang">${el.title}</td>
                  <td id="harga">${el.price}</td>
                  <td id="stock">${el.stock}</td>
                  <td><button type="button" class="btn btn-outline-danger" onclick="deleteItem(${el.id})">DEL</button></td>
                  <td><button type="button" class="btn btn-outline-warning" onclick="ubahItem(${el.id})">UBAH</button></td>
                  <td><button type="button" class="btn btn-outline-dark" onclick="tambahItem(${el.id})">BUY</button></td>
                </tr>`;
    });
    tampil += `</table>`;
    document.querySelector("#out").innerHTML = tampil;
  });
}
getd();

// FILTER PRODUK
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
    method: "GET",
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
                      </thead>`;
    response.data.products.forEach((el) => {
      tampil += `<tr>
                  <td id="idbarang">${el.id}</td>
                  <td id="barang">${el.title}</td>
                  <td id="harga">${el.price}</td>
                  <td id="stock">${el.stock}</td>
                  <td><button type="button" class="btn btn-outline-danger" onclick="deleteItem(${el.id})">DEL</button></td>
                  <td><button type="button" class="btn btn-outline-warning" onclick="ubahItem(${el.id})">UBAH</button></td>
                  <td><button type="button" class="btn btn-outline-dark" onclick="tambahItem(${el.id})">BUY</button></td>
                </tr>`;
    });
    tampil += `</table>`;
    document.querySelector("#out").innerHTML = tampil;
  });
}

// DELETE DATA
function deleteItem(id) {
  axios({
    method: "DELETE",
    url: `https://dummyjson.com/products/${id}`,
  }).then(function (response) {
    alert("Data Berhasil Dihapus!");
    console.log("Data Berhasil Dihapus!", response.data);
  });
}

// INSERT DATA
function addItem() {
  let data = {
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    stock: document.getElementById("stock").value,
  };

  axios
    .post("https://dummyjson.com/products/add", JSON.stringify(data))
    .then(function (response) {
      console.log("Data Berhasil Ditambahkan!", data);
      alert("Data Berhasil Ditambahkan!");
    });
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("stock").value = "";
}

// SELECT UPDATE DATA
function ubahItem(id) {
  axios.get(`https://dummyjson.com/products/${id}`).then(function (response) {
    document.getElementById("id").value = response.data.id;
    document.getElementById("title").value = response.data.title;
    document.getElementById("price").value = response.data.price;
    document.getElementById("stock").value = response.data.stock;
  });
}

// UPDATE DATA
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
      console.log("Data Berhasil Diupdate!", data);
      alert("Data Berhasil Diupdate!");
    });

  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("stock").value = "";
}
