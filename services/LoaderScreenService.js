import api from './axiosAPI';

async function GetProgressData(){

    try {
        console.log("progress from from Service");
        const response = await api.get('/api/LoaderScreen');
        return response;
    } catch (error) {
        throw error;
    }
}



export default {
    GetProgressData,
}