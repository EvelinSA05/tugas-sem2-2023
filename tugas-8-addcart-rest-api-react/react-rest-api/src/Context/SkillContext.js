import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
  name: "",
  slug: "",
  pelanggan: "",
  alamat: "",
  telp: "",
  product: "",
  price: "",
  category: "",
};

export const SkillProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [dummies, setDummies] = useState([]);
  const [dummy, setDummy] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // ORDERS
  const getOrder = async (idpelanggan) => {
    const response = await axios.get("users/" + idpelanggan);
    const apiUser = response.data.data;
    setOrder(apiUser);
  };

  const getOrders = async (idproduct) => {
    const response = await axios.get("dummies/" + idproduct);
    const apiDummy = response.data.data;
    setOrders(apiDummy);
  };

  // SKILL
  const getSkills = async () => {
    const apiSkills = await axios.get("skills");
    setSkills(apiSkills.data.data);
  };

  const getSkill = async (id) => {
    const response = await axios.get("skills/" + id);
    const apiSkill = response.data.data;
    setSkill(apiSkill);
    setFormValues({
      name: apiSkill.name,
      slug: apiSkill.slug,
    });
  };

  const storeSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.post("skills", formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.put("skills/" + skill.id, formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteSkill = async (id) => {
    if (!window.confirm("Are You Sure?")) {
      return;
    }
    await axios.delete("skills/" + id);
    getSkills();
  };

  // USER
  const getUsers = async () => {
    const apiUsers = await axios.get("users");
    setUsers(apiUsers.data.data);
  };

  const getUser = async (idpelanggan) => {
    const response = await axios.get("users/" + idpelanggan);
    const apiUser = response.data.data;
    setUser(apiUser);
    setFormValues({
      pelanggan: apiUser.pelanggan,
      alamat: apiUser.alamat,
      telp: apiUser.telp,
    });
  };

  const storeUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("users", formValues);
      setFormValues(initialForm);
      navigate("/users");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put("users/" + user.idpelanggan, formValues);
      setFormValues(initialForm);
      navigate("/users");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteUser = async (idpelanggan) => {
    if (!window.confirm("Are You Sure?")) {
      return;
    }
    await axios.delete("users/" + idpelanggan);
    getUsers();
  };

  // PRODUCT
  const getDummies = async () => {
    const apiDummies = await axios.get("dummies");
    setDummies(apiDummies.data.data);
  };

  const getDummy = async (idproduct) => {
    const response = await axios.get("dummies/" + idproduct);
    const apiDummy = response.data.data;
    setDummy(apiDummy);
    setFormValues({
      product: apiDummy.product,
      price: apiDummy.price,
      category: apiDummy.category,
    });
  };

  const storeDummy = async (e) => {
    e.preventDefault();
    try {
      await axios.post("dummies", formValues);
      setFormValues(initialForm);
      navigate("/dummies");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateDummy = async (e) => {
    e.preventDefault();
    try {
      await axios.put("dummies/" + dummy.idproduct, formValues);
      setFormValues(initialForm);
      navigate("/dummies");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteDummy = async (idproduct) => {
    if (!window.confirm("Are You Sure?")) {
      return;
    }
    await axios.delete("dummies/" + idproduct);
    getDummies();
  };

  return (
    <SkillContext.Provider
      value={{
        skill,
        skills,
        getSkill,
        getSkills,
        storeSkill,
        updateSkill,
        deleteSkill,

        user,
        users,
        getUser,
        getUsers,
        storeUser,
        updateUser,
        deleteUser,

        dummy,
        dummies,
        getDummy,
        getDummies,
        storeDummy,
        updateDummy,
        deleteDummy,

        order,
        orders,
        getOrders,
        getOrder,

        onChange,
        formValues,
        setFormValues,
        errors,
        setErrors,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContext;
