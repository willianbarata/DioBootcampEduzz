const students = [{
        name: 'Will',
        grade: 7
    },
    {
        name: 'Bruna',
        grade: 8
    },
    {
        name: 'Maria',
        grade: 4
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >=7);
}

console.log('Alunos aprovados');
console.log(getApprovedStudents(students));

console.log('\n Lista de alunos');
console.log(students);