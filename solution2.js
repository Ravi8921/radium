//write an api which gives the missing numbe in an array of integer starting from anywhere..[33,34,35,37,38];36 is missing
app.get("/solution2",function (req,res) {

    let arr =[33,34,35,37,38]
    let len =arr.length
    let total=0;
    for (var i in arr){
        total+=arr[i];

    }
    let firstDigit=arr[0]
    let lastDigit=arr.pop()
    let consecutivesum= (len+1)*(firstDigit+lastDigit)/2
    let missingNumber+consecutivesum-total
    res.send({data:missingNumber});
});
app.listen(process.env.PORT||3000,function (){
    console.log("Express app running on port"+(process.env.PORT||3000));
    
});
______________________________________________________________________....

//Problem Statement 1 :
//Your player collection should be an array of player objects. A player object should have the following
//attributes:
/*{
"name": "manish",
"dob": "1/1/1995",
"gender": "male",
"city": "jalandhar",
"sports": [
"swimming"
],
"bookings": [
]
}*/


let players = []
router.post('/players', function (req, res) {
let newPlayer = req.body
let newPlayersName = newPlayer.name
let isNameRepeated = false
for(let i = 0; i < players.length; i++) {
if(players[i].name == newPlayersName) {
isNameRepeated = true;
break;
}}
//wrong value
if (isNameRepeated) {
//Player exists
res.send("This player was already added!")
} else {
//New entry
players.push(newPlayer)
res.send(players)
}



//Problem Statement 2 :
//Write an api that books a slot for a player with relevant details. The api looks like POST
/players/playerName/bookings/bookingId
/*Follow the following structure for a booking resource
{
“bookingNumber”: 1
“sportId": “”,
“centerId: “”,“type”: “private”,
“slot”: ‘16286598000000’,
“bookedOn”: ’31/08/2021',
“bookedFor”: ’01/09/2021’
}*/

let players = []
let booking=[]
router.post('//players/playerName/bookings/bookingId', function (req, res) {
let name= req.params.PlayersName
let booking=req.params.bookingId
for(let i = 0; i < players.length; i++) {
if(players[i].name == booking) {
isNameRepeated = true;
break;
}}
