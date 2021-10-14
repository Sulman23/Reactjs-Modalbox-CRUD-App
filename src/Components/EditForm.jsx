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
    
    const updatedEmployee = {id, name, email, address, phone}

    const formSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
        // alert(`Form Submitted ${name}`);   
    }

    return(
        <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                <Form.Control 
                type="email" 
                placeholder="Email" 
                name="email"
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Adderss"
                name="address"
                value={address} 
                onChange={(e)=> setAddress(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control 
                type="tel" 
                placeholder="Phone" 
                name="phone"
                value={phone} 
                onChange={(e)=> setPhone(e.target.value)}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3 d-grid gap-2" controlId="exampleForm.ControlInput1">
                 <Button type="submit" variant="warning" block>Update Employee</Button>
            </Form.Group>

        </Form>
    );
}
export default EditForm;