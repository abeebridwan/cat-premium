var catData = [ {
    catname : "Cute Cat",
    src: "https://images.unsplash.com/photo-1586042091284-bd35c8c1d917?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    clickcount: 0,
    nicknames: [{name: "cute"}, {name: "curious"}]
  },  
  {
    catname : "Shy Cat",
    src: "https://www.our-happy-cat.com/images/xshy-hiding-cat.jpg.pagespeed.ic.aGWMLHO7sn.jpg",
    clickcount: 0,
    nicknames: [{name: "young"}, {name: "naive"}, {name: "inexperience"}]
  },
  {
    catname : "Mamami Cat",
    src: "https://funcatpictures.com/wp-content/uploads/2013/11/funny-cat-pics-iq-result-came-back-277x300.jpg",
    clickcount: 0,
    nicknames: [{name: "funny"}]
  },
  {
    catname : "Trump Cat",
    src: "https://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg",
    clickcount: 0,
    nicknames: [{name: "swag"}, {name: "attention"}]
  },
  {
    catname : "Obama Cat",
    src: "http://media.breitbart.com/media/2016/02/obama-cat-scratch-post-kickstarter-640x480.jpg",
    clickcount: 0,
    nicknames: [{name: "cool"}]
  } 
];
var Cat = function(val){
this.catName = ko.observable(val.catname);
this.imgSrc = ko.observable(val.src);
this.clickCount = ko.observable(val.clickcount);     

this.catLevel = ko.computed(function() {        
var catcurLevel = "Adult";  
if(this.clickCount() < 2){
  catcurLevel = "Infant";            
}else if(this.clickCount() < 4){                 
  catcurLevel = "Curious Infant";     
}else if(this.clickCount() < 5){                 
  catcurLevel = "Matured Infant";     
}else if(this.clickCount() < 7){                 
  catcurLevel = "Teen";  
}else if(this.clickCount() < 8){                 
  catcurLevel = "Adult";             
}else{}
return catcurLevel;      
}, this);     

this.nickNames = ko.observableArray(val.nicknames);  

};

var viewModel = function(){
var self = this;
this.catBunch = ko.observableArray([]);  
catData.forEach(function(item){
self.catBunch.push( new Cat(item) );    
});

this.currentCat = ko.observable(this.catBunch()[0]);

this.incrementCounter = function(){
this.clickCount( this.clickCount()+1);           
};
this.displayCat = function(place){   
self.currentCat(place)
};

};

ko.applyBindings(new viewModel())
