type LessonRowProps = {
  lesson: Lesson;
  students: Students;
};

export const LessonRow = ({ lesson, students }: LessonRowProps) => {
  return (
    <tr>
      <td>{lesson.name}</td>
      {students.map((student, index) => (
        <td key={index}>{student.progress.get(lesson._id) || ''}</td>
      ))}
    </tr>
  );
};
