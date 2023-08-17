import Link from 'next/link'

export type ButtonProps = {
  text: string
  link: string
  className?: string
}

export default function Button(props: ButtonProps) {
  const { text, link, className } = props
  return (
    <Link
      href={link}
      className={`block bg-accent rounded-full px-6 pt-2.5 pb-3.5 text-primary font-bold tracking-def text-center ${className}`} //inline-block
    >
      {text}
    </Link>
  )
}
