import { CREATE_EMPLOYEE , RETRIEVE_EMPLOYEE , DELETE_EMPLOYEE , UPDATE_EMPLOYEE , DELETE_ALL_EMPLOYEES} from "./Types";
import { create , getAll , deleteone , findById , update , deleteAll , findByName} from "../Services/employee.service";

// Employee Creation api call and dispatch function

export const createEmployee = (payload) => async (dispatch) => {
    try {
      const res = await create(payload);
  
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: res.data,
      });
    } catch (err) {

      return Promise.reject(err);
    }

  };

// Get Employee details api call and retrieve data from store 

  export const retrieveEmployeeDetails = () => async (dispatch) => {

    try {
      const res = await getAll();
      
      dispatch({
        type: RETRIEVE_EMPLOYEE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

// Delete employee using id api call and dispatch function

export const deleteEmployee = (id) => async (dispatch) => {
    try {
      await deleteone(id);
  
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
   
  };

// To delete all employees api call and dispatch function

  export const deleteAllEmployees = () => async (dispatch) => {
    try {
     const res = await deleteAll();
  
      dispatch({
        type: DELETE_ALL_EMPLOYEES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
 
  };
 
// Search employee by id api call and dispatch function

export const findEmployeeById = (id) => async (dispatch) => {
    try {
      const res = await findById(id);
  
      dispatch({
        type: RETRIEVE_EMPLOYEE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }; 

// Update employee details api call using id and dispatch function
  
export const updateEmployee = (id,data) => async (dispatch) => {

    try {
      const res = await update(id, data);

      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

// Find employee by name api call and dispatch function for searching employee

export const findEmployeeByName = (name) => async (dispatch) => {
    try {
      const res = await findByName(name);
  
      dispatch({
        type: RETRIEVE_EMPLOYEE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
