// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
        this.name = attrs.name,
        this.age = attrs.age,
        this.location = attrs.location
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(attrs){
        super(attrs),
        this.specialty = attrs.specialty,
        this.favLanguage = attrs.favLanguage,
        this.catchPhrase = attrs.catchPhrase
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}!`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}!`)
    }

}

class Student extends Person {
    constructor(attrs){
        super(attrs),
        this.previousBackground = attrs.previousBackground,
        this.className = attrs.className,
        this.favSubjects = attrs.favSubjects
    }

    listsSubjects(){
        console.log(this.favSubjects.toString());
    }

    PRAssignment(student, subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(student, subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`)
    }

}

class ProjectManager extends Instructor {
    constructor(attrs){
        super(attrs),
        this.gradClassName = attrs.gradClassName,
        this.favInstructor = attrs.favInstructor
    }

    standUp(pr, channel){
        console.log(`${pr.name} announces to ${channel} '@channel standy times!'`)
    }

    debugsCode(pr, student, subject){
        console.log(`${pr.name} debugs ${student.name}'s code on ${subject}!`)
    }

}

/*--------------------Test Objects-----------------*/

const john = new Instructor({
    name: "John",
    location: "California",
    age: 42,
    specialty: "algorithms",
    catchPhrase: "They say that nothing is wasted. Either that, or it all is."
});

const mary = new Instructor({
    name: "Mary",
    location: "Florida",
    age: 36,
    specialty: "UX/UI",
    catchPhrase: "Genius might be the ability to say a profound thing in a simple way."
});

const steve = new Student({
    name: "Steve",
    age: 24,
    location: "Texas",
    previousBackground: "Landscaper",
    className: "WEB23",
    favSubjects: ["HTML", "Javascript", "React"]
});

const carla = new Student({
    name: "Carla",
    age: 25,
    location: "Alaska",
    previousBackground: "QC Inspector",
    className: "WEB21",
    favSubjects: ["Algorithms", "Machine Learning"]
});

const anthony = new ProjectManager({
    name: "Anthony",
    location: "Maine",
    age: 45,
    specialty: "Front-End",
    catchPhrase: "Trust the process!",
    gradClassName: "WEB21",
    favInstructor: "Mary"
})

const emily = new ProjectManager({
    name: "Emily",
    location: "Utah",
    age: 34,
    specialty: "Javascript",
    catchPhrase: "I don't have a catchphrase",
    gradClassName: "WEB22",
    favInstructor: "John",
})

/*-------------Tests------------*/

anthony.speak();

mary.demo("HTML");

john.grade(anthony, "Javascript");

carla.listsSubjects();

steve.PRAssignment(steve, "Flexbox I");

carla.sprintChallenge(carla, "Javascript");

emily.standUp(emily, "WEB23");

anthony.debugsCode(anthony, carla, "Node.js");