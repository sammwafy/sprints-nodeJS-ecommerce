import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Collapse, Form } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import axios from '../../../Hooks/axios';
import './userProfile.scss';

const UserProfile = () => {
    // to get user id for axios request
    const { id } = useParams();
    // to get premisions
    const [cookies, setCookie] = useCookies(["token", "id"]);
    //store coming data
    const [user, setUser] = useState({})
    //for collapse open control
    const [open, setOpen] = useState(false)
    //carray value of status field
    const [status, setStatus] = useState(user.status || "active")

    useEffect(() => {
        axios
            .get(`/api/users/find/${id}`, {
                headers: {
                    token: "Bearer " + cookies.token,
                },
                withCredentials: true,
            })
            .then((response) => {
                setUser(response?.data);
            })
            .catch((err) => console.log(err));
    }, [id])

    const handleChange = (e) => {
        setStatus(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`/api/users/admin/${id}`, { status: status }, {
                headers: {
                    token: "Bearer " + cookies.token,
                },
                withCredentials: true,
            })
            .then((response) => {
                setUser(response?.data);
            })

    }

    return (

        <aside className="profile-card">
            <header>


                <img src="https://picsum.photos/640/360" className="hoverZoomLink" />



                <h1>
                    {user.username}
                </h1>


                <h2>
                    Email: {user.email}
                </h2>

            </header>


            <div className="profile-bio">

                <p>
                    status: {user.status}
                </p>
                <button className="button" onClick={() => setOpen(!open)}>Change status</button>
                <Collapse in={open}>

                    <Form className="m-4 p-6" onSubmit={handleSubmit}>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Status"
                                onChange={handleChange}
                            >
                                <MenuItem value={"active"}>Active</MenuItem>
                                <MenuItem value={"deactive"}>Deactive</MenuItem>
                                <MenuItem value={"suspended"}>Suspended</MenuItem>
                            </Select>
                        </FormControl>
                        <button type="submit" className="button">Update</button>
                    </Form>

                </Collapse>

            </div>






        </aside>
    )
}

export default UserProfile