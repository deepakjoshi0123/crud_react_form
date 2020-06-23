import React from 'react';
import  '../RenderData/renderdata.css'

const input = ( props ) => {
   const formdata = props.showdata.map((data) => {
     console.log(data)
       return(
         
        <tr>
          <td>{data.fullName}</td>
          <td>{data.message}</td>
          <td>{data.zipCode}</td>
          <td>{data.country}</td>
          <td>{data.email}</td>
          <td>{data.gender}</td>
          <td>{data.check}</td>  
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
        </tr>
        {formdata}    
        </table>
       </div>
   )

};

export default input;