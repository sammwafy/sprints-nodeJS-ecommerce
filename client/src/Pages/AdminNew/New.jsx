import "./new.scss";
import AdminLayout from "../../Componenets/AdminComponents/layout/AdminLayout";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useEffect, useState, useId } from "react";
import ImageUploading from "react-images-uploading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../../Hooks/axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// import Select from 'react-select'
const New = ({ title, type }) => {
  const [inputData, setInputData] = useState({ categories: "" });

  // images property
  const [images, setImages] = useState([]);
  const maxNumber = 6;
  const onImgsChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  const [required, setRequired] = useState(false);
  const [uniqueImgIndex, setuniqueImgIndex] = useState(0);
  const [cookies, setCookie] = useCookies(["token", "id"]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleFeaturedImg = (e) => {

    setuniqueImgIndex(e.target.value);
    console.log(uniqueImgIndex)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (type) {
      case "products":
        const imgsFiles = images.map((image) => image.file);
        const formData = new FormData();
        for (var i = 0; i < imgsFiles.length; i++) {
          formData.append("productImg", imgsFiles[i]);
        }
        formData.append("featuredImg", uniqueImgIndex);
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
        } catch (err) {
          console.log(err);
        }
        navigate(`/admin/${type}`);
        break;

      case "categories":
        const formCategories = new FormData();
        formCategories.append("description", inputData.description);
        formCategories.append("image", inputData.image);
        formCategories.append("title", inputData.title);

        try {
          const res = await axios.post(
            `/api/categories/`,

            formCategories,
            {
              headers: {
                token: "Bearer " + cookies.token,
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
        } catch (err) {
          console.log(err);
        }
        navigate(`/admin/${type}`);
        break;
      case "brands":
        const formBrands = new FormData();
        formBrands.append("description", inputData.description);
        formBrands.append("image", inputData.image);
        formBrands.append("title", inputData.title);

        try {
          const res = await axios.post(
            `/api/brands/`,

            formBrands,
            {
              headers: {
                token: "Bearer " + cookies.token,
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
        } catch (err) {
          console.log(err);
        }
        navigate(`/admin/${type}`);
        break;
      default: return
    }
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
  // const categories = ["outdoors", "sofa", "kitchen"];
  //to options
  const options = [{
    name: "category",
    value: "outdoors",
    id: useId()
  },
  {
    name: "category",
    value: "sofa",
    id: useId()
  },
  {
    name: "category",
    value: "kitchen",
    id: useId()
  }

  ]
  // const options = categories.map((category) => ({
  //   name: "category",
  //   value: category,
  //   id:useId()
  // }));

  return (
    <AdminLayout>
      <div className="newItem">
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          {/* <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt=""
              className="image"
            /> */}

          <form onSubmit={handleSubmit}>
            <div className="left">
              <div className="form-input">
                {/* <label htmlFor="image" className="label">
                  Add Images
                  <AddPhotoAlternateIcon style={{ marginLeft: "10px" }} />
                </label> */}
                <div className="App">
                  <ImageUploading
                    multiple
                    name="images"
                    value={images}
                    onChange={onImgsChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      errors,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        <div className="uploadBtns">
                          <Button
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            Click or Drop here
                          </Button>
                          &nbsp;
                          <Button onClick={onImageRemoveAll}>
                            Remove all images
                          </Button>
                        </div>
                        <div className="imgsView">
                          {imageList.map((image, index) => (
                            <div key={`${index}-image`} className="image-item">
                              <img src={image.data_url} alt="" />
                              <div className="image-item__btn-wrapper">
                                <div className="imgUpdatesBtns">
                                  <Button
                                    variant="success"
                                    onClick={() => onImageUpdate(index)}
                                  >
                                    Update
                                  </Button>
                                  <Button
                                    variant="danger"
                                    onClick={() => onImageRemove(index)}
                                  >
                                    Remove
                                  </Button>
                                </div>
                                <Form.Check type="radio" id="check-api-radio">
                                  <Form.Check.Input
                                    type="radio"
                                    name="featuredImg"
                                    value={index}
                                    onChange={handleFeaturedImg}
                                    isValid
                                  />
                                  <Form.Check.Label>
                                    set as featured image
                                  </Form.Check.Label>
                                </Form.Check>
                              </div>
                            </div>
                          ))}
                        </div>
                        {errors && (
                          <div>
                            {errors.maxNumber && (
                              <span>
                                Number of selected images exceed maxNumber
                              </span>
                            )}
                            {errors.acceptType && (
                              <span>Your selected file type is not allow</span>
                            )}
                            {errors.maxFileSize && (
                              <span>Selected file size exceed maxFileSize</span>
                            )}
                            {errors.resolution && (
                              <span>
                                Selected file is not match your desired
                                resolution
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>
            </div>
            <div className="right">
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    className={`input ${input.name}`}
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
                <Form.Select
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
                    <option name={option.name} value={option.value} key={option.id}>
                      {option.value}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <button className="submit" disabled={required}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};
export default New;
