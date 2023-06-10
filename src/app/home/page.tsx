import { Menu } from '@/components/Menu';
import { Nav } from '@/components/Nav';
import { ProgressTable } from '@/components/ProgressTable';
import studentData from '../../data/students.json';
import lessonData from '../../data/lessongroups.json';

export default function HomePage(props: any) {
  const students: Students = studentData.map((student) => ({
    ...student,
    progress: new Map(Object.entries(student.progress)),
  }));

  return (
    <section className={'bg-map'}>
      <Nav />
      <Menu />
      <ProgressTable
        lessonGroups={lessonData}
        students={students}
      />
    </section>
  );
}
