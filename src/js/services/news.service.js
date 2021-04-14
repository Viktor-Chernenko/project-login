import axios from '../plugins/axios';

export async function getNews() {
    try {
        const request = await axios.get(`/news`);
        console.log(request);
        return request;
    } catch (err) {
        return Promise.reject(err);
    }
}