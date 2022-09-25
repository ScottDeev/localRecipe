import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className=" bg-[#ff642b] text-white h-screen w-screen top-0 absolute flex flex-col justify-center items-center text-center gap-[30px]">
      <h1 className="font-logo text-[30px]">9JA RECIPE</h1>
      <div className="text-lg">
        <p>Welcome</p>
        <p>To view more information, sign up or login</p>
      </div>
      <div className="flex flex-row gap-[20px]">
        <Link to='/signup'>
          <button className="bg-[#ff642b] rounded-[0.3rem] px-[8px] py-[8px] text-white hover:bg-white hover:text-[#ff642b] border border-[#ff642b] transition duration-300">SIGNUP</button>
        </Link>
        <Link to='/login'>
          <button className="bg-[#ff642b] rounded-[0.3rem] px-[8px] py-[8px] text-white hover:bg-white hover:text-[#ff642b] border border-[#ff642b] transition duration-300">LOGIN</button>
        </Link>
      </div>
    </div>
  )
}