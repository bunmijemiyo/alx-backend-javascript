// task_5 Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string

  getCoffeeBreak(): string
  
  workDirectorTasks(): string

}

interface TeacherInterface {
  workFromHome(): string

  getCoffeeBreak(): string

  workTeacherTasks(): string
}

export class Director implements DirectorInterface {
  workFromHome = (): string => "Working from home";

  getCoffeeBreak = (): string => "Getting a coffee break";

  workDirectorTasks = (): string => "Getting to director tasks";
}

export class Teacher implements TeacherInterface {
  workFromHome = (): string => "Cannot work from home";

  getCoffeeBreak = (): string => "Cannot have a break";

  workTeacherTasks = (): string => "Getting to work";
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

// task_6 Creating functions specific to employees
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks() !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let res = undefined;
  (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
  return res;
}

// task_7  String literal types
type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string | boolean {
  return (todayClass === "Math") ? "Teaching Math" : (todayClass === "History") ? "Teaching History" : `${undefined}`
}
