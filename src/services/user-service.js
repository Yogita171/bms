import { myAxios} from "./helper";

export const signUp=(user)=>{
    return myAxios.post("/api/users/register",user)
    .then((response)=>response.json());
};

export const loginUser=(loginDetail)=>{
    return myAxios.post("/api/Users/login",loginDetail)
    .then((response)=>response.data)
}