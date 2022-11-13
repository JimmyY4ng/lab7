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

for (const item in courseList) {
    let courseNum = courseList[item].code.slice(5)
    let courseChar = courseList[item].code.slice(0,4)
    if (courseNum === input){
        console.log(`Yes I am taking the course:${courseChar} - ${courseNum}`)
        break
    }
    else {
            console.log(`Success ${input}`);
        
        }
    
}

