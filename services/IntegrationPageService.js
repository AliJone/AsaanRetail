import api from './axiosAPI';

async function sendIntegrationPageData({email}){

    try {
        console.log("email from Service", email);
        const response = await api.post('/api/HeroSectionIntegrationPage',  {email});
        return response.data;
    } catch (error) {
        throw error;
    }
}



export default {
    sendIntegrationPageData,
}