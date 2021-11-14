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