//write an apiwhich gives the missing numberinan array of integer startingfrom 1[1,2,3,4,5,6]:4 is missing
app.get("/solution1",function(req,res) {
    
})
let arr=[1,2,3,4,5,6,7]
let total=0
for (var i in arrr)
{
    total+=arr[i];
}
let lastDigit=arr.pop()
let consecutivesum=lastDigit*(lastDigit+1)/2
let missingNumbe=consecutivesum-total
res.send({data:missingNumber});
});