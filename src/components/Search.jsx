import React, { useEffect, useState } from 'react'
import Sidebar from "./Sidebar";
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/rapidapi';
import SearchCard from './SearchCard';
import Loading from '../loader/Loading';
import { useAuth } from '../context/AuthProvider';

const Search = () => {
  const[result, setResult] = useState()
  const {searchQuery} = useParams();
  
  useEffect(()=>{
    fetchSearchResults()
  },[searchQuery])

  const fetchSearchResults = ()=>{
    fetchData(`search/?q=${searchQuery}`).then(({contents})=>{
      console.log(contents);
      setResult(contents);
    })
  }

  const {loading} = useAuth()
  return (
      <div className='mt-16 flex flex-row h-[100%]'>
        {loading && <Loading/>}
        <Sidebar/>
        <div className='overflow-y-scroll px-12 py-6 h-[100%] w-[100%] overflow-x-hidden'>
          <div className='flex flex-col gap-4'>
            {result?.map((item, index)=>{
              if(item?.type !== "video") return null;
              return <SearchCard key={index} video={item?.video}/>
            })}
          </div>
        </div>
      </div>
  )
}

export default Search