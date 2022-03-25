// ambil element
const skills_holder = document.getElementById('skills');

// ES5

// ES6
const yourSkills = ['Fullstack Developer', 'Backend Developer', 'Data Engineer', 'DevOps'];

// Map
yourSkills.forEach((skill) => {
    parent += '<li>' + skill + '</li>';
    console.log(`${skill}`);
});

const printSkills = yourSkills.map(skill => {
    return skill;
});

skills_holder.innerHTML = printSkills;

// filter data
const myPrimarySkill = yourSkills.filter(skill => {
    return skill !== "Fullstack Developer";
});

console.log(myPrimarySkill);