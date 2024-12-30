import axios from 'axios';

const API_URL = "joyful-consideration-production.up.railway.app/api/stocks";

export const fetchStocks = () => axios.get(API_URL);
export const addStock = (stock) => axios.post(API_URL, stock);
export const updateStock = (id, stock) => axios.put(`${API_URL}/${id}`, stock);
export const deleteStock = (id) => axios.delete(`${API_URL}/${id}`);
export const getPortfolioValue = () => axios.get(`${API_URL}/value`);
