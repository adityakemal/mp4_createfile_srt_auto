var fs = require('fs')
var path = require('path')

var path = __dirname
fs.readdir(path,(err, items)=> {
  loop:
    for (i of items) {
      if (!i.includes(".mp4")) {
        continue loop
      }
      // console.log(i)
      var toSrt = i.replace(/.mp4/g, ".srt")
      var data = ""
      fs.writeFile(toSrt, data, (err) => {
        err ? console.log(err) : console.log(`succes file di bikin ${toSrt}`);
      })
  }
});
