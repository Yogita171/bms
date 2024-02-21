import axios from "axios";

export const BASE_URL='http://localhost:8081';

export const myAxios=axios.create({
    baseURl:BASE_URL,
});
