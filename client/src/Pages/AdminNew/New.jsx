import "./new.scss";
import AdminLayout from "../../Componenets/AdminComponents/layout/AdminLayout"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";

const New = ({ title, type }) => {
    const [color, setColor] = useState({})
    const [colorField, setColorField] = useState([])
    const handleChange = () => {

    }
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    // const colorInput = (e) => {
    //     e.preventDefault()
    //     setColorField(state => [...state, (<div className="form-input" key={state.length}>
    //         <label >color</label>
    //         <input type="color" className="input" />
    //         <label >qty</label>
    //         <input type="number" className="input" />
    //     </div>)]
    //     )

    // }

    console.log(colorField);

    let inputs
    switch (type) {
        case "products": inputs = [{
            id: 1,
            label: "Title",
            type: "text",
            placeholder: "Table",
            required: true
        },
        {
            id: 2,
            label: "Size",
            type: "text",
            placeholder: "medium",
            required: true
        },
        {
            id: 3,
            label: "Quantity",
            type: "number",
            placeholder: "1",
            required: true
        },
        {
            id: 4,
            label: "Price",
            type: "number",
            placeholder: "1",
            required: true
        },
        {
            id: 6,
            label: "color",
            type: "color",
            placeholder: "1",
            required: true
        },
        ]
            break;
        case "brand": inputs = [
            {
                id: 1,
                label: "Title",
                type: "text",
                placeholder: "Table",
                required: true
            },
        ]
            break;
        case "category": inputs = [
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

    const [file, setFile] = useState(null)

    console.log(file);
    return (
        <AdminLayout>
            <div className="newItem">
                <div className="top"><h1 className="title">{title}</h1></div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="" className="image" />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="form-input">
                                <label htmlFor="image" className="label">Add Image<AddPhotoAlternateIcon style={{ marginLeft: "10px" }} /></label>
                                <input type="file" style={{ display: "none" }} id="image" onChange={(e) => setFile(e.target.files[0])} />
                            </div>

                            {inputs.map(input => (
                                <div className="form-input" key={input.id}>
                                    <label >{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} className="input" required={input.required} />
                                </div>
                            ))}
                            <div className="form-input">
                                <label>description</label>
                                <textarea className="input" required />
                            </div>
                            {/* {colorField}
                            <button onClick={colorInput}>add color</button> */}

                            <button className="submit" >Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default New