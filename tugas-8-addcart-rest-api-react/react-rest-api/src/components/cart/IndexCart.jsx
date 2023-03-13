import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const IndexCart = () => {
  const { orders, order } = useContext(SkillContext);
  useNavigate();

  const checkout = () => {
    let data = {
      idpelanggan: order.idpelanggan,
      pelanggan: order.pelanggan,
      alamat: order.alamat,
      telp: order.telp,
      idproduct: orders.idproduct,
      product: orders.product,
      price: orders.price,
      category: orders.category,
    };

    axios.post("orders", data);
    alert("Data berhasil dimasukkan !");
    window.location.href = "http://localhost:3000/cart";
  };

  useEffect(() => {}, []);

  return (
    <div className="mt-12">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Pelanggan
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Telp
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{order.idpelanggan}</td>
              <td className="px-6 py-4">{order.pelanggan}</td>
              <td className="px-6 py-4">{order.alamat}</td>
              <td className="px-6 py-4">{order.telp}</td>
              <td className="px-6 py-4">{orders.idproduct}</td>
              <td className="px-6 py-4">{orders.product}</td>
              <td className="px-6 py-4">{orders.price}</td>
              <td className="px-6 py-4">{orders.category}</td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={checkout}
                  className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
                >
                  Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndexCart;
