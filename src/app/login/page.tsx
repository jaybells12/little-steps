import { Nav } from '@/components/Nav';
import { CardShell } from '@/components/CardShell';
import { Login } from '@/components/Login';

export default function LoginPage(props: any) {
  return (
    <main
      className={
        'h-screen w-full bg-signin bg-[size:1200px_800px] bg-[position:-215px_0px] bg-no-repeat'
      }
    >
      <Nav />
      <CardShell
        title='Welcome Back!'
        className={'w-80 relative top-[41.5%] px-3'}
      >
        <Login />
      </CardShell>
    </main>
  );
}
