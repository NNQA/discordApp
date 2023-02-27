import React from 'react'
import icon from '../statics/logo-discord-white.svg';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,provider } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';

function Header() {
    const [user] = useAuthState(auth);
    const history = useNavigate();
    const signIN = (e: any) => {
        e.preventDefault();

        signInWithPopup(auth,provider)
            .then(() => history("/channels"))
            .catch((error: Error) => alert(error.message));
    };
    return (
        <div className='flex items-center pt-6 pb-6 px-6 justify-between     
            bg-discord_blue'>
            <div className='flex flex-row space-x-2 space-y-2 xl:pl-24 justify-between'>
                <a href="/">
                    <img src={icon}
                        alt="icon discord"
                        className='w-12 h-12 object-contain lg:max-w-none sm:max-w-none  ' />
                </a>
                <p className='text-white font-bold text-2xl tracking-wider'>DISCORD</p>
            </div>
            <div className='pr-24 space-x-10 font-fonthearder lg:flex text-[0.95rem] hidden'>
                <a href="/">
                    <p className='text-white font-bold  font-sans 
                        hover:underline transition duration-500 transform hover:scale-75'>Download</p>
                </a>
                <a href="/">
                    <p className='text-white font-bold  font-sans 
                        hover:underline transition duration-500 transform hover:scale-75'>Nitro</p>
                </a>
                <a href="/">
                    <p className='text-white font-bold  font-sans 
                        hover:underline transition duration-500 transform hover:scale-75'>Discover</p>
                </a>
                <a href="/">
                    <p className='text-white font-bold  font-sans 
                        hover:underline transition duration-500 transform hover:scale-75'>Safety</p>
                </a>
                <a href="/">
                    <p className='text-white font-bold  font-sans 
                        hover:underline transition duration-500 transform hover:scale-75'>Support</p>
                </a>
                <a href="/">
                    <p className='text-white font-bold  font-sans 
                        hover:underline transition duration-500 transform hover:scale-75'>Blog</p>
                </a>
                <a href="/">
                    <p className='text-white font-bold  font-sans 
                        hover:underline transition duration-500 transform hover:scale-75'>Careers</p>
                </a>
            </div>
            <div className='flex space-x-4 xl:pr-32'>
                <button className='bg-white p-2 rounded-full font-sans
                    px-4 focus:outline-none md:text-sm hover:shadow-2xl
                    transition duration-200 ease-in-out whitespace-nowrap font-medium
                    hover:bg-black hover:text-white'
                    onClick= {!user ? signIN : () => history("/channels")}
                >
                     {!user ? "Login" : "Open Discord"}
                </button>
                <Bars3Icon className='h-9 text-white cursor-pointer lg:hidden' />
            </div>
        </div>
    )
}
export default Header



