// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;        
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I amd from ${this.location}`);
    }
}

class Instructors extends Person {
    constructor(iAttributes) {
        super(iAttributes);
        this.specialty = iAttributes.specialty;
        this.favLanguage = iAttributes.favLanguage;
        this.catchPhrase = iAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(studentObj, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Students extends Person {
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

class ProjectManagers extends Instructors {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        console.log(`${name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
}