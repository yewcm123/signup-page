import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { Formik } from 'formik'
import { Form } from 'react-router-dom'
import { signUpSchema } from '../../../schemas/index'
import InputField from './InputField'
import { Occupation } from '../../../utils/constants'

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
        occupation: '',
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
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Occupation</InputLabel>
                <Select
                  name="occupation"
                  placeholder="occupation"
                  label="Occupation"
                  fullWidth
                >
                  <MenuItem value={Occupation.FRONTEND_DEVELOPER}>
                    Frontend Developer
                  </MenuItem>
                  <MenuItem value={Occupation.BACKEND_DEVELOPER}>
                    Backend Developer
                  </MenuItem>
                  <MenuItem value={Occupation.FULL_STACK_DEVELOPER}>
                    Full Stack Developer
                  </MenuItem>
                </Select>
              </FormControl>
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
