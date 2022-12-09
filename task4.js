var generator = require('generate-password');

var password = generator.generate({
    length:10,
    numbers:true,
    uppercase:false,
    lowercase:false
    
})

console.log(password)