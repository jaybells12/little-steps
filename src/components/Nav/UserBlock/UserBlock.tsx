// Props for this will come from a data fetch after authentification
import Image from "next/image";

type UserBlockProps = {
  userName: string;
  userImage: string;
};
export const UserBlock = ({ userName, userImage }: UserBlockProps) => {
  return (
    <aside className={"flex items-center gap-2"}>
      <p className={"leading-6"}>{userName}</p>
      <Image
        src={userImage}
        alt={"Profile picture"}
        width={48}
        height={48}
        className={"rounded-full w-12 h-12 object-cover"}
      />
    </aside>
  );
};
