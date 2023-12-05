import api from './axiosAPI';

async function setLandingPageData({email}){

    try {
        console.log("email from Service", email);
        const response = await api.post('/api/HeroSectionLandingPage',  {email});
        return response.data;
    } catch (error) {
        throw error;
    }
}



export default {
    setLandingPageData,
}