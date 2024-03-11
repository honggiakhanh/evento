import Skeleton from "@/components/Skeleton";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

export default Loading;
