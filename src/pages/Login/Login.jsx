import { useState } from "react"
import { useLogin } from '../../hooks/useLogin'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"

// icons
import facebook from '../../assets/facebook.svg'
import google from '../../assets/google.svg'
import { NavLink } from "react-router-dom"

export default function Login() {
  const {error, login, isPending} = useLogin()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email){
      setEmailError(true)
    }else if(!password){
      setPasswordError(true)
    }else{
      if(email){
        setEmailError(false)
      }
      if(password){
        setPasswordError(false)
      }
      login(email, password);
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className="max-w-[500px] lg:w-[60%] w-[90%] mx-auto p-[35px] shadow">
        {error && <p className="bg-[red] bg-opacity-50 py-[15px] px-[10px] text-white">{error}</p>}
        <h6 className="text-[30px] pb-[20px]">LOGIN</h6>
      <form className="flex flex-col gap-[50px]" onSubmit={handleSubmit}>
        <label className="relative">
          <input
            className={`${emailError ? 'border-red-500' : ''} border-b focus:border-black outline-none w-full px-[40px] py-[2px] transition duration-300`} 
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="absolute left-0 bottom-0 text-[20px]">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          {emailError && <span className="absolute left-0 bottom-[-20px] text-[#ff642b]">Please enter your email</span>}
        </label>
        <label className="relative">
          <input 
            className={`${passwordError ? 'border-red-500' : ''} border-b focus:border-black outline-none w-full px-[40px] py-[2px] transition duration-300`} 
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="absolute left-0 bottom-0 text-[20px]">
            <FontAwesomeIcon icon={faLock} />
          </div>
          {passwordError && <span className="absolute left-0 bottom-[-20px] text-[#ff642b]">Please enter your password</span>}
          <span className="absolute right-0 bottom-[-30px] text-[#ff642b]"><a href="">Forgot password?</a></span>
        </label>
        {isPending && <button disabled className="bg-[#ff642b] rounded-[0.3rem] px-[8px] py-[8px] text-white hover:bg-white hover:text-[#ff642b] border border-[#ff642b] transition duration-300">Please wait</button>}
        {!isPending && <button className="bg-[#ff642b] rounded-[0.3rem] px-[8px] py-[8px] text-white hover:bg-white hover:text-[#ff642b] border border-[#ff642b] transition duration-300">LOGIN</button>}
      </form>
      <div className="flex flex-col gap-[10px] justify-center items-center mt-[30px]">
        <p>Or Login with</p>
        <ul className="flex flex-row justify-between w-full">
          <li className="flex flex-row justify-center gap-[10px] rounded-[0.3rem] bg-[#F3F3F3] hover:shadow-lg text-center px-[16px] py-[12px] cursor-pointer transition duration-300">
            <img src={facebook} alt="facebook-icon" />
            <span>Facebook</span>
          </li>
          <li className="flex flex-row justify-center gap-[10px] rounded-[0.3rem] bg-[#F3F3F3] hover:shadow-lg text-center px-[16px] py-[12px] cursor-pointer transition duration-300">
            <img src={google} alt="google-icon" />
            <span>Google</span>
          </li>
        </ul>
        <p className="mt-[30px]">Don't have account yet? <NavLink className="text-[#ff642b]" to="/signup">Sign up</NavLink></p>
      </div>
    </div>
  )
}