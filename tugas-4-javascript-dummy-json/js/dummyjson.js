let url = "https://dummyjson.com/products";

$(document).ready(function () {
  //PILIH KATEGORI
  $("#submit2").click(function (e) {
    e.preventDefault();
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

    $.ajax({
      type: "get",
      url: Url,
      dataType: "json",
      success: function (response) {
        console.log(response.products);
        let out;
        $.each(response.products, function (key, val) {
          out += `<tr>
              <td>${val.id}</td>
              <td>${val.title}</td>
              <td>${val.price}</td>
              <td>${val.stock}</td>
              <td>${val.brand}</td>
              <td>${val.category}</td>
              <td><button type="button" id="delete" class="btn btn-danger btn-del" data-id = ${val.id}>DEL</button></td>
              <td><button type="button" id="update" class="btn btn-warning btn-ubah" data-id = ${val.id}>UBAH</button></td>
           </tr>`;
        });
        $("#dummyjson").html(out);
      },
    });
  });

  //SELECT DATA
  function selectData() {
    $.ajax({
      type: "get",
      url: url,
      dataType: "json",
      success: function (response) {
        let out;
        $.each(response.products, function (key, val) {
          out += `<tr>
              <td>${val.id}</td>
              <td>${val.title}</td>
              <td>${val.price}</td>
              <td>${val.stock}</td>
              <td>${val.brand}</td>
              <td>${val.category}</td>
              <td><button type="button" id="delete" class="btn btn-danger btn-del" data-id = ${val.id}>DEL</button></td>
              <td><button type="button" id="update" class="btn btn-warning btn-ubah" data-id = ${val.id}>UBAH</button></td>
           </tr>`;
        });
        $("#dummyjson").html(out);
      },
    });
  }

  selectData();

  //DELETE DATA
  function deleteData(id) {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  $("tbody").on("click", ".btn-del", function () {
    let id = $(this).attr("data-id");
    deleteData(id);
  });

  //INSERT DATA
  function insertData() {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        price: price,
        stock: stock,
        brand: brand,
        category: category,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  $("#submit").click(function (e) {
    e.preventDefault();
    id = $("#id").val();
    title = $("#title").val();
    price = $("#price").val();
    stock = $("#stock").val();
    brand = $("#brand").val();
    category = $("#category").val();

    if (id == "") {
      insertData();
    } else {
      updateData();
    }

    $("#id").val("");
    $("#title").val("");
    $("#price").val();
    $("#stock").val();
    $("#brand").val("");
    $("#category").val("");
  });

  //UPDATE DATA
  function selectUpdate(id) {
    $.ajax({
      type: "GET",
      url: `https://dummyjson.com/products/${id}`,
      cache: false,
      dataType: "json",
      success: function (response) {
        $("#id").val(response.id);
        $("#title").val(response.title);
        $("#price").val(response.price);
        $("#stock").val(response.stock);
        $("#brand").val(response.brand);
        $("#category").val(response.category);
      },
    });
  }

  function updateData() {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        price: price,
        stock: stock,
        brand: brand,
        category: category,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  $("tbody").on("click", ".btn-ubah", function () {
    let id = $(this).attr("data-id");
    selectUpdate(id);
  });
});
