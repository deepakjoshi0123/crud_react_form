import React, { useEffect } from 'react';
import  '../RenderData/renderdata.css'
import { Button  } from "reactstrap";

const input = ( props ) => {
   const formdata = props.showdata.map((data) => {
  
       return(
        <tr>
          <td>{data.fullname}</td>
          <td>{data.message}</td>
          <td>{data.zipcode}</td>
          <td>{data.country}</td>
          <td>{data.email}</td>
          <td>{data.gender}</td>
          {data.check===true?<td>checked</td>:<tb>unchecked</tb>} 
          <td><Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=> props.edit(data.id)}>EDIT</Button></td> 
          <td><Button onClick={()=> props.del(data.id)} >DELETE</Button></td>

          {console.log(data.check)}
        </tr>
       )
   })
   return(
       <div>
        <table id="customers">
        <tr>
          <th>name</th>
          <th>message</th>
          <th>zipcode</th>
          <th>country</th>
          <th>email</th>
          <th>gender</th>
          <th>check status </th>
          <th>EDIT</th>
          <th>DELETE </th>
        </tr> 
        {formdata}    
        </table>
       </div>
   )

};

export default input;