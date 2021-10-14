import React, {useContext, useState} from "react";
import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from "../Context/EmployeeContext";


const AddForm = () => {
    
    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState(
        {name:"", email:"", address:"", phone:"" }
    );
   
    const inputChange = (event) => { 
        const { name, value } = event.target
        setNewEmployee((preVal) => {
            return {
            ...preVal,
            [name] : value,
            }
        });
    }

    const {name, email, address, phone } = newEmployee;
    const formSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone); 
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
                onChange={inputChange}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control 
                type="email" 
                placeholder="Email" 
                name="email"
                value={email} 
                onChange={inputChange}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Address" 
                name="address"
                value={address} 
                onChange={inputChange}
                required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control 
                type="tel" 
                placeholder="Phone" 
                name="phone"
                value={phone} 
                onChange={inputChange}
                required
                />
            </Form.Group>
            <Button type="submit" variant="success" className="form-btn">Add Employee</Button>
        </Form>
    );
}
export default AddForm;