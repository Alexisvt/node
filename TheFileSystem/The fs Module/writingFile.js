const fs = require('fs');
const path = require('path');

const data = `El gran amor de Jesus
El señor nos ama con tal amor que él mismo se ofrecio por nosotros`;

fs.writeFile(path.join(__dirname, 'fileCreated.txt'), data, err => {
  if (err) {
    console.error(err);
  }
});
