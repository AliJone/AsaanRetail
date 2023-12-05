import api from './axiosAPI';

async function SubmitPartnersPageData(){

    try {
        const response = await api.post('/api/HeroSectionPartnersPage');
        return response.data;
    } catch (error) {
        throw error;
    }
}



export default {
    SubmitPartnersPageData,
}