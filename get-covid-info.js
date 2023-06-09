const fs = require("fs")
const https = require("https")
https.get("https://covid-api.com/api/reports/total?date=2020-03-14&iso=USA", res => {
    let data = ''
    res.on('data' , chunk => {
        data += chunk
    })

    res.on('end', () => {
        fs.writeFile('covid-info.json' , data , () => {
            console.log("Save to file : Complete")
        })
    })
})
