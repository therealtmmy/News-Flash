//   FETCH API

fetch("https://apartment-booking.onrender.com/api/getAllHotel")
  .then((data) => {
    // console.log(data)
    return data.json();
  })
  .then((completedata) => {
    console.log(completedata);
    let data1 = "";
    completedata.data.map((values) => {
      data1 += ` <div class="PopularRow">
    <img class="PopularImg" src="/images/luxury-bedroom-hotel.jpg" alt="">
<div class="imgDetals">
    <p><b>${values.hotelName}</b></p>
    <p style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">${values.hotelAddress}</p>
    <p style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">${values.hotelDescription}</p>

<div class="PopularDetails">
    <i class="fa fa-bed"><span style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"> 4 Beds</span></i>
    <i class="fa fa-bath"><span style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"> 4 Baths</span></i> 
    <i class="fa fa-restroom"><span style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"> 5 Toilets</span></i>  
   </div>
</div>  
</div>`;
    });

    document.querySelector(".RowFlex").innerHTML = data1;
  });
