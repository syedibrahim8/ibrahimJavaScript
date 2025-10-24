//break statement in loops

for (let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("I have stopped");
        break;
    }
    console.log(i);
}

// continue statement in loops
for (let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("hey iam 5 and iam stuck")
        continue;
    }
    console.log(i);
}