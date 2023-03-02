import { HashtagIcon } from '@heroicons/react/24/solid'
import React from 'react'


function Channel(props: any) {
  return (
    <div className='font-medium flex items-center
     hover:bg-discord_serverHover hover:text-white
     cursor-pointer p-2 rounded-md'
    >
      <HashtagIcon className='h-5 mr-2' />
      {props.channelName}
    </div>
  )
}

export default Channel
