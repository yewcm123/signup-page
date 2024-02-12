import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <h1>Welcome to <span className="font-bold primary-color">Mugen</span></h1>
        <h3>Your <span className="primary-color">One Stop Solution</span> to all things in insurance</h3>
        <div className="flex justify-center gap-3">
          <Button variant="contained" onClick={() => {navigate('/signup')}} >Sign up</Button>
          <Button variant="outlined">Login</Button>
        </div>
      </div>
    </>
  )
}

export default Hero