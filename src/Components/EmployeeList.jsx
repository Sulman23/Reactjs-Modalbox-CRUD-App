import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import Employee from "./Employee";
import { Modal, Button, Alert } from 'react-bootstrap';
import AddForm from "./AddForm";


const EmployeeList = () => {

    const { employees } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const handleShowAlert = () => setShowAlert(true);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();
        return () => {
            handleShowAlert();
        }
    }, [employees])

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-warning" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i>
                            <span>Add New Employee</span>
                        </Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Job Done Succefully!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th class="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => (

                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr>

                        ))
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
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

export default EmployeeList;