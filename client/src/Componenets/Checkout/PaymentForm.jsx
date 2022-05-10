import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap'

const PaymentForm = ({ handleSubmit, onChange }) => {

    return (
        <div>
            <h4 className="checkout-title">BILLING DETAILS</h4>
            <Form onSubmit={handleSubmit} onChange={onChange}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="john doe" name="name" defaultValue={null} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Adress</Form.Label>
                    <Form.Control type="text" placeholder="abc st." name="street" defaultValue={null} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Cairo" name="city" defaultValue={null} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>post Code</Form.Label>
                    <Form.Control type="number" placeholder="0000" name="code" defaultValue={null} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Egypt" name="country" defaultValue={null} required />
                </Form.Group>
                <Button type="submit">submit</Button>
            </Form>
        </div>
    )
}

export default PaymentForm