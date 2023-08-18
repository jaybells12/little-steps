import CardShell from '@/components/CardShell/'
import { UserForm } from '@/components/Forms'

export default function NewUserForm() {
  return (
    <CardShell
      title={'Create New User'}
      className={'w-fit'}
    >
      <UserForm />
    </CardShell>
  )
}
