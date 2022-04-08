let left=document.querySelector(".left");
let right=document.querySelector(".right")

async function getweather(){
    try{

      
        let name=document.querySelector(".input").value
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=efced065c81cf044eee3a660ac3205de&units=metric`)
        let data=await res.json()
        
      console.log(data)


        check(data)
      
   
    }
    catch(err){
      console.log("err:",err)
    }







}

function check(data){


    left.innerHTML=null;

    right.innerHTML=null;

    let name=document.createElement("p")

    name.setAttribute("class","name");

    name.innerHTML=data.name;
    

    let weather=document.createElement("p")

    weather.innerHTML=data.weather[0].main;

    let temp=document.createElement("p");

    temp.innerHTML=`Temperature:-${data.main.temp}&#8451`;

    let max_temp=document.createElement("p");

    max_temp.innerHTML=`Max_Temp:-${data.main.temp_max}&#8451;`;

    let min_temp=document.createElement("p");

    min_temp.innerHTML=`Min_Temp:-${data.main.temp_min}&#8451;`;

    let humidity=document.createElement("p");

    humidity.innerHTML=`Humidity:-${data.main.humidity}`

    let pressure=document.createElement("p");

    pressure.innerHTML=`Pressure:-${data.main.pressure}`

    let img=document.createElement("img");

     img.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    img.style.backgroundColor="rgb(128, 170, 159)"

    // let sun=document.querySelector(".sun").innerHTML=img;

    // sun.append(img)

    

    left.append(img,name,weather,temp,max_temp,min_temp,humidity,pressure)

   
    
    let map=document.createElement("iframe");

    map.setAttribute("class","iframe")

    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`


      

    right.append(map);
    
   
}




