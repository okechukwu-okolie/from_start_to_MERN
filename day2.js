//Greetings dependent on time of the day
// Greet: "good morning" if the time is between 6am and 12 noon
//Greet: "good afternoon " if time is greater than 12noon and  and equal to 6pm
//otherwise greet: "good night"

let time = 11
 if (time >=6 && time <= 12){
    console.log('Good morning');
 }
 else if(time>12 && time<=18) {
    console.log('good afternoon');
    
 } else {
    console.log('good night');
    
 }

 //working with switch statements
 const favoriteAnimal = 'dog'

 switch (favoriteAnimal) {
    case "tiger"://adding multiple cases allows for multiple checks with same outcome
    case "lion":
    case "cat":// cat is the condition that is checked tp see if it equals the variable provided
        console.log("i am a cat")
        break;// the break statement causes an exit out of that code at this point if the condition is satisfied.
    case "dog":
        console.log("i am a dog")
        break;
    case "fish":
        console.log("i am a fish")
        break;
    case "shark":
        console.log("i am a shark")
        break;
 
    default:
        console.log('yu have chosen any option that is provided');
        
        break;
 }