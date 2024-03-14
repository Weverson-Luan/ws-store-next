/* eslint-disable prettier/prettier */

import { Skeleton } from "@/components/skeleton/skeleton";

export default function RootLoadingHome() {
  return (
    <div className="grid h-full max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[856px]" />

      <Skeleton className="col-span-3 row-span-3 " />
      <Skeleton className="col-span-3 row-span-3 " />
    </div>
  );
}
