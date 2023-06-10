import { LessonRow } from './LessonRow';

type LessonGroupProps = {
  name: string;
  lessons: Lesson[];
  students: Students;
};

export const LessonGroup = ({ name, lessons, students }: LessonGroupProps) => {
  return (
    <>
      <tr>
        <td>{name}</td>
      </tr>
      {lessons.map((lesson, index) => (
        <LessonRow
          key={index}
          lesson={lesson}
          students={students}
        />
      ))}
    </>
  );
};
