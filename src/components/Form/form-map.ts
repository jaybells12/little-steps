export default {
  classroom: {
    name: 'text',
    guide: 'select',
    students: 'checkbox',
  },
  curriculum: {
    guide: 'select',
    lessons: 'checkbox',
  },
  director: {
    name: 'text',
    email: 'email',
    password: 'password',
  },
  guide: {
    name: 'text',
    email: 'email',
    password: 'password',
    curriculum: 'select',
    classroom: 'select',
  },
  lesson: {
    name: 'text',
    primary: 'text',
    secondary: 'text',
  },
  parent: {
    name: 'text',
    email: 'email',
    password: 'password',
    children: 'checkbox',
  },
  student: {
    name: 'text',
    dob: 'date',
    classroom: 'select',
  },
}
