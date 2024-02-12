import { Button } from '@mui/material'
import { Formik, useFormik } from 'formik'
import { signUpSchema } from '../../../schemas/index'
import { Form } from 'react-router-dom'
import InputField from './InputField'

export interface SignUpValues {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const onSubmit = async (values, actions) => {
  console.log(values)
  console.log(actions)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}

const SignUpForm: React.FC = () => {

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={signUpSchema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
    >
      {(props) => (
        <Form>
          <div className="mb-5">
            <div className="mb-5">
              <InputField
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <InputField
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-5">
              <InputField
                label="Email"
                name="email"
                type="text"
                placeholder="Email"
                fullwidth
              />
            </div>
            <div className="mb-5">
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                fullwidth
              />
            </div>
            <div className="mb-5">
              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                fullwidth
              />
            </div>
            <Button
              variant="contained"
              size="large"
              type="submit"
              disabled={props.isSubmitting}
              fullWidth
              sx={{ paddingY: '1em' }}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
