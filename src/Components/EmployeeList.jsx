import { useContext, useState } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import Employee from "./Employee";
import { Modal, Button } from 'react-bootstrap';
import AddForm from "./AddForm";


const EmployeeList = () => {

    const {employees} = useContext(EmployeeContext);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i> 
                            <span>Add New Employee</span>
                        </Button>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => (
                    
                                <tr>
                                    <Employee employee={employee}/>
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

export default EmployeeList;