export default function getListStudents() {
  const createStudent = (id, firstName, location) => ({
    id,
    firstName,
    location,
  });

  return [
    createStudent(1, 'Guillaume', 'San Francisco'),
    createStudent(2, 'James', 'Columbia'),
    createStudent(5, 'Serena', 'San Francisco'),
  ];
}
