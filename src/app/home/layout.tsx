import Menu from '@/components/Menu'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={'bg-map bg-cover min-h-screen'}>
      <div className={'flex'}>
        <Menu />
        {children}
      </div>
    </section>
  )
}
