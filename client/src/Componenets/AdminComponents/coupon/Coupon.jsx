import React from 'react'
import CouponForm from './CouponForm'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Form from 'react-bootstrap/Form'
import { nanoid } from 'nanoid'
import { couponsColumns } from '../../../export data/DataTableFields'
import { useEffect } from 'react';
import axios from '../../../Hooks/axios';
import { useCookies } from "react-cookie";
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const Coupon = () => {
    const [open, setOpen] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const [cookies, setCookie] = useCookies(["token", "id"]);
    const [value, setValue] = React.useState(new Date());
    const [inputs, setInputs] = useState({ percentage: false, expiresIn: value });



    useEffect(() => {

        axios
            .get(`/api/copouns/all`,
                {
                    headers: {
                        token: "Bearer " + cookies.token,
                    },
                    withCredentials: true,
                }
            )
            .then(function (response) {
                // handle success
                console.log(response.data);
                setCoupons(response.data)
            })


            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    //table grid row

    const rows = coupons.map(coupon => ({
        id: coupon._id,
        name: coupon.name,
        amount: coupon.amount,
        date: coupon.expiresIn
    }))




    const handleChange = (e) => {

        setInputs(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })

    }
    console.log(inputs);
    console.log(value);
    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`/api/copouns/`, inputs,
                {
                    headers: {
                        token: "Bearer " + cookies.token,

                        "Content-Type": "application/json",


                    },
                    withCredentials: true,
                }
            )
            .then(function (response) {
                // handle success

                console.log(response.data);
            })


            .catch(function (error) {
                // handle error
                console.log(error);
            })

        setOpen(false)



    }

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="m-3"
                variant="outline-dark"

            >
                Add coupon
            </Button >
            <Collapse in={open}>

                <Form className="m-4 p-6" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Coupon Code</Form.Label>
                        <Form.Control type="text"
                            required
                            placeholder="Enter code" value={inputs.name} name="name" onChange={e => handleChange(e)} />
                        <Button className="mt-2" variant="primary" onClick={() => setInputs(prev => ({ ...prev, name: nanoid() }))}>
                            Generate code
                        </Button>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" placeholder="Enter Amount"
                            required
                            name="amount" onChange={e => handleChange(e)} value={inputs.amount} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Amount to Percentage %" checked={inputs.percentage} onChange={(e) => setInputs(prev => ({ ...prev, percentage: !inputs.percentage }))} />
                    </Form.Group>

                    <Form.Group>
                        {/* <input type="date" name="date" value={inputs.date} onChange={(e) => setInputs(prev => ({}))}/> */}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                openTo="year"
                                views={['year', 'month', 'day']}
                                label="Year, month and date"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    setInputs(prev => ({ ...prev, expiresIn: newValue }))
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </LocalizationProvider>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="m-3">
                        Submit
                    </Button>
                </Form>

            </Collapse>

            <div style={{ height: 400, width: '100%', padding: '10px' }}>
                <DataGrid
                    rows={rows}
                    columns={couponsColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}

export default Coupon