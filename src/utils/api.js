import axios from "axios";





const api = axios.create({
    baseURL: 'https://covid-19-statistics.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': 
        '337139bc0dmshfcb02f960da296ap12210bjsn34c33ef0ee43',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
    },
});

export default api;
      