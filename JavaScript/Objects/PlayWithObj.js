var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// How would you print/log John's age?
var nm = "John";
for (var user in users){
    if(users[user].name == nm){
        console.log(users[user].age); //log age
    }
}

// How would you print/log the name of the first object?
console.log(users[0].name) //log name of first object

// How would you print/log the name and age of each user using a for loop?
for (var user in users){
    console.log(users[user].name, " - ", users[user].age);
}


//Instructor Solutions:
// print John's age
console.log(users[1].age);

// print the name of the first object
console.log(users[0].name);

// print the name and age of each user using a for loop
for (var i = 0; i < users.length; i++){
    console.log(users[i].name, "-", users[i].age);
}