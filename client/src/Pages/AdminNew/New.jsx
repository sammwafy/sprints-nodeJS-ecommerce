import "./new.scss";
import AdminLayout from "../../Componenets/AdminComponents/layout/AdminLayout"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
const New = ({ title, inputs }) => {
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
                        <form>
                            <div className="form-input">
                                <label htmlFor="image" className="label">Add Image<AddPhotoAlternateIcon style={{ marginLeft: "10px" }} /></label>
                                <input type="file" style={{ display: "none" }} id="image" onChange={(e) => setFile(e.target.files[0])} />
                            </div>

                            {inputs.map(input => (
                                <div className="form-input" key={input.id}>
                                    <label >{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} className="input" />
                                </div>
                            ))}

                            <button className="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default New