
//firstexample
function food (name,nutrient,price,taste){
    this.name=name;
    this.nutrient= nutrient;
    this.price=price;
    this.taste= taste;
    this.expensive=function(affordability){
        return this.name + '' + affordability;
    }
}
let food1=new food('pizza','calories',25000 ,'sweet');
let food2=new food('meat','oils' ,7000 ,'extrasweet');
let food3=new food('cassava', 'carbohydrates' ,5000 ,'sour');
console.log(food1.expensive('not easily affodable'));
console.log(food3.expensive('is the mostly common in villages'));

//secondexample
function fruit (name ,taste ,typeee ,price){
    this.name=name;
    this.taste=taste;
    this.type=typeee;
    this.price=price;
    this.create=function(vitamins){
        return this.taste + '' + vitamins;
    }
}
let fruit1=new fruit('mangoes' ,'sweet' ,'homeGrown',2000);
let fruit2=new fruit('pineapple','sour','supermarket',4000);
let fruit3=new fruit('apple','sweeter','supermarket',1500);
console.log(fruit2.create('Has vitamins'));
console.log(fruit1.create('Has more VItamins'));
console.log(fruit3.create('is liked more by ladies'));

//thirdexample
function family (name, character,age,personality){
    this.name=name;
    this.character=character;
    this.personality=personality;
    this.caring=function(Needy){
        return this.name + '' + 'Is Needy';
    }
}
let family1=new family('Miriam','humble','introvert');
console.log(family1.caring("needs attention"));
let family2=new family('Leah','Approachable','extrovert');

//fourthexample

function cloth(name,color ,texture,material){
    this.name=name;
    this.color=color;
    this.texture=texture;
    this.material=material;
    this.price=function(costly){
        return this.name + '' + costly;
    }
}
let cloth1=new cloth('shirt','white','smooth','cottonMade');
let cloth2=new cloth('blouse','yellow','tender','poly');
let cloth3=new cloth('trouser','black','smooth','kaaki');
console.log(cloth1.price('is the nicest'));
console.log(cloth2.price('is the most worn by ladies'));

//fifthexample

function district(name,size,typeee,health){
    this.name=name;
    this.size=size;
    this.typeee=typeee;
    this.health=health;
    this.land=function(bigger){
        return this.name + '' + bigger;
    }
}
let district1=new district('kampala',400000,'city','excellent');
let district2=new district('Kyenjojo',150000,'municipality','good');
let district3=new district('Bushenyi',300000,'municipality','better');
console.log(district1.land('is the biggest of all'));
console.log(district1.land('is the median in size'));

//sixthexample

function furniture(name,shape,price,seaterCapacity){
    this.name=name;
    this.shape=shape;
    this.price=price;
    this.seaterCapacity=seaterCapacity;
    this.quality=function(best){
        return this.name + "" + best;
    }
}
let furniture1=new furniture('table','round',700000,6);
let furniture2=new furniture('bench','rectangular',150000,7);
let furniture3=new furniture('sofaset','L-shaped',800000,10);
console.log(furniture3.quality('Is the best type of furniture'));
console.log(furniture2.quality('accomodates more people'))

//seventhexample

function cloud(name, color,production,){
    this.name=name;
    this.color=color;
    this.production=production;
    this.much=function(heavy){
        return this.name + '' + heavy;
    }
}
let cloud1=new cloud('cumulus','blue','muchRain');
let cloud2=new cloud('stratus','brown','lessRain');
let cloud3=new cloud('cirrus','darkBlue','heavyRain');
let cloud4=new cloud('cirrostratus','darkbrown','lesserRain');
console.log(cloud1.much('produces heavy rain'));
console.log(cloud4.much('producess lesser rain compared to others'));
