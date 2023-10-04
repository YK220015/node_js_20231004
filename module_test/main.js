const itemModule = require('./items')
const controlModule = require('./control')

var items = itemModule.items
console.log(items)
controlModule.show(items)