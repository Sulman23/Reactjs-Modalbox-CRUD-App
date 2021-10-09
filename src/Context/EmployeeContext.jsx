import { createContext, useState } from "react";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees] = useState([
        {  name: 'Rahul khana', email: 'rahul@mail.com', address: '90 Chiaroscuro Rd, Portland, USA', phone: '(123) 555-2222' },
        {  name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
        {  name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
        {  name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
        {  name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097' }
    ]);

    return(
        <EmployeeContext.Provider value={{employees}}>
            {props.children}
        </EmployeeContext.Provider>
        
    )
}

export default EmployeeContextProvider;