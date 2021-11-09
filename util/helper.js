function printDate(){
    console.log('today is 7th november 2021')
}
function printMonth(){
    console.log('the current month is November')
}
function printBatchinfo(){
    console.log('the batch is:Radium, the week number is :3')
}
module.exports.getDate = printDate
module.exports.getMonth = printMonth
module.exports.getBatchinfo = printBatchinfo