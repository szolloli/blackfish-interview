"use client";
import React from "react";

export default function List<T>({
  data,
  renderItem,
}: {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}) {
  if (!data || !data.length)
    return (
      <div className="  text-[30px] font-bold text-left text-white">
        No characters
      </div>
    );

  return (
    <div className="gap-3 flex w-full max-w-[540px]  flex-col">
      {data.map((res) => renderItem(res))}
    </div>
  );
}
