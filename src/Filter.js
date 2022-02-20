import React, { useEffect } from 'react'

const Filter = ({popular,setFiltered,activeGenre,setActionGenre}) => {

    useEffect (()=>{
        if (activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie)=> movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
    },[activeGenre])

  return (
    <div className='filter-container'>
        <button 
        className={activeGenre === 0 ? "active" : ""}
        onClick={()=>setActionGenre(0)}>All</button>
        <button 
        className={activeGenre === 28 ? "active" : ""}
        onClick={()=>setActionGenre(28)}>Action</button>
        <button 
        className={activeGenre === 35 ? "active" : ""}
        onClick={()=>setActionGenre(35)}>Comedy</button>
    </div>
  )
}

export default Filter