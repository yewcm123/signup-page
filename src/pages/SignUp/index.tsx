import SignUpForm, { SignUpValues } from './components/sign-up-form'

const SignUp = () => {
  return (
    <div className="align-middle">
      <h1 className='mb-10'>Sign Up</h1>
      <SignUpForm onSubmit={(values: SignUpValues) => {
        console.log(values)
      }} />
    </div>
  )
}

export default SignUp
