//City and status
let cityStatus = {
    madrid : {temperature:"20c",Precipitation:0,status:"Mostly cloudy"},
    tehran : {temperature:"30c",Precipitation:10,status:"cloudy"},
    newyork : {temperature:"10c",Precipitation:20,status:"Rainy"},
    mashhad :{temperature:"15c",Precipitation:5,status:"Snowy"}
}
//get search button 
let searchBtn = document.getElementById('search-button')
//get search input
let searchInput = document.getElementById("search-input")
//city content div
let cityContetdiv = document.getElementById("city-contet")
//temp-span
let tempSpan = document.getElementById("temp-span")
//Precipitation-span
let precipitationSpan = document.getElementById("Precipitation-span")
//status-span
let statusSpan = document.getElementById("status-span")
//get content area
let mainTag = document.getElementById("main")
//add eventlister to seatch btn in onclick functoin
searchBtn.addEventListener("click",function(){
    //empty span fot next object
    tempSpan.innerHTML=""
    //empty span fot next object
    precipitationSpan.innerHTML=""
    //empty span fot next object
    statusSpan.innerHTML = ""
    //User Selected City
    let userCityValue = cityStatus[searchInput.value]
    //check userCityValue is true
    if(userCityValue){
    //remove city contet invisble class
    cityContetdiv.classList.remove('invisible')
    //add temp to city status
    tempSpan.innerHTML+="Temp = "+userCityValue.temperature
    //add Precipitation to scity tatus
    precipitationSpan.innerHTML+="Precipitation = "+userCityValue.Precipitation
    //add status to city status
    statusSpan.innerHTML+="Status = "+userCityValue.status
    }
    //userCityValue is false
    else{
        //get image elemnt
        let cityImg = document.getElementById("city-img")
        //hide elemnt
        cityImg.classList.add('invisible')
        //show massage
        tempSpan.innerHTML+="Your city is not vaild"
    }
})
