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
    <article className={'bg-white p-8 w-fit'}>
      <table>
        <thead>
          <tr className={'border-b-2 border-[#E0E0E0]'}>
            <td></td>
            {students.map((student, index) => (
              <td
                key={index}
                className='tb-stud border-x border-[#E0E0E0] leading-[34px] ps-4'
              >
                {student.name.replace(/[a-z]+$/g, '.')}
              </td>
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
