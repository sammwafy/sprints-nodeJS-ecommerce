

import './adminEdit.scss'
import { useState } from 'react'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AdminLayout from '../../Componenets/AdminComponents/layout/AdminLayout';


const AdminEdit = ({ inputs }) => {
    const [file, setFile] = useState("")
    return (
        <AdminLayout>
            <div className="edit">
                <div className="editContainer">

                    <h1> Edit</h1>
                    <div className="top">
                        <div className="leftShow">
                            <div className="item">

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
                            </div>
                            <form>
                                <div className="formInput">
                                    <label htmlFor="file">
                                        Image:  <DriveFolderUploadIcon className='icon' />

                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }}
                                        onChange={e => setFile(e.target.files[0])} />
                                </div>
                                {inputs.map((input) => (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                )
                                )}
                                <button>Update</button>

                            </form>
                        </div>
                    </div>
                </div>



            </div>


        </AdminLayout>

    )
}

export default AdminEdit