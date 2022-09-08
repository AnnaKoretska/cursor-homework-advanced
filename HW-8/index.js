const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
        }
}, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
}];

function getSubject (studSub){ 
    const subjects = Object.keys(studSub.subjects).map((item) => 
    capitalizeFirstLetter(item).replace("_" , " "));
    return subjects;
}

function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.slice(1);
}
console.log(getSubject(students[0]));

function getAvarageMark (mark){ 
    let subject = Object.values(mark.subjects).flat();
    let sum = subject.reduce((sum, curr) => sum + curr, 0);
    let average = (sum / subject.length).toFixed(2);
    return average;
}
console.log((getAvarageMark(students[0])));

function studentInfo(studentObj){ 
    const info = { 
        name : studentObj.name, 
        course : studentObj.course, 
        mark : getAvarageMark(studentObj)
    }
    return info;
}
console.log(studentInfo(students[0]));

function getStudentsName (students) { 
    const names = students.map((item) => item.name).sort();
    return names;
}
console.log(getStudentsName(students));

function getBestStudent() {
    return [studentInfo(students[0]), studentInfo(students[1]), studentInfo(students[2])]
    .sort((a, b) => a.marks - b.marks)
    .pop().name;
}
console.log(getBestStudent());

function calculateWordLetters(word){
    let calculateWord = {};
    for (let i of word) {
        calculateWord[i] = word.split(i).length - 1;
}
    return calculateWord;
};
console.log(calculateWordLetters("текст"))