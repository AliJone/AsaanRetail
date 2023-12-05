import api from './axiosAPI';

async function sendSolutionsPageData({email}){

    try {
        console.log("email from Service", email);
        const response = await api.post('/api/HeroSectionSolutionsPage',  {email});
        return response.data;
    } catch (error) {
        throw error;
    }
}



export default {
    sendSolutionsPageData,
}