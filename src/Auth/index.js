//isLoggedIn=> token present
export const isLoggedIn=()=>{
    let data=localStorage.getItem("data")
    if(data!=null){
        return true
    }
    else{
        return false;
    }
};


//dologin=>data=>set to localstorage
export const doLogin=(data,next)=>{
    localStorage.setItem=("data",JSON.stringify(data));
    next()
};


//doLogout=>remove from localStorage
export const dologout=(next)=>{
    localStorage.removeItem("data");
    next()
};


//get Current User
export const getCurrentUserDetail=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;    
    }
    else{
        return undefined;
    }
};