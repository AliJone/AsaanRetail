import api from './axiosAPI';

async function sendArticlePageData({email}){

    try {
        console.log("email from Service", email);
        const response = await api.post('/api/HeroSectionArticlesPage',  {email});
        return response.data;
    } catch (error) {
        throw error;
    }
}



export default {
    sendArticlePageData,
}