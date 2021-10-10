import Button from "@restart/ui/esm/Button";
import React, {useContext} from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

const Employee = ({employee}) => {

    const {deleteEmployee} = useContext(EmployeeContext);
    
    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <Button onClick={() => deleteEmployee(employee.id)} class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Button>
            </td>
        </>
    )
}
export default Employee;