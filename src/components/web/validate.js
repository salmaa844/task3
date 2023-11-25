
import *as  yup from 'yup';

export  const  validationSchema = yup.object({
       userName:yup.string().required("username is required ").min(3,"must bt al least 3 char").max(30," max is 30 char"),
       email:yup.string().required("email is required ").email(),
       password:yup.string().required("password is required ").min(3,"must bt al least 3 char").max(30," max is 30 char"),
   } )

export  const  loginSchema = yup.object({
    email:yup.string().required("email is required ").email(),
    password:yup.string().required("password is required ").min(3,"must bt al least 3 char").max(30," max is 30 char"),
} )