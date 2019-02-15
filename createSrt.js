var fs = require('fs')

var path = __dirname
fs.readdir(path, (err, items) => {
  var h = []
  loop:
    for (i of items) {
      if (!i.includes(".mp4")) {
        continue loop
      }
      var toSrt = i.replace(/.mp4/g, ".srt")
      var data = ""
      h.push(toSrt);

      fs.writeFile(toSrt, data, (err) => {
        err ? console.log(err) : "";
      })
    }
    console.table(h);
    h.length === 0 ? console.log(`no mp4 file to create`) : console.log(`${h.length} has created`);
});
