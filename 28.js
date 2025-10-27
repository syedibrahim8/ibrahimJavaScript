// 2. Function with parameters
// Parameters ==> Passed as variable
// Arguments ==> Passed as values

function add(a, b, c){
    console.log(a+b+c);
}
add(10, 20, 30);

function whoAmi(fullname){
    console.log(`Iam ${fullname} of CFI`);
}
whoAmi("Ibrahim");

function person(fname, age, city){
    console.log(`Iam ${fname} and iam ${age} years old and I live in ${city}`);
}
person("Ibrahim", 20, "HYD");