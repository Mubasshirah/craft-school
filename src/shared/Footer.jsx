import logo from '../assets/logo/logo.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="footer py-10 px-20 bg-green-800 text-white bg-opacity-30">
                <div className='flex flex-col items-center'>
                    <img src={logo} className='w-[50px] h-[50px] ' style={{ borderRadius: '50%' }} alt="" />
                    <p className='font-semibold'>Craft School</p>
                </div>
                <div>
                    <span className="uppercase text-white mb-2 font-semibold">Company</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Class</a>
                    <a className="link link-hover">Instructor</a>
                </div>
                <div>
                    <span  className="uppercase text-white mb-2 font-semibold">Contact us</span>
                    <a className="link link-hover">Email: craftschool@gmail.com</a>
                    <a className="link link-hover">Contact no. +637388388336</a>
                    <a className="link link-hover">
                        <div className='flex  space-x-3'>
                        <FaFacebook></FaFacebook>  <FaInstagram></FaInstagram>  <FaTwitter></FaTwitter>
                        </div>
                    </a>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by craft school</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;