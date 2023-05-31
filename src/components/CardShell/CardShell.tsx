import { PropsWithChildren } from "react";

export type CardShellProps = {
  title: string;
  className?: string;
};

export const CardShell = ({
  title,
  className,
  children,
}: PropsWithChildren<CardShellProps>) => {
  return (
    <article
      className={`bg-primary bg-opacity-80 rounded-[3rem] px-10 py-8 mx-auto flex flex-col justify-center items-center ${className}`}
    >
      <h2
        className={
          "text-black font-bold tracking-[0.03em] text-4xl leading-normal pb-8"
        }
      >
        {title}
      </h2>
      {children}
    </article>
  );
};
