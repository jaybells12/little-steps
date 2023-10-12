import Menu from '@/components/Menu'
import Nav from '@/components/Nav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <Menu />
      <section className={'bg-map bg-cover min-h-screen flex px-28 py-14 gap-14'}>{children}</section>
    </>
  )
}
