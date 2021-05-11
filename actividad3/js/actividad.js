let i = 0
let tabla =`<table class="table">
            
<tbody>
  <tr>
    <th scope="row"></th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
</tbody>
</table> `;
while(i <= 8){

    document.getElementById("tabla").innerHTML += tabla; 
   
    i++; 

}