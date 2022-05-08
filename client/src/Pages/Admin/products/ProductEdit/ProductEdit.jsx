import './productEdit.scss';

import { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AdminLayout from "../../../../Componenets/AdminComponents/layout/AdminLayout";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "../../../../Hooks/axios";
import { useEffect, useId } from "react";
import ImageUploading from "react-images-uploading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const ProductEdit = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [file, setFile] = useState(null);
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

    const config = {
        headers: {
            token: "Bearer" + cookies.token,
        },
    };
    useEffect(() => {
        axios.get(`/api/products/find/${id}`, config).then(
            (res) => {
                setProduct(res.data);
            },
            (err) => {
                console.log(err);
            }
        );
    }, [id]);

    const handleFeaturedImg = (e) => {
        setuniqueImgIndex(e.target.value);
    };

    const handleChange = (e) => {
        setInputData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const imgsFiles = images.map((image) => image.file);
        const formData = new FormData(e.currentTarget);

        for (var i = 0; i < imgsFiles.length; i++) {
            formData.append("productImg", imgsFiles[i]);
        }

        try {
            const res = await axios.put(
                `/api/products/${id}`,

                formData,
                {
                    headers: {
                        token: "Bearer " + cookies.token,
                    },
                    withCredentials: true,
                }
            );
        } catch (err) {
            console.log(err);
        }
        navigate(`/admin/products`);


    }



    const inputs = [
        {
            id: 1,
            label: "Title",
            type: "text",
            name: "title",
            placeholder: "Table",
            required: true,
            defaultValue: product.title,
        },
        {
            id: 2,
            label: "Size",
            type: "text",
            name: "size",
            placeholder: "medium",
            required: true,
            defaultValue: product.size,
        },
        {
            id: 3,
            label: "Quantity",
            type: "number",
            name: "quantity",
            placeholder: "1",
            required: true,
            defaultValue: product.quantity,
        },
        {
            id: 4,
            label: "Price",
            type: "number",
            name: "price",
            placeholder: "1",
            required: true,
            defaultValue: product.price,
        },
        {
            id: 6,
            label: "color",
            type: "color",
            name: "color",
            placeholder: "1",
            required: true,
            defaultValue: product.color,
        },
    ];


    const options = [
        {
            name: "category",
            value: "outdoors",
            id: useId(),
        },
        {
            name: "category",
            value: "sofa",
            id: useId(),
        },
        {
            name: "category",
            value: "kitchen",
            id: useId(),
        },
    ];
    return (
        <AdminLayout>
            <div className="edit">
                <div className="top">
                    <h1 className="title">{`Edit Products`} </h1>
                </div>

                <div className="bottom">
                    <form onSubmit={handleSubmit}>
                        <div className="left">
                            <div className="form-input">
                                <label htmlFor="image" className="label">
                                    Add Images
                                    <AddPhotoAlternateIcon style={{ marginLeft: "10px" }} />
                                </label>
                                <div className="App">
                                    <ImageUploading
                                        multiple
                                        name="productImg"
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
                                                        <div key={index} className="image-item">
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
                            {inputs?.map((input) => (
                                <div className="form-input" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        name={input.name}
                                        defaultValue={input.defaultValue}
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
                                    name="categories"
                                    value={inputData.category}
                                    onChange={(e) =>
                                        setInputData((prev) => ({
                                            ...prev,
                                            [e.target.name]: e.target.value,
                                        }))
                                    }
                                >
                                    <option name="category" value="1">
                                        category
                                    </option>
                                    {options.map((option) => (
                                        <option
                                            name={option.name}
                                            value={option.value}
                                            key={option.id}
                                        >
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

        </AdminLayout >
    )
}

export default ProductEdit