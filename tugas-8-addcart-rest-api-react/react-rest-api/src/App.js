import { Routes, Route, Link } from "react-router-dom";
import { SkillProvider } from "./Context/SkillContext";

import { Home } from "./components/Home";

import { SkillIndex } from "./components/skills/SkillIndex";
import { SkillCreate } from "./components/skills/SkillCreate";
import { SkillEdit } from "./components/skills/SkillEdit";

import { UserIndex } from "./components/users/UserIndex";
import { UserCreate } from "./components/users/UserCreate";
import { UserEdit } from "./components/users/UserEdit";

import { DummyIndex } from "./components/dummies/DummyIndex";
import { DummyCreate } from "./components/dummies/DummyCreate";
import { DummyEdit } from "./components/dummies/DummyEdit";

import { IndexCart } from "./components/cart/IndexCart";

function App() {
  return (
    <SkillProvider>
      <div className="bg-slate-200">
        <div className="max-w-7xl mx-auto min-h-screen">
          <nav>
            <ul className="flex">
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/skills">Skills</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/users">Users</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/dummies">Products</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/cart">Add to Cart</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/skills" element={<SkillIndex />} />
            <Route path="/skills/create" element={<SkillCreate />} />
            <Route path="/skills/:id/edit" element={<SkillEdit />} />

            <Route path="/users" element={<UserIndex />} />
            <Route path="/users/create" element={<UserCreate />} />
            <Route path="/users/:idpelanggan/edit" element={<UserEdit />} />

            <Route path="/dummies" element={<DummyIndex />} />
            <Route path="/dummies/create" element={<DummyCreate />} />
            <Route path="/dummies/:idproduct/edit" element={<DummyEdit />} />

            <Route path="/cart" element={<IndexCart />} />
          </Routes>
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
