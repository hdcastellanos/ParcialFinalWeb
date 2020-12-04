import { render } from "@testing-library/react";
import react from "react";  

function Serie(props) {
    

    return (
        
   <tr > 
       <th scope="row">{props.serie.id}</th>
       <td>{props.serie.name} </td>
       <td>{props.serie.channel} </td>
       <td>{props.serie.description} </td>
   </tr>
   
    );
  }
export default Serie;