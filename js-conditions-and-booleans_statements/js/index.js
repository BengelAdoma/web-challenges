console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
let encrypt;
encrypt = SUPER_SECRET_PASSWORD;
if ( SUPER_SECRET_PASSWORD == encrypt) {
    console.log("Welcome! You are logged in as Brunhilde1984.");
}else{
    console.log("Access denied!");
};

const receivedPassword = "password1234";

// Part 2: Even / Odd
const number = 6;
if (number > 0) {
    console.log("even number");
} else{
    console.log("odd number");
};

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;
if (numberOfHotdogs< 5) {
    console.log("price : ", numberOfHotdogs*2);
    
} else if (numberOfHotdogs > 5 && numberOfHotdogs <100) {
    console.log("price : ", numberOfHotdogs*1.5)
}
else if (numberOfHotdogs > 100 && numberOfHotdogs <1000000) {
    console.log("price : ", numberOfHotdogs*1)
}
else if (numberOfHotdogs > 1000000 ) {
    console.log("price : ", numberOfHotdogs*0.1)
};
    
    



// Part 4: Daytime
const currentHour = 12;

const statement ="Partytime" ;
currentHour <  17 ?  "Still need to learn" : "Partytime";



console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const greeting = "Hello " + (userName ? userName : "Coach") + "!";

console.log(greeting);
// name userName ?  greeting : "Heello Coach!";
