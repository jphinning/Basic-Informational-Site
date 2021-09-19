//Json Objects

module.exports = {

    books: [
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
        { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
    ],
      
    authors: [
        { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
        { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
    ],
    
    options: {
        hostname: 'localhost',
        port: process.env.PORT || 8000,
        index: __dirname + "/../pub/index.html",
        about: __dirname + "/../pub/about.html",
        contact: __dirname + "/../pub/contact-me.html",
        notFound404: __dirname + "/../pub/404.html"
    }
     
}

