interface Student{
    firstName: string;
    lastName:string;
    age:number;
    location:string;
}
const student1: Student = {
    firstName : "Agnes",
    lastName: "Pendo",
    age:19,
    location:"nairobi",
}
const student2: Student = {
    firstName : "Mercy",
    lastName: "Amina",
    age:21,
    location:"nairobi",
}
const studentsList = [student1, student2]

let table = document.createElement('table');
    document.body.appendChild(table);
    
        let tr1 = document.createElement('tr'); 
        tr1.innerHTML = studentsList[0].firstName
        table.appendChild(tr1);


