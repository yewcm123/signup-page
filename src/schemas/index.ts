import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const signUpSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email("Please enter valid email").required('Required'),
    password: yup.string().min(5).matches(passwordRules, { message: "Please create a stronger password" }).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], "Password must match").required()

})