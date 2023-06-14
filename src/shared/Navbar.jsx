
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
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
                        {
                            user ?
                                <>
                                    <li><NavLink to='dashboard'>Dashboard</NavLink></li>
                                    <span className='ms-8'>
                                    <img src={user.photoURL} alt="" style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '15px' }} data-toggle="tooltip" data-placement="top" title={user.displayName} />
                                </span>
                                </>
                                :
                                <li><NavLink to='/login'>Login</NavLink></li>
                        }

                    </ul>
                </div>
                <div className='flex md:flex-row flex-col items-center my-5 md:my-2'>
                    <img src={logo} style={{ borderRadius: '50%' }} className=' w-[70px] h-[70px]' alt="" />
                    <a className="btn btn-ghost  text-xl uppercase">Craft School</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 text-1xl font-semibold">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/instructor'>Instructors</NavLink></li>
                    <li><NavLink to='/class'>Classes</NavLink></li>
                    {
                        user ?
                            < >
                                <li><NavLink to='dashboard'>Dashboard</NavLink></li>
                                <span className='ms-8'>
                                    <img src={user.photoURL} alt="" style={{ width: '35px', height: '35px', borderRadius: '50%', marginRight: '15px' }} data-toggle="tooltip" data-placement="top" title={user.displayName} />
                                </span>
                            </>
                            :
                            <li><NavLink to='/login'>Login</NavLink></li>
                    }

                </ul>
            </div>
          {
            user ? 
            <div className="navbar-end">
            <button onClick={handleLogOut} className='px-6 py-3   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900'>Logout</button>
        </div>
        :
        <></>

          }
        </div>
    );
};

export default Navbar;