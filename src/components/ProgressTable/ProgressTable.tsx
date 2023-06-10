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
    <table>
      <thead>
        <tr>
          <td></td>
          {students.map((student, index) => (
            <td key={index}>{student.name}</td>
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
  );
};
