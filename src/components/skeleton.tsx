import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: Readonly<SkeletonProps>) {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[550px] rounded-md bg-white/50",
        className
      )}
    />
  );
}
