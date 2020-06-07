let x = ""
let url = ""
let this_link = `https://data.cityofchicago.org/resource/ygr5-vcbg.json?tow_date=`

$(() => {    
    $('form').on('submit',(event)=>{
       
        x = $('#search-box').val();
        url = this_link + x
        console.log(url)
        $("form").trigger("reset");
        event.preventDefault();
        //Plate
        $.ajax({   
            url: url,
            type: "GET"
                
           }).then(data =>{
            for (i = 0; i<data.length; i++) {
                console.log(data[i].plate);
            $(".plate").append(data[i].plate + "\n");
            }
            let eachPlate = (data[i].plate)
      
              if(eachPlate.length < 9) {
                  $('<li>').prepend(eachPlate).addClass("addedPlate")
                  console.log($('.addedPlate') + "**************")
              }
             })
      //Make
        $.ajax({   
            url: this_link + x,
            type: "GET"
              
         }).then(data =>{
            for (i = 0; i<data.length; i++) {
              console.log(data[i].make);
          $(".make").append(data[i].make + "\n");
          
            }
            let eachMake = (data[i].make)
      
            if(eachMake.length < 9) {
                $('<li>').prepend(eachMake).addClass("addedMake")
                console.log($('.addedMake') + "**************")
          }
        })
        
       //Style
       $.ajax({   
          url: this_link + x,
          type: "GET"
          
      }).then(data =>{
          for (i = 0; i<data.length; i++) {
              console.log(data[i].style);
          $(".style").append(data[i].style + "\n");
      
          }
          let eachStyle = (data[i].style)
      
          if(eachStyle.length < 9) {
              $('<li>').prepend(eachModel).addClass("addedStyle")
              console.log($('.addedStyle') + "**************")
          }
      }) 

       })
       

});