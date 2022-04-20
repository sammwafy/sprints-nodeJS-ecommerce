

import './adminEdit.scss'
import { useState } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AdminLayout from '../../Componenets/AdminComponents/layout/AdminLayout';
import ItemCard from '../../Componenets/AdminComponents/ItemCard/ItemCard';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';




const AdminEdit = ({ type }) => {
    const [inputData, setInputData] = useState({})
    const [file, setFile] = useState(null)

    console.log(type);

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    const handleChange = (e) => {
        setInputData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()



    }

    let inputs
    switch (type) {

        case "users": inputs = [
            {
                id: 1,
                label: "Username",
                type: "text",
                placeholder: "username",
                required: true
            },
            {
                id: 2,
                label: "Email",
                type: "email",
                placeholder: "Email",
                required: true
            },
            {
                id: 3,
                label: "Password",
                type: "password",
                placeholder: "password",
                required: true
            },

        ]
            break;


        case "products": inputs = [{
            id: 1,
            label: "Title",
            type: "text",
            name: "Title",
            placeholder: "Table",
            required: true
        },
        {
            id: 2,
            label: "Size",
            type: "text",
            name: "Size",
            placeholder: "medium",
            required: true
        },
        {
            id: 3,
            label: "Quantity",
            type: "number",
            name: "Quantity",
            placeholder: "1",
            required: true
        },
        {
            id: 4,
            label: "Price",
            type: "number",
            name: "Price",
            placeholder: "1",
            required: true
        },
        {
            id: 6,
            label: "color",
            type: "color",
            name: "color",
            placeholder: "1",
            required: true
        },
        ]
            break;

        case "brands": inputs = [
            {
                id: 1,
                label: "Title",
                type: "text",
                placeholder: "Table",
                required: true
            },
        ]
            break;

        case "categories": inputs = [
            {
                id: 1,
                label: "Title",
                type: "text",
                placeholder: "Table",
                required: true
            },
        ]
            break;
        default: { }
    }


    return (
        <AdminLayout>
            <div className="edit">
                <div className="editContainer">

                    <div className="top">
                        <h1> Edit</h1>
                        <div />
                        <div className="leftShow">
                            <ItemCard />
                        </div>
                        {/* <div className="item">

                                <img src="https://i.pinimg.com/564x/9b/60/39/9b6039322cbe6a3bc2612e49f63e576a.jpg " alt="avatar" className="itemImg" />
                                <div className="details">
                                    <h1 className="itemTitle">Samah Gad</h1>
                                    <div className="detailItem">
                                        <span className="itemKey">Email:</span>
                                        <span className="itemValue">samah@outlook.com</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Phone:</span>
                                        <span className="itemValue">*123456</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Address:</span>
                                        <span className="itemValue">Elton St. 234 Garden Yd</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Country:</span>
                                        <span className="itemValue">Egypt</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rightUpdate">
                            <div className="left">
                                <img
                                    src={
                                        file ? URL.createObjectURL(file)
                                            : 'https://image.shutterstock.com/image-vector/no-image-photo-template-on-600w-2094427453.jpg'

                                    }
                                    alt='avatar'
                                />
                            </div> */}
                        <form onSubmit={handleSubmit}>
                            <div className="form-input">
                                <label htmlFor="image" className="label">Add Image<AddPhotoAlternateIcon style={{ marginLeft: "10px" }} /></label>
                                <input name="image" type="file" style={{ display: "none" }} id="image" onChange={(e) => {
                                    setFile(e.target.files[0])
                                    setInputData(prev => ({
                                        ...prev, [e.target.name]: file ? URL.createObjectURL(file) : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                    }))
                                }} />
                            </div>

                            {inputs.map(input => (
                                <div className="form-input" key={input.id}>
                                    <label >{input.label}</label>
                                    <input name={input.name} type={input.type} placeholder={input.placeholder} className="input" required={input.required} onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <div className="form-input">
                                <label>description</label>
                                <textarea name="description" className="input" required onChange={handleChange} />
                            </div>
                            {type === "products" && (

                                <div className="form-input">
                                    <label htmlFor="image" className="label">Add Image<AddPhotoAlternateIcon style={{ marginLeft: "10px" }} /></label>
                                    <input name="image" type="file" style={{ display: "none" }} id="image" onChange={(e) => {
                                        setFile(e.target.files[0])
                                        setInputData(prev => ({
                                            ...prev, [e.target.name]: file ? URL.createObjectURL(file) : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                        }))
                                    }} />
                                </div>
                            )}

                            {/* {colorField}
                            <button onClick={colorInput}>add color</button> */}

                            <button className="submit" onClick={handleSubmit}>Submit</button>
                        </form>


                    </div>
                </div>



            </div>


        </AdminLayout>

    )
}

export default AdminEdit