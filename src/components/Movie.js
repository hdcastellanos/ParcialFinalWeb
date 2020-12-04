import { render } from "@testing-library/react";
import react from "react";  
import {FormattedDate,FormattedNumber,FormattedPlural,FormattedMessage} from "react-intl"
import MovieDetail from "./MovieDetail.js"
function Movie(props) {
    
function detail(){
   
render (
    <MovieDetail movie={props.movie}/>
)
  
}

    return (
        
   <tr onClick={() => detail()}> 
       <th scope="row">{props.movie.id}</th>
       <td>{props.movie.name} </td>
       <td>{props.movie.directedBy} </td>
       <td>{props.movie.country} </td>
       <td><FormattedPlural
            value={props.movie.budget}
            one={<FormattedMessage id="Million"/>}
            other={<FormattedMessage id="Millions"/>}
            /> </td>
       <td>
           <FormattedDate
            value={ new Date (props.movie.releaseDate)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long'
          /> </td>
       <td><FormattedNumber 
            value={props.movie.views}
            /> </td>
   </tr>
   
    );
  }
export default Movie;