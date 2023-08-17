import { PropsWithChildren } from 'react'

export type CardShellProps = {
  title: string
  className?: string
}
/**
 * Wraps children in a card with a title
 * @param title The title of the card
 * @param className Additional styling
 * @returns
 */
export default function CardShell({
  title,
  className,
  children,
}: PropsWithChildren<CardShellProps>) {
  return (
    <article
      className={`bg-primary bg-opacity-80 rounded-[3rem] px-10 py-8 mx-auto flex flex-col justify-center items-center ${className}`}
    >
      <h2
        className={
          'text-black font-bold text-center tracking-def text-4xl leading-normal mb-8'
        }
      >
        {title}
      </h2>
      {children}
    </article>
  )
}
