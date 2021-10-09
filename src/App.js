import EmployeeList from "./Components/EmployeeList";
import EmployeeContexteProvider from "./Context/EmployeeContext";

function App() {
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeContexteProvider>
            <EmployeeList />
            </EmployeeContexteProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
