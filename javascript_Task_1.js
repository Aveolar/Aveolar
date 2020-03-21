//Mode of "Display" was not highlighted in the task instructions...

const name = "Adeola Ogunsanya";

const courses = ["HTML", "CSS", "JavaScript"];

console.log(name);
console.log(courses);

document.write(name + "<br/>");
document.write(courses + "<br/>");

    if (courses.length % 2 !== 0) {
        for (let i = 1; i <= 200; i+=2) {
            console.log(i);
            document.write(i + "<br/>")
        }
    }else if (courses.length % 2 === 0) {
        for (let i = 0; i <= 200; i+=2) {
            console.log(i);
            document.write(i + "<br/>") 
        }
    }else {
        undefined;
    }
