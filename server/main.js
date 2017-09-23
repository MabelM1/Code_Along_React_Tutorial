import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    } 
    getGreeting() {
      return `Hi! I am ${this.name}.`;
    }   
      getPersonDescription() {
      return `${this.name} is ${this.age} years old.`;
    }

  }

  class Employee extends Person {
  	constructor(name, age, title) {
      super(name, age);
      this.title = title;
    } 
  }



  let me = new Person('Jasmin');
});