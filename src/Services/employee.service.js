import http from "../http-common";


export const create = (data) => {

    return http.post("/Crud", data);
}

export const getAll = () => {

    return http.get("/Crud");
 
}

export const deleteone = (id) => {

    return http.delete(`/Crud/${id}`);
 
}

export const deleteAll = () => {

    return http.delete(`/Crud/`);
 
}

export const findById = (id) => {

    return http.get(`/Crud/${id}`);
 
}

export const update = (id , data) => {

    return http.put(`/Crud/${id}` , data);
 
}

export const findByName = (name) => {

    return http.get(`/Crud?name=${name}`);
 
}

export const getToken = (data) => {

    return http.post(`https://63205d03e3bdd81d8ef89985.mockapi.io/api/v1/authuser`,data).then(res => res.data);

 
}

 