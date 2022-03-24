// ambil element
const skills_holder = document.getElementById('skills');

// ES5

// ES6
const yourSkills = ['Fullstack Developer', 'Backend Developer', 'Data Engineer', 'DevOps'];


// tambahkan item kepada array
// yourSkills.push('Machine Learning');

let parent = '<ul>';

yourSkills.forEach((skill) => {
    parent += '<li>' + skill + '</li>';
    console.log(`${skill}`);
});

parent += '<ul>';
skills_holder.innerHTML = parent;