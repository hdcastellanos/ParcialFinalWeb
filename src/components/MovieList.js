import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import {FormattedMessage} from "react-intl"
import Movie from "./Movie.js"
import Graph from "./Graph.js"




function MovieList(props) {
  const initialMovies = [];
  const [Movies, setMovies] = useState(initialMovies);


  useEffect(() => {
    
    if (props.lang === "en"){
      fetch('https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json')
        .then(response => response.json())
        .then(data => setMovies(data))
      }
      else{
        fetch('https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json')
        .then(response => response.json())
        .then(data => setMovies(data))
        
      }
      
  }, [])
    
   return (
    
    <div>
  <table className="table">
    <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col"><FormattedMessage id="Name"/></th>
      <th scope="col"><FormattedMessage id="Directed"/></th>
      <th scope="col"><FormattedMessage id="Country"/></th>
      <th scope="col"><FormattedMessage id="Budget"/></th>
      <th scope="col"><FormattedMessage id="Release"/></th>
      <th scope="col"><FormattedMessage id="Views"/></th>
    </tr>
    </thead>
    <tbody>
     {Movies.map((e,i) => <Movie key={i} movie={e} lang={props.lang}/>)}
    </tbody>
  </table>
  <Graph data={Movies}/>
  
   </div>
  )


  }
export default MovieList;

