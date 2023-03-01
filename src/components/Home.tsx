import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { redirect } from "react-router-dom"
import ServerIcon from './ServerIcon';
import { ChevronDoubleDownIcon, ChevronDownIcon, DocumentIcon, PlusIcon } from '@heroicons/react/24/solid';

function Home() {
  const [user] = useAuthState(auth);

  return <>
    {!user && redirect("/")}
    <div className='flex h-screen'>
      <div className='flex flex-col 
      space-y-3 bg-discord_servers min-w-max'>
        <div className='server-default hover:bg-discord_blue'>
          <img
            src="https://i1.wp.com/pngkey.com/png/full/20-200938_discord-png.png"
            alt="iconServer"
            className='h-5 m-3'
          />
        </div>
        <hr className='border-gray-700 border w-8 m-auto' />
        <ServerIcon image="https://i1.wp.com/pngkey.com/png/full/20-200938_discord-png.png" />
        <ServerIcon image="https://i1.wp.com/pngkey.com/png/full/20-200938_discord-png.png" />
        <ServerIcon image="https://i1.wp.com/pngkey.com/png/full/20-200938_discord-png.png" />
        <ServerIcon image="https://i1.wp.com/pngkey.com/png/full/20-200938_discord-png.png" />
        <div className='server-default hover:bg-discord_green group'>
          <PlusIcon className='text-discord_green h-5 group-hover:text-white hover:text-white' />
        </div>
      </div>
      <div className='bg-discord_channels flex flex-col min-w-max'>
        <h2 className='flex text-white border-b border-gray-800
          font-bold text-sm py-4 px-6 justify-between
          items-center hover:bg-discord_serverHover cursor-pointer'>
          QuocAnh(Official)
          <ChevronDownIcon className='h-5 ml-[60px] ' />
          </h2>
          <div className='text-dicord_channelsText 
            overflow-y-scroll flex-grow scrollbar-thumb-gray-800
            scrollbar-track-gray-600'
            >
            <div>
              <DocumentIcon className='h-3 mr-3'  />
              <h4>Channels & Roles</h4>
            </div>
          </div>
      </div>
    </div>
  </>
}

export default Home

