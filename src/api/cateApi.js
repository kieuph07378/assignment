import http from "./axiosHttp";

const getAll = () => {
    return http.get("/cate");
};

const get = id => {
    return http.get(`/cate/${id}`);
};

const create = data => {
    return http.post("/cate", data);
};

const update = (id, data) => {
    return http.put(`/cate/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/cate/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};