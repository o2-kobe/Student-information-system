import DashBox from "../components/DashBox";
import { HiOutlineTrophy } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";

const gradeCategories = ["A", "A-", "B+", "B-", "C+", "C-", "F"] as const;
type GradeStats = Record<(typeof gradeCategories)[number], number>;
const initialGrades: GradeStats = gradeCategories.reduce((acc, g) => {
  acc[g] = 0;
  return acc;
}, {} as GradeStats);

const Homepage = () => {
  // Get data from Redux store instead of API calls
  const students = useAppSelector((state) => state.students.students);
  const courses = useAppSelector((state) => state.courses.courses);
  const departments = useAppSelector((state) => state.departments.departments);
  const registrations = useAppSelector(
    (state) => state.registrations.registrations
  );

  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    departments: 0,
    registrations: 0,
    grades: initialGrades,
  });

  useEffect(() => {
    // Calculate grade stats from registrations
    const gradeCounts: GradeStats = { ...initialGrades };
    interface Registration {
      grade?: string;
      // add other properties if needed
    }

    registrations.forEach((r: Registration) => {
      const g = r.grade?.toUpperCase();
      if (gradeCounts[g as keyof GradeStats] !== undefined)
        gradeCounts[g as keyof GradeStats] += 1;
    });

    setStats({
      students: students.length,
      courses: courses.length,
      departments: departments.length,
      registrations: registrations.length,
      grades: gradeCounts,
    });
  }, [students, courses, departments, registrations]);

  return (
    <div>
      <h2 className="font-semibold text-3xl">Dashboard</h2>
      <div className="mt-5 flex gap-3 flex-wrap">
        <DashBox title="Total Students" value={stats.students} />
        <DashBox title="Total Courses" value={stats.courses} />
        <DashBox title="Total Departments" value={stats.departments} />
        <DashBox title="Total Registrations" value={stats.registrations} />
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-xl mb-2">Performance of Students</h3>
        <div className="flex mt-4 gap-2">
          <div className="flex flex-col items-center gap-y-4 text-center ">
            <HiOutlineTrophy size={20} />
            <div className="w-0.5 bg-gray-200 h-8"></div>
            <HiOutlineTrophy size={20} />
          </div>
          <div className="flex flex-col gap-y-9 mt-[-4px]">
            <div>
              <p>Students with A Grades</p>
              <p className="text-blue-400 font-semibold text-sm">
                {stats.grades["A"] + stats.grades["A-"]} students had A this
                semester
              </p>
            </div>
            <div>
              <p>Students with B Grades</p>
              <p className="text-blue-400 font-semibold text-sm">
                {stats.grades["B+"] + stats.grades["B-"]} students had B this
                semester
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
