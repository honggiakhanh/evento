import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-center items-center max-w-[1100px] mx-auto px-6 py-24 gap-20">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default Loading;
