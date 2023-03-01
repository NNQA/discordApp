import React from 'react'

function ServerIcon(props: any) {
    return (
        <div className='server-default'>
            <img
                src={props.image}
                alt="ImageIcon Server"
                className='h-5'
            />
        </div>
    )
}

export default ServerIcon
