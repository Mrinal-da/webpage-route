
import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect( () =>{
        fetch('https://api.github.com/users/Mrinal-da')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    return (
        <div className='text-center mr-100 ml-100 mt-3 mb-3 bg-yellow-300 text-white p-4 text-3xl'>GitHub Followers : {data.followers}
        <img src={data.avatar_url} alt="GitHub Avatar" width={300}/>
        </div>
       
    )
}

export default Github
