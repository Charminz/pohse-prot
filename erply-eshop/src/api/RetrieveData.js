import axios from 'axios';

export const Axios = axios.create({
	baseURL: `https://erply-challenge.herokuapp.com/list?AUTH=fae7b9f6-6363-45a1-a9c9-3def2dae206d`,
});
