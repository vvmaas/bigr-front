import api from './api';

export async function getWeights(token) {
    const response = await api.get('/weight', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function postWeight(body, token) {
    const response = await api.post('/weight', body, {
        headers: {
        Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export async function putWeight(id, body, token) {
    const response = await api.put(`/weight/${id}`, body, {
        headers: {
        Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}

export async function deleteWeight(id, token) {
const response = await api.delete(`/weight/${id}`, {
    headers: {
    Authorization: `Bearer ${token}`,
    }
});
return response.data;
}
