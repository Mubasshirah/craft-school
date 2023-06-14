
import { Link } from 'react-router-dom';
import img from '../assets/logo/error.jpg'
const NotFound = () => {
    return (
        <div className=' pb-20'>
<img src={img} alt="" className='w-[60%] mx-auto'/>
           <div className='text-center'>
            <Link to="/"> <button className='px-6 py-3   hover:bg-gray-100 hover:text-black text-white rounded-lg bg-opacity-30 bg-green-900'>Back to home</button></Link>
            </div> 
        </div>
    );
};

export default NotFound;