import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addCourse } from "../store/slices/coursesSlice";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [courseID, setCourseID] = useState("");
  const [courseName, setCourseName] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(addCourse({ courseID: Number(courseID), courseName }));
      navigate("/courses");
    } catch (err) {
      if (err instanceof Error) alert("Failed to add course");
    }
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseID">Course ID</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="courseID"
              name="courseID"
              placeholder="Enter Course ID"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={courseID}
              onChange={(e) => setCourseID(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="courseName">Course Name</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="courseName"
              name="courseName"
              placeholder="Enter Course Name"
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
          Add Course
        </button>
      </form>
    </div>
  );
};
export default CreateCourse;
