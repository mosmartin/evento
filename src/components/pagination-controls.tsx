import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  prevPath: string;
  nextPath: string;
};

const btnStyles =
  "text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

export default function PaginationControls({
  prevPath,
  nextPath,
}: Readonly<PaginationControlsProps>) {
  return (
    <section className="flex justify-between w-full">
      {prevPath ? (
        <Link className={btnStyles} href={prevPath}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link className={btnStyles} href={nextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
