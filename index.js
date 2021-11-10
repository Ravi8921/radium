const express = require('express');
const router =express.router();
router.get('/test-me',function(req,res){
  res.send('My first ever api!')
});
//1
router.get('/movies', function (req, res) 
{
    let movies =["halk","sorybanshi","bahubali"]
    res.send(movies)
});


//2
router.get('/movies/:movieindex',function(req,res){
    let movies =["halk","sorybanshi","bahubali"]
    let index=req.params.movieIndex
    let movieAtIndex=movies[index]
    res.send(movieAtIndex)
});


//3
router.get('/movies/:movieid',function(req,res)
{
    let movies =["halk","sorybanshi","bahubali"]
    let id =req.params.movieid
id>=movies.length?res.send("Enter valid index"):res.send(movies[id])

});

//3
router.get('/movies/:index',function(req,res){
    let value=req.params.index;
    console.log("the passindex is "+value);
    let arr=["soryavanshi","balganesha","kotafactory","lagan"];
    let a =arr.length;
    if(value<=a-1)
    {
        res.send(arr[value]);
    }
else{
    res.send("The index does not exists");
}
});

//4
router.get('/films',function(req,res)
{
let arr=[{id:1,name:"The Shining"},
    {id:2,name:"Incendices"},
    {id:3,name:"Rang de Basanti"},
    {id:4,name:"Finding Demo"}];
res.send(arr);
});

//5
router.get('/films/:filmid',function(req,res)
{
    let arr=[{id:1,name:"The Shining"},
    {id:2,name:"Incendices"},
    {id:3,name:"Rang de Basanti"},
    {id:4,name:"Finding Demo"}];
    let len=arr.length;
    let b=0;
    let a =Number(req.params.filmid);
    for(let i=0;i<len;i++)
    {
        if(arr[i].id===a)
        {
            res.send(arr[i]);
            b=1;
            break;
        }
    }
    if(b===0)
    {
        res.send("the movie doesnot exist with this id="+a);
    }
});
module.exports =router;






   