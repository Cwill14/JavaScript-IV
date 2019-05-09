// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;        
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(iAttributes) {
        super(iAttributes);
        this.specialty = iAttributes.specialty;
        this.favLanguage = iAttributes.favLanguage;
        this.catchPhrase = iAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(sAttributes) {
        super(sAttributes);
        this.previousBackground = sAttributes.previousBackground;
        this.className = sAttributes.className;
        this.favSubjects = sAttributes.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const bill = new Instructor({
    name: 'Bill',
    age: '32',
    location: 'Boston',
    specialty: 'Front End',
    favLanguage: 'JavaScript',
    catchPhrase: 'Git er done!'
})

const george = new Student({
    name: 'George',
    age: 25,
    location: 'Dallas',
    previousBackground: 'Carpenter',
    className: 'Web22',
    favSubjects: ['HTML', 'CSS']
})

const joe = new ProjectManager({
    name: 'Joe',
    age: 29,
    location: 'Louisville',
    gradClassName: 'CS2',
    favInstructor: 'Bill'
})


bill.speak();
bill.demo('classes');
bill.grade(george, 'Objects');
george.listsSubjects();
george.PRAssignment('Prototypes');                                             
george.sprintChallenge('JavaScript III');
joe.standUp('web22_joe');
joe.debugsCode(george, 'Preprocessing II');