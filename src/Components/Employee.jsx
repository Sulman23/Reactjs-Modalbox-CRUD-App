import React, {useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import { Modal, Button } from 'react-bootstrap';
import EditForm from "./EditForm";

const Employee = ({employee}) => {

    const {deleteEmployee} = useContext(EmployeeContext);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      handleClose() 
    }, [employee]);
      
    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <Button onClick={handleShow} class="btn text-warning btn-act" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Button>
                <Button onClick={() => deleteEmployee(employee.id)} class="btn text-danger btn-act" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Button>
            </td>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <EditForm theEmployee={employee} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" type="submit">
              Add Employee
            </Button> */}
          </Modal.Footer>
        </Modal>
        </>
    )
}
export default Employee;