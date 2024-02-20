import { Link } from "react-router-dom";

const TopBar = ({pageName, login, home, logout, register}) => {
  return (
    <div className="w-full h-16 bg-[#96b6c5] relative py-5 homeProjectShadow">
      <h1 className="font-bold text-lg ml-5" >{pageName}</h1>
      {login && <Link to="/login" className="effect font-bold absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md hover:bg-[#6b879b]">Login</Link>}
      {home && <Link to="/" className="effect font-bold absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md hover:bg-[#6b879b]">Home</Link>}
      {logout && <Link to="/" className="effect font-bold absolute right-4 top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md hover:bg-[#6b879b]">Logout</Link>}
      {register && <Link to="/register" className="effect font-bold absolute right-[100px] top-3 bg-[#adc4ce] p-2 rounded-md drop-shadow-md hover:bg-[#6b879b]">Register</Link>}
    </div>
  )
}

export default TopBar
