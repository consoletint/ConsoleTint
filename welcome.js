var colors = require('./index.js')

console.log(colors.red('Thank'), colors.yellow('you'), colors.green('for'), colors.blue('using'), colors.purple(colors.underline('consoletint')))
console.log(colors.green('If you need any help, please open an issue on the github repository here: ' + colors.underline('https://github.com/consoletint/consoletint')))
console.log(colors.yellow('Enjoy!'))