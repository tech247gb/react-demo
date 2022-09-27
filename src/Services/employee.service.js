import http from "../http-common";

// Create Employee api call

export const create = (data) => {

    return http.post("/Crud", data);
}

// Get all Employee details api call

export const getAll = () => {

    return http.get("/Crud");
 
}

// Delete one Employee api call

export const deleteone = (id) => {

    return http.delete(`/Crud/${id}`);
 
}

// Delete All Employees api call

export const deleteAll = () => {

    return http.delete(`/Crud/`);
 
}

// Find Employee api call using id

export const findById = (id) => {

    return http.get(`/Crud/${id}`);
 
}

// Update Employee api call using id

export const update = (id , data) => {

    return http.put(`/Crud/${id}` , data);
 
}

// Search Employee api call by name

export const findByName = (name) => {

    return http.get(`/Crud?name=${name}`);
 
}

// Fetch token api call for Login authentication

export const getToken = (data) => {

    return http.post(`https://63205d03e3bdd81d8ef89985.mockapi.io/api/v1/authuser`,data).then(res => res.data);

 
}

 