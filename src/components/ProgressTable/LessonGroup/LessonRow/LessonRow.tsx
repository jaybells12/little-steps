type LessonRowProps = {
  lesson: Lesson;
  students: Students;
};

export const LessonRow = ({ lesson, students }: LessonRowProps) => {
  return (
    <tr className={'border-y border-[#E0E0E0]'}>
      <td>{lesson.name}</td>
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
                'data-i:bg-accent/10 data-p:bg-accent/50 data-m:bg-accent data-m:text-white data-w:bg-second text-center uppercase font-bold rounded-xl leading-8 h-9 w-9'
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
