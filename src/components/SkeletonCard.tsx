import React from "react";
import Skeleton from "./Skeleton";

const SkeletonCard = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-5 w-64" />
      <Skeleton className="h-5 w-64" />
    </div>
  );
};

export default SkeletonCard;
