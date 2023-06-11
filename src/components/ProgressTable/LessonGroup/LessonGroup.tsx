import { LessonRow } from './LessonRow';

type LessonGroupProps = {
  name: string;
  lessons: Lesson[];
  students: Students;
};

export const LessonGroup = ({ name, lessons, students }: LessonGroupProps) => {
  const blankCells = Array.from({ length: students.length }, () => (
    <td className={'border border-[#E0E0E0]'}></td>
  ));

  return (
    <>
      <tr className={'bg-accent/25 h-[38.5px] border-y border-[#E0E0E0]'}>
        <td>{name}</td>
        {blankCells}
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
