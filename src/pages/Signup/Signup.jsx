import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons"

// icons
import facebook from '../../assets/facebook.svg'
import google from '../../assets/google.svg'
import { NavLink } from "react-router-dom"

export default function Signup() {
  const {error, signup, isPending} = useSignup()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [displayNameError, setDisplayNameError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!displayName){
      setDisplayNameError(true)
    }else if(!email){
      setEmailError(true)
    }else if(!password){
      setPasswordError(true)
    }else{
      if(displayName){
        setDisplayNameError(false)
      }
      if(email){
        setEmailError(false)
      }
      if(password){
        setPasswordError(false)
      }
      signup(email, password, displayName);
      // setDisplayName('')
      // setEmail('')
      // setPassword('')
    }
  }

  return (
    <div className="max-w-[500px] lg:w-[60%] w-[90%] mx-auto p-[35px] shadow">
        {error && <p>{error}</p>}
        <h6 className="text-[30px] pb-[20px]">SIGNUP</h6>
      <form className="flex flex-col gap-[50px]" onSubmit={handleSubmit}>
        <label className="relative">
          <input
            className={`${displayNameError ? 'border-red-500' : ''} border-b focus:border-black outline-none w-full px-[40px] py-[2px] transition duration-300`} 
            type="text"
            placeholder="Username"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
          <div className="absolute left-0 bottom-0 text-[20px]">
            <FontAwesomeIcon icon={faUser} />
          </div>
          {displayNameError && <span className="absolute left-0 bottom-[-20px] text-[#ff642b]">Please enter a username</span>}
        </label>
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
          {emailError && <span className="absolute left-0 bottom-[-20px] text-[#ff642b]">Please enter an email</span>}
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
          {passwordError && <span className="absolute left-0 bottom-[-20px] text-[#ff642b]">Please enter a password</span>}
        </label>
        {!isPending && <button className="bg-[#ff642b] rounded-[0.3rem] px-[8px] py-[8px] text-white hover:bg-white hover:text-[#ff642b] border border-[#ff642b] transition duration-300">SIGNUP</button>}
        {isPending && <button disabled className="bg-[#ff642b] rounded-[0.3rem] px-[8px] py-[8px] text-white hover:bg-white hover:text-[#ff642b] border border-[#ff642b] transition duration-300">Please wait</button>}
      </form>
      <div className="flex flex-col gap-[10px] justify-center items-center mt-[20px]">
        <p>Or Signup with</p>
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
        <p className="mt-[30px]">Have an account already? <NavLink className="text-[#ff642b]" to="/login">Login</NavLink></p>
      </div>
    </div>
  )
}