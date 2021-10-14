import React, {useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from "./EditForm";

const Employee = ({employee}) => {

    const {deleteEmployee} = useContext(EmployeeContext);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      handleClose() 
    }, [employee])
      
    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
            <OverlayTrigger
              overlay={
                <Tooltip id={`tooltip-top`}>
                  Edit 
                </Tooltip>
              }
            >
              <a onClick={handleShow} class="btn text-warning btn-act"><i class="material-icons">&#xE254;</i></a>
            </OverlayTrigger>
            <OverlayTrigger
                overlay={
                <Tooltip variant="danger" id={`tooltip-top`}>
                  Delete
                </Tooltip>
                }
            >
                <a onClick={() => deleteEmployee(employee.id)} class="btn text-danger btn-act"><i class="material-icons">&#xE872;</i></a>
            </OverlayTrigger>
            </td>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <EditForm theEmployee={employee} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
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