import axios from "axios";

const getApiCall = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (e) {
        console.log(e);
    }
};
export default getApiCall