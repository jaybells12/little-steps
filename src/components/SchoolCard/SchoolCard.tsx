// Should eventually include an image
import getFullName from '@/utils/getFullName'
import Image from 'next/image'

type SchoolCardProps = {
  name: string
  hash: string
  image: string
  directors: Partial<PopUser>[]
  guides?: Partial<PopUser>[]
  students?: Partial<PopStudent>[]
  parents?: Partial<PopUser>[]
  abridged?: boolean
  className?: string
}

export default function SchoolCard({ name, hash, image, directors, guides, students, parents, abridged = false, className = '' }: SchoolCardProps) {
  console.log(directors)
  const directorName = getFullName(directors[0]?.name)

  return (
    <article className={`bg-accent rounded-[3rem] px-10 py-8 mx-auto flex flex-col justify-center items-center w-fit ${className}`}>
      <Image src={image} alt='Image of a school building' height={333} width={500} />
      <h2 className={'font-bold text-4xl'}>{name}</h2>
      <p className={'font-light text-sm'}>{hash}</p>
      <p className={'font-medium text-lg'}>{directorName}</p>
    </article>
  )
}
