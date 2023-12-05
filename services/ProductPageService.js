import api from './axiosAPI';

async function sendProductPageData({email}){

    try {
        console.log("email from Service", email);
        const response = await api.post('/api/HeroSectionProductPage',  {email});
        return response.data;
    } catch (error) {
        throw error;
    }
}



export default {
    sendProductPageData,
}