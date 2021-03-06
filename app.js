var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

var campgrounds = [
{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
{name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
{name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
{name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
{name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
{name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
{name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
{name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
];


app.get("/",function(req,res){
	res.render("landing");
});

app.get("/atm",function(req,res){
	res.render("landing");
});

app.get('/apple-app-site-association', function(req, res) {
	res.set('Content-Type', 'application/json');
  res.status(200).sendFile(path.join(__dirname + '/apple-app-site-association'));
});

// var aasa = fs.readFileSync(__dirname + '/static/apple-app-site-association');
// app.get('/apple-app-site-association', function(req, res, next) {
//      res.set('Content-Type', 'application/json');
//      res.status(200).send(aasa);
// });

app.get("/campgrounds",function(req,res){

	res.render("campgrounds",{campgrounds:campgrounds});

});

app.post("/campgrounds",function(req,res){
	var name = req.body.name;
	var image= req.body.imageUrl;
	var newCampground = {name : name , image : image};
	campgrounds.push(newCampground);
	res.redirect("campgrounds");
});

app.get("/campgrounds/new",function(req,res){
	res.render("new");
});

app.listen(process.env.PORT || 3000,function(){
	console.log("server is listening");
});
