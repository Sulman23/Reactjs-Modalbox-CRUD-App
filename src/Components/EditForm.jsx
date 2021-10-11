import React, {useContext, useState} from "react";
import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from "../Context/EmployeeContext";


const EditForm = ({theEmployee}) => {
    
    const {updateEmployee} = useContext(EmployeeContext);

    const id = theEmployee.id;

    const [name, setName] = useState(theEmployee.name);
    const [email, setEmail] = useState(theEmployee.email);
    const [address, setAddress] = useState(theEmployee.address);
    const [phone, setPhone] = useState(theEmployee.phone);
   

    const formSubmit = (e) => {
        e.preventDefault();
        updateEmployee = (id, name, email, address, phone) 
        // alert(`Form Submitted ${name}`);   
    }

    return(
        <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Employee Name"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="name@example.com" 
                name="email"
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3} 
                name="address"
                value={address} 
                onChange={(e)=> setAddress(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Phone" 
                name="phone"
                value={phone} 
                onChange={(e)=> setPhone(e.target.value)}
                required
                />
            </Form.Group>
            <Button type="submit" variant="success" block>Update Employee</Button>
        </Form>
    );
}
export default EditForm;