

// export const validation=()=>{
//     name:string().trim()
//         .min(2,"Must have at least 2 characters")
//         .max(15,"Must be less than 15 character")
//         .matches(/^[A-Za-z]{1,20}$/,"Alphabets only")
//         .required("Please Enter Name")


//     email:string().trim()
//         .email("Enter Valid Email")
//         .matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
//         .required("Please Enter Email")

//     contactno:string().trim()
//         .max(10,"Must be 10 digits")
//         .matches(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,"Digits Only")
//         .required("Please Enter Mobile Number")

//     password:string().trim()
//         .min(5,"Must have at least 8 characters")
//         .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!#?&])[A-Za-z\d@$!%*#?&]{5,14}$/, "Password must contain one letter, one digit and one special character(@$!#?&)")
//         .required("Please Enter Password")

//     password2:string().trim()
//         .oneOf([ref('password'),null],"Password does not match")
//         .required("Confirm Your Password")
// }

// export const initialValues = {
//     name:'',
//     email: '',
//     contactno:'', 
//     password: '',
//     password2: ''
// }

export default validation
