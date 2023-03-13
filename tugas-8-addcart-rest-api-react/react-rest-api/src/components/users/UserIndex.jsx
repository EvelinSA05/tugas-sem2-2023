import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";

export const UserIndex = () => {
  const { users, getUsers, deleteUser, getOrder } = useContext(SkillContext);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="mt-12">
      <div className="flex justify-end m-2 p-2">
        <Link
          to="/users/create"
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
        >
          New User
        </Link>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Telp
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.idpelanggan}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{user.pelanggan}</td>
                  <td className="px-6 py-4">{user.alamat}</td>
                  <td className="px-6 py-4">{user.telp}</td>
                  <td className="px-6 py-4 space-x-2">
                    <Link
                      to={`/users/${user.idpelanggan}/edit`}
                      className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.idpelanggan)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => getOrder(user.idpelanggan)}
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

export default UserIndex;
