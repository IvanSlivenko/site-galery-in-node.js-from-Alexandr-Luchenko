const fs = require('fs');

// читаємо папку 
const images = fs.readdirSync('./images');

// записуємо назви файлів в JSON файл
fs.writeFile('images.json',JSON.stringify(images),'utf8', function(err){
    console.log(err);
});


