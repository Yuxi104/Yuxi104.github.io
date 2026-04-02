import React from "react";

export default function LatestNewsSection() {
  return (
    <section className="grid gap-5 transition-all h-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Research Interests</h1>
      </div>
      <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-200">
        <li>World Model</li>
        <li>Neural Architecture Search</li>
      </ul>
    </section>
  );
}
