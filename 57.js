// try....catch...finally
// It's a way to handle errors in javascript so your program doesn't crash

// syntax

try{
    // code that might cause an error
}catch(error){
    //code that runs *if* an error happens
}finally{
    // code that always run (error or not)
}

try {
    let output = 10/0;
    console.log(output);
    console.log(output+a);
}catch(error){
    console.log("Got Error!");
    console.log(error.name,error.message);
}finally{
    console.log("Hello I'll be there");
}
