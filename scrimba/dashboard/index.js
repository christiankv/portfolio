

fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `by: ${data.user.name}`
    }) .catch(err => {
        document.body.style.background = "lightblue"
    })

    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        console.log(res.status)
        return res.json()
    })
        .then(data => {
            document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small}/>
            <span>${data.name}</span>
            `
            console.log(data)
        document.getElementById("crypto").innerHTML += `
        <p> 🎯: ${data.market_data.current_price.nok}</p>
        <p> 👆: ${data.market_data.high_24h.nok}</p>
        <p> 👇: ${data.market_data.low_24h.nok}</p>`})
        .catch(err => console.log(err))

function getcurrenttime(){
const date = new Date()
document.querySelector(".time").textContent = date.toLocaleTimeString("no", {timeStyle: "short"})

}

setInterval(getcurrenttime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        return res.json()
    })
    .then(data => {

        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`     
        document.getElementById("weather").innerHTML = `
        <img src= "${iconUrl}"/>
 
        <h2>${Math.round(data.main.temp)}</h2>
        <p class="location">${data.name}</p>
`
    
        console.log(data)
    })
    .catch(err => console.error(err))
});



