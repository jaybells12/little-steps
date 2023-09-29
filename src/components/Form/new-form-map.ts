export default {
  // Classroom also has a curriculum field, where and how is curriculum added to classroom? from lessons?
  classroom: {
    name: 'text',
    guide: 'select',
    students: 'checkbox',
  },
  // When an admin is creating a new user, they should have access to setting the school code for the user
  user: {
    name: 'text',
    email: 'email',
    password: 'password',
    role: 'select', // Role selection is permission based
  },
  //  Do the primary lesson groups need to be an enum?
  lesson: {
    title: 'text',
    primary: 'text',
    secondary: 'text',
  },
  // The school has a hashcode field generated automatically. School has Employees, Clients, Classrooms fields, not needed on initial creation
  school: {
    name: 'text',
  },
  // How is the parent select populated?
  student: {
    name: 'text',
    dob: 'date',
    address: 'text',
    parent: 'multiselect',
    classroom: 'select',
  },
}
