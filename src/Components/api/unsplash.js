import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 260de74c93d8a3aa149f859a914f9d2e73d9459c28ec82e43f689582b9e4a24e"
    }
});