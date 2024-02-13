import { Button } from '@mui/material'
import SignUpForm from './components/sign-up-form'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div id="sign-up">
      <div className="card-container">
        <div className="m-auto align-middle bg-white md:w-12/12 card">
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
      </div>
    </div>
  )
}

export default SignUp
