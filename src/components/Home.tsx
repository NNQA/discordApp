import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import { redirect } from "react-router-dom"
import ServerIcon from './ServerIcon';
import { ChevronDoubleDownIcon, ChevronDownIcon, DocumentIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid';
import Channel from './Channel';
import { addDoc, collection, doc } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';

function Home() {
  const [user] = useAuthState(auth);
  const [channel] = useCollection(collection(db, 'channels'));

  const handleAddChannel = () => {
    const channelName = prompt("enter a new channel name");

    if (channelName) {
      addDoc(collection(db, "channels"), {
        channelName: channelName,
      })
    }
  }
  const A = () => {
    console.log("a");
  }

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
          font-bold text-sm py-4 pl-9 justify-between 
          items-center hover:bg-discord_serverHover cursor-pointer'>
          QuocAnh(Official)
          <ChevronDownIcon className='h-5 mr-2' />
        </h2>
        <div className='text-dicord_channelsText h-full overflow-hidden'
        >
          <div className="h-[calc(100vh-36.8px-24px)] scrollbar
            scrollbar-thumb-discord_scrollbar scrollbar-track-discord_channels
            scrollbar-thumb-rounded-2xl scrollbar-w-1 
            overflow-hidden font-semibold cursor-pointer"
          >
            <div className='flex items-center p-2 mb-2'>
              <DocumentIcon className='h-4 mr-3' />
              <h4>Channels & Roles</h4>
              <MagnifyingGlassIcon className='h-6 ml-10 hover:text-white' />
            </div>
            <div className='flex items-center p-2 mb-2'>
              <DocumentIcon className='h-4 mr-3' />
              <h4 className=''>New Channel</h4>
              <PlusIcon className='h-6 ml-auto hover:text-white'
                onClick={handleAddChannel} />
            </div>
            <div className='flex flex-col space-y-2 px-2 mb-4'>
              {channel?.docs.map((doc) => (
                <Channel
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen bg-slate-700'>
        {/* <button onClick={handleAddChannel}>asdsadsad</button> */}
      </div>
    </div>
  </>
}

export default Home

