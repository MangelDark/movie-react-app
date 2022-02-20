
import './App.css';
import React,{useState,useEffect} from 'react';

import Movies from  './Movies';
import Filter from './Filter';
import {motion} from 'framer-motion'
function App() {

  const [popular,setPopular] = useState([]);
  const [filtered,setFiltered] = useState([]);
  const [actionGenre,setActionGenre] =  useState(0);

  useEffect(()=>{

      fetchData();

  },[])

  const fetchData = async  () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=90612af2c81a425c10690e17ba32d0ce');
     const movies =  await data.json();  
     setPopular(movies.results);
     setFiltered(movies.results);
  }

  console.log(popular);

  return (
    <div className="App">
      <Filter 
      popular={popular} 
      setFiltered={setFiltered} 
      activeGenre={actionGenre} 
      setActionGenre={setActionGenre}
      >
      </Filter>
        <motion.div layout className='popular-movie'>
      {
        filtered.map(movie => <Movies key={movie.id}  movie={movie}></Movies>)
      }
      
        </motion.div>
  
    </div>
  );
}

export default App;
