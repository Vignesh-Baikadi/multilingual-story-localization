import axios from "axios";

const API = "http://localhost:8000/api/v1/system";

export async function getSystemHealth() {
    const response = await axios.get(`${API}/health`);
    return response.data;
}