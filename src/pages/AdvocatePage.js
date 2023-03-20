import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const AdvocatePage = () => {

    const params = useParams()
    const username = params.username
    const [advocate, setAdvocate] = useState('')

    useEffect(() => {
      getData()
    }, [username]
    )

    let getData = async () => {
      // let response = await axios.get(`http://127.0.0.1:8000/advocates/${username}`, {
      // withCredentials: false,
      // })
    let response = await axios({
        method: 'get',
        url: `https://cados.up.railway.app/advocates/${username}`,
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
    
      console.log('RESPONSE:', response)
      setAdvocate(response.data.advocate)
    }
  
  return (
    <>    
      {advocate && (
        <div>
          <div className='advocate__preview__wrapper' >
            <img className='advocate__preview__image' src={advocate.profile_pic}/>             
            <br/>     
            <strong>{advocate.name}</strong>
            <a href={advocate.twitter} target="_blank">@{advocate.username}</a>
            <p>{advocate.bio}</p>
          </div>
        </div>
      )
      } 
      <h1>{advocate.username}</h1>
    </>
  )
}

export default AdvocatePage