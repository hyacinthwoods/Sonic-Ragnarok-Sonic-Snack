const express = require('expres')
const router =express.Router()

router.get('/users', (req, res) => {
    const userData =
    [
        {"id":1,
        "name": "Doctor Eggman",
        "username": "NotDocEggman",
        "email": "MrDocterEggman@gmail.com",
        "address": {
            "street": "egg carrier ave",
            "city": "rocky island",
            "zipcode": "18219",
            "phone": "121-364-2098",

        },

        
    }
    
    {"id":2,
    "name": "Metal Sonic",
    "username": "metalic sonic",
    "email": " hevaymetal@gmail.com",
    "address": {
        "street": "hedgehog rd",
        "city": "Sky Park Zone ",
        "zipcode": "12219",
        "phone": "131-164-2598",

         },

        }


    {"id":3,
    "name": "Black Doom",
    "username": "BlackCloud",
    "email": " BlackBlood@gmail.com",
    "address": {
        "street": "Canyon dr",
        "city": "Glyphic Canyon",
        "zipcode": "68629",
        "phone": "128-064-2108",

    }

    }    

]

    res.send(userData)

    
}



)
module.exports = router;