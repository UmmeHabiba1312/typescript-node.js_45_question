// Author Name : Umm e Habiba
//Date : 7/1/2024
//This is the solution of 45 assignment
//task # 1 
//It is done
//task # 2
let personName = "eric";
console.log(`hello ${personName}, would you like to learn some python today?`);
//task # 3
let personName1 = "iqra";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
console.log(personName1.replace(/\b\w/g, n => n.toUpperCase()));
// task # 4
console.log("HM once said,\"honesty is the best policy\"");
let quote = "safai nisf emaan hey";
let author = "HM";
console.log(`${author} Once said, "${quote}"`);
//task # 5
let person_name = "HMS";
let quote1 = "behtareen rizq apney hath ki kamai hey";
let message = `${person_name} once said, "${quote1}"`;
console.log(message);
//task # 6
let person_name1 = "\n\t  umm e habiba\t\n";
//original
console.log(person_name1);
//stripped
console.log(person_name1.trim());
//task # 7 & 8
console.log(4 + 4);
console.log(12 - 4);
console.log(16 / 2);
console.log(4 * 2);
// task # 9
let favouritNumber = 8;
let messag = "my favourite number is:";
console.log(messag, favouritNumber);
// task # 10 is solve on the top of the list
// task # 11  
let friendsName = ["misbah", "muskan", "laiba"];
friendsName.forEach(name => console.log(name));
//task # 12
let friendsNames = ["misbah", "muskan", "laiba"];
//for each ka matlab har value ko aik aik kr key print krwana
friendsNames.forEach((items) => console.log(`hi ${items}, how are you?`));
//OR
let message1 = "how are you?";
friendsName.map((items) => console.log(`${items}, ${message1}`));
//task # 13
let myOwnArray = ["civic", "coroola", "mercedes"];
myOwnArray.map((items) => console.log(`i would like to own a ${items}`));
// task # 14
let myGuest = ["amna", "iqra", "manzoor"];
myGuest.map((items) => console.log(`dear ${items} , you are invited to dinner`));
//task # 15
let myGuest1 = ["amna", "iqra", "manzoor"];
let canCome = myGuest1[0];
console.log(canCome, "can not come");
let newGuest = myGuest1.splice(0, 1, "rafique");
myGuest1.map((guests) => console.log(` hello ${guests}, you are invited to dinner tonight`));
//task # 16
let myGuest2 = ["bhai", "amna", "iqra", "manzoor"];
let canCome2 = myGuest2[0];
console.log(canCome2, "can not come");
let newGuest1 = myGuest2.splice(0, 1, "rafique");
myGuest2.map((guests) => console.log(` hello ${guests}, you are invited to dinner tonight`));
console.log("good news! for every one you can add your friends with me ");
myGuest2.unshift("abbass chacho");
myGuest2.push("aqsa");
//math.floor value ko round off krta hey
let miidleindxe = Math.floor(myGuest.length / 2);
//array key beech mein se kisi element ko remove or add krwana
myGuest2.splice(miidleindxe, 0, "aymen");
console.log("new guests list");
myGuest2.map((items) => console.log(`dear ${items}, you are invited to dinner!`));
//task # 17
console.log("sorry to my all guests but i have just two seats for my guests");
while (myGuest2.length > 2) {
    let remove = myGuest2.pop();
    console.log(`sorry ${remove}, you cant invited to dinner`);
}
//remaining two
myGuest2.map((tworemain) => console.log(`${tworemain}, you are luckly invited to dinner`));
//remove last to elements
myGuest2.pop();
myGuest2.pop();
console.log("is it empty", myGuest2);
//task # 18
let favPlaces = ["saudia arabia", "pakistan", "turkey", "canada", "dubai"];
//original order
console.log("original order", favPlaces);
// alphabetical oder
//sort is use for albhabetical order by making copy of array
console.log("copy of alphabatec", [...favPlaces.sort()]);
console.log(favPlaces);
// //again check original order
console.log("again check original order", favPlaces);
//reverse the orriginal array by making copy
console.log("copy of reverse array", [...favPlaces.reverse()]);
console.log("original order", favPlaces);
//change in original array order
console.log("original alphabates", favPlaces.sort());
console.log("reverse original", favPlaces.reverse());
console.log("back to original", favPlaces.reverse());
//task # 19
let myGuest3 = ["bhai", "amna", "iqra", "manzoor"];
let totalLength = myGuest3.length;
console.log(`i am inviting ${totalLength} people`);
//task # 20
// let mountains:string[]=["k2","mounteverest","himaliya"];
// let rivers:string[]=["sindh","satlaj","ravi","chanab"];
let countries = ["pakistan", "saudia arabia", "turkey", "dubai", "phalestin"];
// let cities:string[]=["karachi","lahore","bahawalnagar","sarghoda"]
// let languages:string[]=["urdu","english","punjabi","sindhi"]
countries.forEach((list) => console.log(list));
let myintro = {
    name: "umm e habiba",
    Fname: "ghulam shabbir",
    rollNumber: 131216489,
    phNumber: 6247968095180539,
    martiaStatus: false
};
console.log(myintro);
//task # 22
let array = ["A", "B", "C", "D", "F"];
// index error
console.log(array[10]); //print undefined
console.log(array[3]);
// task # 23
let f = 5;
let t = 10;
//true
//test : 1
console.log("f is equal to 5?");
console.log(f == 5);
//test :2
console.log("t is equal to 10?");
console.log(t == 10);
//test:3
console.log("f is not equal to t?");
console.log(f != t);
//test:4
console.log("f is less than t");
console.log(f < t);
//test:5
console.log("t is greater than f?");
console.log(t > f);
//false
//test:6
console.log("f is not equal to 5?");
console.log(f != 5);
//test :7
console.log("t is  not equal to 10?");
console.log(t != 10);
//test:8
console.log("f is  equal to t?");
console.log(f == t);
//test:9
console.log("f is greater than t");
console.log(f > t);
//test:10
console.log("t is less than f?");
console.log(10 < 5);
//task#24
//1st test
let testes1 = "Jug";
let testes2 = "glass";
console.log(testes1 == testes2); //false
console.log(testes1 != testes2); //true
//2nd test
let toUpperCaseJug = "JUG";
console.log(toUpperCaseJug.toLowerCase() == "jug"); //true
console.log(toUpperCaseJug.toLowerCase() != "jug"); //false
//3rd test
let no = 4;
let no2 = 5;
console.log(no == no2); //false
console.log(no != no2); //true
console.log(no > no2); //false
console.log(no < no2); //true.
console.log(no >= 4); //true
console.log(no2 <= 4); //false
// //4thrd test
let itom = "ball";
let itom2 = "bat";
console.log(itom == "ball" && itom2 != "bat"); //false
console.log(itom != "ball" || itom2 == "bat"); //true
//5th test
let fruits = ["apple", "banana", "grapes", "mango"];
console.log(fruits.includes("apple")); //true
console.log(!fruits.includes("apple")); //false
//task # 25
let alien_colour = "green";
if (alien_colour == "green") {
    console.log("player just earned five points");
}
if (alien_colour === "blue") {
    console.log("failed");
}
;
//task # 26
let alien_colour1 = "green";
if (alien_colour1 == "green") {
    console.log("player just earned 5 points");
}
else {
    console.log("player just earned 10 points");
}
;
if (alien_colour1 == "black") {
    console.log("alien colour is black");
}
else {
    console.log("alien colour is green");
}
;
//task # 27
if (alien_colour1 === "green") {
    console.log("the player earned 5 points");
}
else if (alien_colour1 === "yellow") {
    console.log(" the player earned 10 points.");
}
else if (alien_colour1 === "red") {
    console.log(" the player earned 15 points.");
}
else {
    console.log("failed");
}
let alien_colour2 = "yellow";
if (alien_colour2 === "green") {
    console.log("the player earned 5 points");
}
else if (alien_colour2 === "yellow") {
    console.log(" the player earned 10 points.");
}
else if (alien_colour2 === "red") {
    console.log(" the player earned 15 points.");
}
else {
    console.log("failed");
}
let alien_colour3 = "red";
if (alien_colour3 === "green") {
    console.log("the player earned 5 points");
}
else if (alien_colour3 === "yellow") {
    console.log(" the player earned 10 points.");
}
else if (alien_colour3 === "red") {
    console.log(" the player earned 15 points.");
}
else {
    console.log("failed");
}
// //task # 28
let perssonAge = 20;
if (perssonAge < 2) {
    console.log("the person is a baby.");
}
else if (perssonAge >= 2 && perssonAge < 4) {
    console.log("the person is a toddler.");
}
else if (perssonAge >= 4 && perssonAge < 13) {
    console.log(" the person is a kid.");
}
else if (perssonAge >= 13 && perssonAge < 20) {
    console.log(" the person is teenager");
}
else if (perssonAge >= 20 && perssonAge < 65) {
    console.log(" the person is a adult.");
}
else if (perssonAge >= 65) {
    console.log(" the person is a elder.");
}
//task # 29
let myfavouriteFruites = ["apple", "banana", "mango"];
if (myfavouriteFruites.includes("apple")) {
    console.log("i really like apples");
}
if (myfavouriteFruites.includes("banana")) {
    console.log("i really likes banana");
}
if (myfavouriteFruites.includes("pine - apples")) {
    console.log("i really likes pine - apple");
}
if (myfavouriteFruites.includes("mango")) {
    console.log("i really likes mangoes");
}
if (myfavouriteFruites.includes("cherry")) {
    console.log("i really likes cherry");
}
//task # 30
let userName = ["umer", "ghulam", "admin", "ahmed", "umm e habiba"];
userName.forEach(ans => {
    if (ans === "admin") {
        console.log(`Hello ${ans}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${ans} , thank you for logging in again`);
    }
});
//task # 31
let userName1 = ["umer", "ghulam", "admin", "ahmed", "umm e habiba"];
userName = [];
if (userName1.length === 0) {
    console.log("your array is empty");
}
else {
    userName1.forEach(ans => {
        if (ans === "admin") {
            console.log(`Hello ${ans}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${ans} , thank you for logging in again`);
        }
    });
}
// //task # 32
let current_users = ["mushaf", "manal", "amna", "aisha", "abdur rehman"];
let new_users = ["aisha", "abdur rehman", "wajeeha", "hanaf", "shariq"];
new_users.forEach(new_one_user => {
    let ourCondition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (ourCondition) {
        console.log(`sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`this username ${new_one_user} is available`);
    }
});
//task # 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//use for loop
for (let oneNumber of numbers) {
    let ordinalending;
    if (oneNumber === 1) {
        ordinalending = "st";
    }
    else if (oneNumber === 2) {
        ordinalending = "nd";
    }
    else if (oneNumber === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log(`${oneNumber}${ordinalending}`);
}
//task # 34
let pizzas = ["fajita", "chicken tikka", "vegetable"];
for (let onepizza of pizzas) {
    console.log(` i like ${onepizza} pizza`);
}
console.log("i love pizza");
//task # 35
let mypets = ["cat", "dog", "cub"];
for (let pets of mypets) {
    console.log(`A ${pets} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");
//task # 36
function make_shirt(size, message) {
    console.log(`you selected ${size} size shirt with ${message} prints on shirt`);
}
make_shirt("medium", "sleep,stydy,coding");
//task # 37
function make_shirts(size = "Large", message = "I love typeScript") {
    console.log(`you choose a ${size} size shirt with ${message} prints on shirt`);
}
make_shirts();
make_shirts("medium");
make_shirts("small", "typeScript is a Superset of JavaScript");
//task # 38
function described_city(cityName = "Karachi", countryName = "Pakistan") {
    console.log(`${cityName} is in ${countryName}`);
}
described_city("Madinah", "Saudia Arabia");
described_city();
described_city("Istanbul", "Turkey");
//task # 39
function city_country(city, country) {
    return (`"${city} , ${country}"`);
}
console.log(city_country("karchi", "pakistan"));
console.log(city_country("paris", "france"));
console.log(city_country("tokyo", "japan"));
//task # 40
function make_album(artistName, albumTitle, tracks) {
    let musicAlbum = {
        artist: artistName,
        album: albumTitle,
    };
    if (tracks !== undefined) {
        musicAlbum.tracks = tracks;
    }
    return musicAlbum;
}
console.log(make_album("umm e habiba", "Album title 1"));
console.log(make_album("umer", "Album title 2"));
console.log(make_album("ahmed", "album titlr 3", 1312));
//task # 41
let magicians = ["rudra", "shahkal", "blindmagician", "majestiko", "shnaya"];
function show_magicians(magicians) {
    magicians.forEach(names => (console.log(names)));
}
let magicians_names = ["rudra", "shahkal", "blindmagician", "majestiko", "shnaya"];
show_magicians(magicians_names);
//task # 42
function show_magicians1(magicians) {
    magicians.forEach(names => (console.log(names)));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names1 = ["rudra", "shahkal", "blindmagician", "majestiko", "shnaya"];
let the_great = make_great(magicians_names1);
show_magicians1(the_great);
// task # 43
function show_magicians3(magicians) {
    magicians.forEach(names => (console.log(names)));
}
function make_great3(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names3 = ["rudra", "shahkal", "blindmagician", "majestiko", "shnaya"];
let copy_magicians_names = magicians_names3.slice();
let copy_great_magicians = make_great3(copy_magicians_names);
//original
console.log("\n\toriginal array");
show_magicians3(magicians_names3);
//copy
console.log("\n\tcopied array");
show_magicians3(copy_great_magicians);
//task # 44
function makeSandwich(...itoms) {
    console.log("\n\tmaking a sandwich with following itoms");
    itoms.forEach(name => console.log(name));
    console.log("\n\tits time to enjoy sandwich");
}
makeSandwich("chicken", "mayo", "garlic");
makeSandwich("kabuli", "potato");
makeSandwich("tikka", "butter", "tandori", "white pepper", "egg", "slice", "letuce", "kabab");
function creat_car(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
let my_car = creat_car("Tyota", "corolla", { colour: "white", sunRoof: true });
console.log(my_car);
export {};
