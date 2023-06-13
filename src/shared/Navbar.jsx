
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.jpg'
const Navbar = () => {
    return (
        <div className="navbar px-20 bg-green-800 bg-opacity-30 fixed z-10 text-white">
            <div className="navbar-start  ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-gray-300 rounded-box w-52">
                    <li><NavLink to='/'>Home</NavLink></li>
                       <li><NavLink to='/instructor'>Instructors</NavLink></li>
                       <li><NavLink to='/class'>Classes</NavLink></li>
                       <li><NavLink to='dashboard'>Dashboard</NavLink></li>
                     
                       <li><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </div>
               <div className='flex md:flex-row flex-col items-center my-5 md:my-2'>
               <img src={logo} style={{borderRadius:'50%'}} className=' w-[70px] h-[70px]' alt="" />
                <a className="btn btn-ghost  text-xl uppercase">Craft School</a>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 text-1xl font-semibold">
                        <li><NavLink to='/'>Home</NavLink></li>
                       <li><NavLink to='/instructor'>Instructors</NavLink></li>
                       <li><NavLink to='/class'>Classes</NavLink></li>
                       <li><NavLink to='dashboard'>Dashboard</NavLink></li>
                     
                       <li><NavLink to='/login'>Login</NavLink></li>
                    
                </ul>
            </div>
            <div className="navbar-end">
            <button className='px-5 py-3 font-semibold bg-gray-100 text-black rounded-lg '>Logout</button>
            </div>
          
        </div>
    );
};

export default Navbar;