import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 0557ab42c6e34431e3007187089b49a053a9885d1868425c048a3f6b92ff3038'
    }

})