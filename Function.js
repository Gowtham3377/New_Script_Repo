function Test1 (){
    console.log("Hai this is Gowtham")
} 
Test1()

//Anonymous Function
const Test2 = function (name,Ph_no,Age,Address,mail,pincode) {
    console.log("Personal Details "+("Gowtham" + 9994999477 + "No119 : Chennai"+600012))
}
Test2()

function Run (){

    let a = {
        name : 'Gowtham',
        Age : 28,
        location : 'Chennai',
        Mail : 'Gowtham@gmail.com' 
    } 

    console.log(a)

    let b = {
        ofc_name : "Novac",
        ofc_no : 9754646464,
        ofc_Add : 'mylapore',
        ofc_id : "G449"
    }
    console.log(b)


// console.log("Name",a.name);
// console.log("office name",b.ofc_name);
// console.log("Office ID",b.ofc_id);

}
Run()
// arrow function

let arrow = ()=> {

    console.log("Print arrow function")

    const a1 = 87
    const b1 = 80

    console.log("print the tqo value ",(c=a1+b1));
    console.log(c)

}
arrow()


function sum(string) {

    console.log("hlo")
    
}sum(56465)

function sum2 (int) {

    console.log("hlo000")
    
}

function callBoth() {
    sum("abc");
    sum2(123);
}

callBoth();


//IIFE

(function functionname (){

})



(function name3(c) {
    console.log(`hlooo${c}`);
    console.log(c);
    
    
})(true);

function reverse(str) {
    return str.split('').reverse().join('')
     
}
console.log(reverse("gowtham"))

let FB= [1,1,3,4,5];
let v =0;

for (let i = 0; i < FB.length; i++) {
    const element = FB[i];
    
    n = v+FB[i];
}
console.log(n)