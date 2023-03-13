import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const DummyIndex = () => {
  const { dummies, getDummies, getOrders, deleteDummy } =
    useContext(SkillContext);
  useEffect(() => {
    getDummies();
  }, []);

  return (
    <div className="mt-12">
      <div className="flex justify-end m-2 p-2">
        <Link
          to="/dummies/create"
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
        >
          New Product
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
            {dummies.map((dummy) => {
              return (
                <tr
                  key={dummy.idproduct}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{dummy.product}</td>
                  <td className="px-6 py-4">{dummy.price}</td>
                  <td className="px-6 py-4">{dummy.category}</td>
                  <td className="px-6 py-4 space-x-2">
                    <Link
                      to={`/dummies/${dummy.idproduct}/edit`}
                      className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteDummy(dummy.idproduct)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => getOrders(dummy.idproduct)}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded-md"
                    >
                      Tambah
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DummyIndex;
