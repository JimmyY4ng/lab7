const courseList = [
    {code:"MATH 1310",name:"Technical Math for IT"},
    {code:"ACIT 1515",name:"Scripting for IT"},
    {code:"ORBG 1100",name:"Organizational Behaviour"},
]

let input = ""
do{
    input = prompt("Enter a BCIT course code (4-digit number):");
}
while(input.length !=4 || isNaN(Number(input)))