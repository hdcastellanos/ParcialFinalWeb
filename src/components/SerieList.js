import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import {FormattedMessage} from "react-intl"
import Serie from "./Serie.js"
import Graph from "./Graph.js"




function SerieList(props) {
  const initialSeries = [];
  const [Series, setSeries] = useState(initialSeries);


  useEffect(() => {
    
    if (props.lang === "en"){
      fetch('https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json')
        .then(response => response.json())
        .then(data => setSeries(data))
      }
      else{
        fetch('https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json')
        .then(response => response.json())
        .then(data => setSeries(data))
        
      }
      
  }, [])
    
   return (
    
    <div>
  <table className="table">
    <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col"><FormattedMessage id="Name"/></th>
      <th scope="col"><FormattedMessage id="Description"/></th>
      <th scope="col"><FormattedMessage id="Channel"/></th>
    </tr>
    </thead>
    <tbody>
     {Series.map((e,i) => <Serie key={i} serie={e} lang={props.lang}/>)}
    </tbody>
  </table>
  <Graph data={Series}/>
  
   </div>
  )


  }
export default SerieList;

