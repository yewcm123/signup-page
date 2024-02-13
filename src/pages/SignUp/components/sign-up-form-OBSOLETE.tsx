import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { signUpSchema } from '../../../schemas/index'

export interface SignUpValues {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const onSubmit = async (values, actions) => {
  console.log(values)
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}

const SignUpForm: React.FC = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik<SignUpValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit,
    validationSchema: signUpSchema,
  })


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-5">
        <TextField
          placeholder="First Name"
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.firstName) && touched.firstName}
          helperText={touched.firstName && errors.firstName}
        />
        <TextField
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.lastName) && touched.lastName}
          helperText={touched.lastName && errors.lastName}
        />
      </div>
      <div className="mb-5">
        <TextField
          fullWidth
          placeholder="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.email) && touched.email}
          helperText={touched.email && errors.email}
        />
      </div>
      <div className="mb-5">
        <TextField
          fullWidth
          placeholder="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.password) && touched.password}
          helperText={touched.password && errors.password}
        />
      </div>
      <div className="mb-5">
        <TextField
          fullWidth
          placeholder="Confirm Password"
          name="confirmPassword"
          type="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.confirmPassword) && touched.confirmPassword}
          helperText={touched.confirmPassword && errors.confirmPassword}
        />
      </div>
      <Button
        variant="contained"
        size="large"
        type="submit"
        disabled={isSubmitting}
        fullWidth
        sx={{ paddingY: '1em' }}
      >
        Sign Up
      </Button>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </form>
  )
}

export default SignUpForm
