import URL from "../constants/url"
import ky from "ky";

const api = ky.extend({
    hooks: {
        beforeRequest: [
            request => { request.headers.set('Authorization', `Bearer ${localStorage['token']}`) }
        ]
    }
});

export async function getModules(){
    const data = await api.get(`${URL}/modules`, {method: 'get'}).json();
    return data;
}

export async function getModule(id: string, token = localStorage.getItem('token')){
    const response = await fetch(`${URL}/modules/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}