type LessonRowProps = {
  lesson: Lesson;
  students: Students;
};

export const LessonRow = ({ lesson, students }: LessonRowProps) => {
  return (
    <tr>
      <td className={'px-8 border-y border-r border-[#E0E0E0]'}>
        {lesson.name}
      </td>
      {students.map((student, index) => {
        const value = student.progress.get(lesson._id) || '';
        return (
          <td
            key={index}
            className={'border border-[#E0E0E0]'}
          >
            <div
              data-cell={value}
              className={
                'data-i:bg-accent/10 data-p:bg-accent/50 data-m:bg-accent data-m:text-white data-w:bg-second text-center uppercase font-bold rounded-xl leading-[34px] h-9 w-9 m-auto'
              }
            >
              {value}
            </div>
          </td>
        );
      })}
    </tr>
  );
};
