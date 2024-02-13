import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { Formik, FormikHelpers } from 'formik'
import { Form, useNavigate } from 'react-router-dom'
import { signUpSchema, signUpValidationSchema } from '../../../schemas/sign-up.schema.'
import { Occupation } from '../../../utils/constants'
import InputField from './input-field'
import MuiPhoneNumber from 'material-ui-phone-number'

const SignUpForm: React.FC = () => {
  const navigate = useNavigate()

  const onSubmit = async (values: signUpSchema, actions: FormikHelpers<signUpSchema>) => {
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
    navigate('/home')
  }

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={signUpValidationSchema}
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNumber: '',
        occupation: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
    >
      {(props) => {
        return (
          <Form onSubmit={props.handleSubmit} autoComplete="on" autoSave="on">
            <div className="mb-5">
              <div className="gap-5 mb-5 md:flex">
                <div className="flex-grow mb-5 md:mb-0">
                  <InputField
                    fullwidth
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div className="flex-grow ">
                  <InputField
                    fullwidth
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="mb-5">
                <MuiPhoneNumber
                  onlyCountries={['my', 'sg']}
                  fullWidth
                  variant="outlined"
                  label="Phone Number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={props.values.phoneNumber}
                  onChange={(e) => {
                    props.handleChange(e)
                    props.setFieldValue('phoneNumber', e)
                  }}
                  onBlur={props.handleBlur}
                  error={
                    props.touched.phoneNumber &&
                    Boolean(props.errors.phoneNumber)
                  }
                  helperText={
                    props.touched.phoneNumber && props.errors.phoneNumber
                  }
                  defaultCountry={'my'}
                />
              </div>
              <div className="mb-5">
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={
                    props.touched.occupation && Boolean(props.errors.occupation)
                  }
                >
                  <InputLabel>Occupation</InputLabel>
                  <Select
                    name="occupation"
                    placeholder="occupation"
                    label="Occupation"
                    fullWidth
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.occupation}
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
                  {props.touched.occupation &&
                    Boolean(props.errors.occupation) && (
                      <FormHelperText>{props.errors.occupation}</FormHelperText>
                    )}
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
        )
      }}
    </Formik>
  )
}

export default SignUpForm
