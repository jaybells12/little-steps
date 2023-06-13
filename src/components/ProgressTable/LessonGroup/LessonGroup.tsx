import { LessonRow } from './LessonRow';

type LessonGroupProps = {
  name: string;
  lessons: Lesson[];
  students: Students;
};

export const LessonGroup = ({ name, lessons, students }: LessonGroupProps) => {
  const blankCells = Array.from({ length: students.length }, () => (
    <td
      className={
        'bg-[#daf4ef] border-y border-[#E0E0E0] last:border-r [&:nth-child(2)]:border-l'
      }
    ></td>
  ));

  return (
    <>
      <tr
        className={
          'sticky top-[157px]' //bg-accent/25 //border-[#E0E0E0]
        }
      >
        <td
          className={
            'bg-[#daf4ef] border-y border-r border-[#E0E0E0] font-bold tracking-def px-4'
          }
        >
          {name}
        </td>
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
