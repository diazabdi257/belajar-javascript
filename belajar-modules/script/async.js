const token = ~~[Math.random() * 123456789]
const dataPictures = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]

function login(username, callback) {
    console.log("Memproses...Validasi data..!")
    setTimeout(() => {
        callback ({token, username})
    }, 2000);
    
}

function getUser(token,callback) {
    if (token)
        console.log("Memproses..API KEY")
        setTimeout(() => {
            callback({apiKey: "xkey123"})
        }, 1500);
        
}

function getPictures(apiKey, callback) {
    if(apiKey) 
        console.log("Memproses...DATA PICTURES")
        setTimeout(() => {
            callback({dataPictures})
        }, 1500);
}

login("diazabdi2003", function (response) {
    console.log("PROSES BERHASIL")
    console.log("Data =", response);
    // const{token} = response
    getUser(token, function (response) {
        console.log("PROSES API KEY BERHASIL");
        console.log("API_KEY= ",response)
        // const apiKey = response
        getPictures(response, function (response) {
           console.log("PROSES BERHASIL")
           const pict = response.dataPictures
           console.log("Data foto = ", pict) 
        });
        
    })

    

})




