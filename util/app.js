const loggerobj = require('./logger')
const helpobj = require('./util/helper')
const formatterObj = require('./validator/formatter')
const obj3 =require('lodash')
function mainfunction(){
console.log('this is a main function')
}
loggerobj.printname('my name is ravi kant')
helpobj.print('welcome to my application,I am part of functionUP team')
console.log('the url will help you: '+loggerobj.loggerendpoint)

helpobj.Date("08-11-2021")
helpobj.Month("november")
helpobj.batchinfo()
console.log(obj.first(["apple","orange","melon"],4))