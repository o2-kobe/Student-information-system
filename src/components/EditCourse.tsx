import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateCourse } from "../store/slices/coursesSlice";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.courses);
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    if (!id) return;
    const course = courses.find((c) => c.courseID === Number(id));
    if (course) {
      setCourseName(course.courseName);
    }
  }, [id, courses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(
        updateCourse({
          courseID: Number(id),
          courseName,
        })
      );
      navigate("/courses");
    } catch (err) {
      if (err instanceof Error) alert("Failed to update course");
    }
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-2xl font-semibold mb-4">Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseName">Course Name</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="courseName"
              name="courseName"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 py-1 w-full cursor-pointer px-3 items-center rounded-md hover:bg-blue-400 bg-blue-500 text-white text-lg"
        >
          Update Course
        </button>
      </form>
    </div>
  );
};
export default EditCourse;
