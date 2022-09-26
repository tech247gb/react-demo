import { CREATE_EMPLOYEE , DELETE_EMPLOYEE, RETRIEVE_EMPLOYEE , UPDATE_EMPLOYEE ,DELETE_ALL_EMPLOYEES} from "../Actions/Types";

const initialState = [];

function employeeReducer(employees = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_EMPLOYEE:
        return [...employees, payload];

        
  
      case RETRIEVE_EMPLOYEE:
        return payload;
  
      case UPDATE_EMPLOYEE:
        return employees.map((employee) => {
          if (employee.id === payload.id) {
            return {
              ...employee,
              ...payload,
            };
          } else {
            return employee;
          }
        });
  
      case DELETE_EMPLOYEE:
        return employees.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_EMPLOYEES:
        return [];
  
      default:
        return employees;
    }
  };

   
export default employeeReducer;