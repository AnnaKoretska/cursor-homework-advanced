//debugger

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [ "Диференційне рівняння", "Теорія автоматів", "Алгоритми і стрyктури даних"];

const marks = [4, 5, 5, 3, 4, 5];

function sortStudents(arr) {
let boys = [];
let girls = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].endsWith("а")) {
    girls.push(arr[i]);
    } else {
    boys.push(arr[i]);
    }
}
let pairStudents = [];
for (let i = 0; i < boys.length; i++) {
    pairStudents.push([boys[i], girls[i]]);
}
return pairStudents;
}

let pairStudents = sortStudents(students);
console.log(pairStudents);

function studentSubjects (arr, themes) { 
    let pairSubject = [];
    for (let i = 0; i < themes.length; i++) { 
        let [boys, girls] = arr[i];
        pairSubject.push([boys + " i " + girls,  themes[ i]]); 
    } return pairSubject;
} 
let pairSubject = studentSubjects(pairStudents, themes);
console.log(pairSubject);

function addMarks (students, marks){ 
    let studentsMarks = []; 
    for (let i = 0; i < students.length; i++) { 
        studentsMarks.push([students[i], marks[i]]); 
    }
return studentsMarks; 
}
let rating = addMarks(students, marks); 

console.log(rating);


function addPairSubjectMarks (pairSubject) { 
    let pairSubjectMarks = [];
    for(let i = 0; i<pairSubject.length; i++){ 
        pairSubjectMarks.push([...pairSubject[i], Math.floor(Math.random() * (5 - 1) + 1)]);
    } return pairSubjectMarks;
}
let pairSubjectMarks = addPairSubjectMarks(pairSubject); 
console.log(pairSubjectMarks);