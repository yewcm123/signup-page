import * as yup from 'yup'
import { Occupation } from '../utils/constants';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const occupationList = Object.values(Occupation)
// const occupationSchema = yup.string().oneOf(occupationList)

export interface signUpSchema {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    occupation: string;
    password: string;
    confirmPassword: string
}

export const signUpValidationSchema: yup.Schema<signUpSchema> = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    phoneNumber: yup.string().required('Required'),  
    email: yup.string().email("Please enter valid email").required('Required'),
    occupation: yup.string().oneOf(occupationList).min(1, 'Please select your occupation').required('Required'),
    password: yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password" }).required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], "Password must match").required('Required')

})