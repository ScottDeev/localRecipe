import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import {useLogout} from '../hooks/useLogout'
export default function Navbar() {
  const {logout} = useLogout()

  const{user} = useAuthContext()
  return (
    <nav className=' flex lg:flex-row flex-col justify-between py-[24px] items-center mx-[5%] w-[90%]'>
      <div>
        <h1 className="font-logo text-[30px] lg:mb-0 mb-[30px]">9JA RECIPE</h1>
      </div>
      <ul className='flex flex-row justify-between gap-[30px] items-center'>
        {user && <h1>Welcome back, <span className='capitalize'>{user.displayName}</span></h1>}
        {user && <NavLink to='/'>Home</NavLink>}
        {!user && <NavLink to='/login'>Login</NavLink>}
        {!user && <NavLink to='/signup'>Sign up</NavLink>}
        {user && <button onClick={logout}
        className="bg-[#ff642b] rounded-[0.3rem] px-[8px] py-[2px] text-white hover:bg-white hover:text-[#ff642b] border border-[#ff642b] transition duration-300">Logout</button>}

      </ul>
    </nav>
  )
}