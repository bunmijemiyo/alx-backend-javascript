//Task_1 Let's build a Teacher interface
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,

  [propName: string]: any
  }

// Task_2 Extending the Teacher class

interface Directors extends Teacher {
  numberOfReports: number;
}

// Task_3 Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string ): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string ): string => `${firstName.charAt(0)}. ${lastName}`;
// Task_4 Writing a class
interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
  
}
