"use client";
import React from "react";
import CountUp from 'react-countup';

const stats = [
  {
    num: 6,
    text: "Months of Experience",
  },
  {
    num: 12,
    text: "Projects Completed",
  },
  {
    num: 6,
    text: "Technologies Mastered",
  },
  {
    num: 650,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 max-w-full md:max-w-[80vw] mx-auto xl:max-w-none mt-10">
        {stats.map((item, idx) => {
          return <div key={idx}
          className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
          >
            <CountUp end={item.num} duration={5} delay={1}
            className="text-4xl md:text-5xl font-extrabold"
            />
            <p className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} text-white/80`}>{item.text}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Stats;
