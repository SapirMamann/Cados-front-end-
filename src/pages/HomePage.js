import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const HomePage = () => {

    const [advocates, setAdvocates] = useState([])
    const [total, setTotal] = useState(0)
    const [pagination, setPagination] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    let getData = async (query="") => {
        let response = await axios.get(`https://cados.up.railway.app/advocates?query=${query}`)
        console.log('RESPONSE', response)
        setAdvocates(response.data.advocates)
        setTotal(response.data.total)
        setPagination(response.data.pagination)
    }

    let searchData = (e) => {
        e.preventDefault()
        let query = e.target.query.value
        getData(query)
    }

  return (
    <div className='main__container'>
        <h1>Search {total} developers</h1>

        <div>
            <form onSubmit={searchData} id="search_form">
                <input type="text" name="query" placeholder="Search advocates.."/>
                <input type="Submit" value="Search"/>
            </form>
        </div>

        <div className='advocate__list'>
            {advocates.map((advocate, index) => (
                <div className='advocate__preview__wrapper' key={index}>
                    <Link to={`/advocates/${advocate.username}`}>
                        <img className='advocate__preview__image' src={advocate.profile_pic}/>
                    </Link>               
                    <br/>     
                    <strong>{advocate.name}</strong>
                    <a href={advocate.twitter}>@{advocate.username}</a>
                    <p>{advocate.bio}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomePage