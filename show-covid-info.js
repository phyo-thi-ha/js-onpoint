const fs = require("fs")

fs.readFile('covid-info.json' , (err, data) => {
    if(err) {
        console.log(err)        
    } else {
        const result = JSON.parse(data)
        console.log(result)
    }
})