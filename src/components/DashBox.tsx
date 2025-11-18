import { useEffect, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

interface DashBoxProps {
  title: string;
  value: number;
}

const DashBox = ({ title, value }: DashBoxProps) => {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 1 });
    return controls.stop;
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [motionValue]);

  return (
    <div className="bg-blue-400 py-6 px-3 flex text-white flex-col space-y-1 w-60 rounded-md shadow-lg hover:scale-[1.05] transition-all duration-[0.3s]">
      <span className="text-sm font-semibold">{title}</span>
      <span className="font-bold text-2xl">
        {Math.round(displayValue).toLocaleString("en-US")}
      </span>
    </div>
  );
};
export default DashBox;
