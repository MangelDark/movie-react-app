import React from 'react'
import {motion} from 'framer-motion'

const Movies = ({movie}) => {


  


  return (
    <>
    <motion.div layout>
        <h4>{movie.title}</h4>
        <img src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path} alt="" />
    </motion.div>
    </>
    
  )
}

export default Movies