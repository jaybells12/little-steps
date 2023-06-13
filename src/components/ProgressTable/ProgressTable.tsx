import { LessonGroup } from './LessonGroup';

type ProgressTableProps = {
  lessonGroups: LessonGroups;
  students: Students;
};

export const ProgressTable = ({
  lessonGroups,
  students,
}: ProgressTableProps) => {
  return (
    <article
      className={
        'bg-white p-8 w-fit rounded-[50px] ms-14 mt-[57px] whitespace-nowrap'
      }
    >
      <table
        className={'border-separate border-spacing-0 border-r border-[#E0E0E0]'}
      >
        <thead>
          <tr className={'sticky top-[57px]'}>
            <td className={'bg-white border-b border-e border-[#E0E0E0]'}></td>
            {students.map((student, index) => (
              <th
                className='tb-stud bg-white border-l border-r border-b border-[#E0E0E0] ps-4 leading-[34px]'
                key={index}
              >
                {student.name.replace(/[a-z]+$/g, '.')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lessonGroups.map((group, index) => (
            <LessonGroup
              key={index}
              name={group.name}
              lessons={group.lessons}
              students={students}
            />
          ))}
        </tbody>
      </table>
    </article>
  );
};
