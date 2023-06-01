import Link from "next/link";

export type ButtonProps = {
  text: string;
  link: string;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { text, link, className } = props;
  return (
    <Link
      href={link}
      className={`bg-accent rounded-full px-6 py-2.5 ${className}`} //inline-block
    >
      <span
        className={
          "text-primary font-bold tracking-[0.03em] align-super" //inline-block align-super
        }
      >
        {text}
      </span>
    </Link>
  );
};
