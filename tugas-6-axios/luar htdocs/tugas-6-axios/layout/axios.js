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

function tambahItemm(id) {
  axios({
    method: "GET",
    url: "http://localhost/tugas-6-axios-dummy/php/selectwhere.php?id=" + id,
  }).then(function (response) {
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
  });
}

function submittt() {
  idorder = 1;
  jumlah = 2;
  idbarang = document.getElementById("idbarang").value;
  harga = document.getElementById("harga").value;
  barang = document.getElementById("barang").value;
  idpelanggan = document.getElementById("idpelanggan").value;
  pelanggan = document.getElementById("pelanggan").value;
  alamat = document.getElementById("alamat").value;
  telp = document.getElementById("telp").value;

  let dataAdd = {
    idorder: idorder,
    idbarang: idbarang,
    jumlah: jumlah,
    harga: harga,
    barang: barang,
    idpelanggan: idpelanggan,
    pelanggan: pelanggan,
    alamat: alamat,
    telp: telp,
  };

  axios
    .post(
      "http://localhost/tugas-6-axios-dummy/php/addtocart.php",
      JSON.stringify(dataAdd)
    )
    .then(function (response) {
      alert("Data Berhasil Dimasukkan !");
      console.log(dataAdd);
    });
}

//DELETE DATA
function deleteItemm(idp) {
  let idpelanggan = {
    idpelanggan: idp,
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
    idpelanggan: document.getElementById("id").value,
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

function updateItemm(id) {
  let data = {
    idpelanggan: id,
  };
  axios
    .post(
      "http://localhost/tugas-5-dbsmk-dummyjson-ajax/php/selectupdate.php",
      JSON.stringify(data)
    )
    .then(function (response) {
      document.getElementById("id").value = response.data.id;
      document.getElementById("pelanggan").value = response.data.pelanggan;
      document.getElementById("alamat").value = response.data.alamat;
      document.getElementById("telp").value = response.data.telp;
    });
}

function updatee() {
  let dataPelanggan = {
    idpelanggan: document.getElementById("id").value,
    pelanggan: document.getElementById("pelanggan").value,
    alamat: document.getElementById("alamat").value,
    telp: document.getElementById("telp").value,
  };
  axios
    .post(
      "http://localhost/tugas-5-dbsmk-dummyjson-ajax/php/update.php",
      JSON.stringify(dataPelanggan)
    )
    .then(function (response) {
      console.log(response.data);
      alert(response.data);
    });
  gets();
}

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

function tambahItem(idu) {
  axios({
    method: "GET",
    url: `https://dummyjson.com/products/${idu}`,
    data: JSON.stringify(idu),
  }).then(function (response) {
    let out = `<table class="table mt-3">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Barang</th>
            <th scope="col">Harga</th>
          </tr>
        </thead></table>`;
    out += `<tr>
                          <td id="idbarang">${response.data.id}</td>
                          <td id="barang">${response.data.title}</td>
                          <td id="harga">${response.data.price}</td>
                      </tr>`;
    document.querySelector("#dummy").innerHTML = out;
  });
}

//DELETE DATA
const deleteItem = (id) => {
  axios
    .delete(`https://dummyjson.com/products/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
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
  let idu = document.getElementById("id").value;
  let data = {
    id: document.getElementById("id").value,
    title: document.getElementById("title").value,
    price: document.getElementById("price").value,
    stock: document.getElementById("stock").value,
  };
  axios
    .put("https://dummyjson.com/products/" + idu, JSON.stringify(data))
    .then(function (response) {
      console.log(data);
      alert("Data Berhasil Di Update !");
    });
}
