let urlcloudy= "https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=08f04eaa679dabc346661fcf5f0e3e52"
let container_card_wether=document.querySelector("#container-card-wether")
let div =document.createElement("div")
let name_city = document.createElement("p")
let temperature= document.createElement("p")
let Humidity_degree = document.createElement("p")
let longitude_lines = document.createElement("p")
let Latitude_lines = document.createElement("p")


div.classList="card-body m-5 w-50"
name_city.classList="card-title "
temperature.classList="card-text"


div.appendChild(name_city)
div.appendChild(temperature)
div.appendChild(Humidity_degree)
div.appendChild(longitude_lines)
div.appendChild(Latitude_lines)
container_card_wether.appendChild(div)



fetch(urlcloudy)
.then(res=>res.json())
.then(data=>{

    name_city.textContent= `City: ${data.name}`
    temperature.textContent= `temp: ${data.main.temp}`
    Humidity_degree.textContent=`Humidity:${data.main.humidity}`
    longitude_lines.textContent= `log: ${data.coord.lon}`
    Latitude_lines.textContent= `lat: ${data.coord.lat}`



    
})






///////////////////////////////////////////////////////////////////////////////////////////

let urlpryer="https://api.aladhan.com/v1/timingsByAddress/19-09-2024?address=Riyadh,SA&method=4"
let container_card=document.querySelector("#container-card-prayer")
let div_pr=document.createElement("p")
let date_higri=document.createElement("p")
let date_g=document.createElement("p")
let day=document.createElement("p")
let prayer_time = document.createElement("p")
let prayer_time2 = document.createElement("p")
let prayer_time3 = document.createElement("p")
let prayer_time4 = document.createElement("p")
let prayer_time5 = document.createElement("p")


div_pr.appendChild(prayer_time)
div_pr.appendChild(prayer_time2)
div_pr.appendChild(prayer_time3)
div_pr.appendChild(prayer_time4)
div_pr.appendChild(prayer_time5)

div_pr.appendChild(date_higri)
div_pr.appendChild(date_g)
div_pr.appendChild(day)
container_card.appendChild(div_pr)
fetch(urlpryer)
.then(res=>res.json())
.then(prayer=>{console.log(prayer.data.timings)

    prayer_time.textContent=`Fajar:${prayer.data.timings.Fajr}`
    prayer_time2.textContent=`Dhuhr:${prayer.data.timings.Dhuhr}`
    prayer_time3.textContent=`Asr:${prayer.data.timings.Asr}`
    prayer_time4.textContent=`Magrib:${prayer.data.timings.Maghrib}`
    prayer_time5.textContent=`Isha:${prayer.data.timings.Isha}`

    date_higri.textContent=`higri-date:${prayer.data.date.hijri.date}`
    date_g.textContent=`gregorian-date:${prayer.data.date.gregorian.date}`
    day.textContent=`Day:${prayer.data.date.gregorian.weekday.en}`



    // prayer_time.textContent= `${prayer.data}`
    // prayer.data.map(item=>{
    //     prayer_time.textContent=item.timings

    // })
// prayer.data.timings.map(item=>{
    
// })

})