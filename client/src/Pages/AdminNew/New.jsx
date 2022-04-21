import "./new.scss";
import AdminLayout from "../../Componenets/AdminComponents/layout/AdminLayout";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useEffect, useState } from "react";
import axios from "../../Hooks/axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// import Select from 'react-select'
const New = ({ title, type }) => {
  const [inputData, setInputData] = useState({ categories: "" });
  const [file, setFile] = useState(null);
  const [required, setRequired] = useState(false);
  const [cookies, setCookie] = useCookies(["token", "id"]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData()

    const formData = new FormData();
    formData.append("productImg", file);
    formData.append("description", inputData.description);
    formData.append("image", inputData.image);
    formData.append("price", inputData.price);
    formData.append("quantity", inputData.quantity);
    formData.append("size", inputData.size);
    formData.append("title", inputData.title);
    formData.append("categories", inputData.categories);
    try {
      const res = await axios.post(
        `/api/products/`,

        formData,
        {
          headers: {
            token: "Bearer " + cookies.token,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    navigate(`/admin/${type}`);
  };
  let inputs;
  switch (type) {
    case "products":
      inputs = [
        {
          id: 1,
          label: "Title",
          type: "text",
          name: "title",
          placeholder: "Table",
          required: true,
        },
        {
          id: 2,
          label: "Size",
          type: "text",
          name: "size",
          placeholder: "medium",
          required: true,
        },
        {
          id: 3,
          label: "Quantity",
          type: "number",
          name: "quantity",
          placeholder: "1",
          required: true,
        },
        {
          id: 4,
          label: "Price",
          type: "number",
          name: "price",
          placeholder: "1",
          required: true,
        },
        {
          id: 6,
          label: "color",
          type: "color",
          name: "color",
          placeholder: "1",
          required: true,
        },
      ];
      break;
    case "brands":
      inputs = [
        {
          id: 1,
          label: "Title",
          type: "text",
          placeholder: "Table",
          required: true,
        },
      ];
      break;
    case "categories":
      inputs = [
        {
          id: 1,
          label: "Title",
          type: "text",
          placeholder: "Table",
          required: true,
        },
      ];
      break;
    default: {
    }
  }
  //coming from backend
  const categories = ["outdoors", "sofa", "kitchen"];
  //to options
  const options = categories.map((category) => ({
    name: "category",
    value: category,
  }));

  return (
    <AdminLayout>
      <div className="newItem">
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt=""
              className="image"
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <label htmlFor="image" className="label">
                  Add Image
                  <AddPhotoAlternateIcon style={{ marginLeft: "10px" }} />
                </label>
                <input
                  multiple
                  name="image"
                  type="file"
                  style={{ display: "none" }}
                  id="image"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </div>
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="input"
                    required={input.required}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="form-input">
                <label>description</label>
                <textarea
                  name="description"
                  className="input"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <select
                  value={inputData.category}
                  onChange={(e) =>
                    setInputData((prev) => ({
                      ...prev,
                      categories: e.target.value,
                    }))
                  }
                >
                  <option name="category" value="1">
                    category
                  </option>
                  {options.map((option) => (
                    <option name={option.name} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
              </div>
              <button className="submit" disabled={required}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default New;
