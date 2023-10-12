function HouseKeeper (name,age,hasWorkPermit,languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function(){
        console.log("cleaning in progress")
    }
}

var houseKeeper1 = new HouseKeeper("jane", 19, true, ["english","chinese"]);
var houseKeeper2 = new HouseKeeper("jan", 20, false, ["english","chinese"]);

console.log(houseKeeper1)
console.log(houseKeeper2)