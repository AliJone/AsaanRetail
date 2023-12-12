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

async function getArticlePageData({id}){
    try {
        console.log("email from Service", {id});
        const response = await api.get('/api/ArticlePage',  {id});
        console.log("abc")
        return response.data.userData['data'];
    } catch (error) {
        throw error;
    }

}



export default {
    sendArticlePageData,
    getArticlePageData
}