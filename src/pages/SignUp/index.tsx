import { Button } from '@mui/material'
import SignUpForm from './components/sign-up-form'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className="align-middle">
      <h1 className="mb-10">Sign Up</h1>
      <SignUpForm />
      <Button
        variant="text"
        fullWidth
        sx={{ paddingY: '1em' }}
        onClick={() => {
          navigate('/')
        }}
      >
        Back
      </Button>
    </div>
  )
}

export default SignUp
