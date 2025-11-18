import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addRegistration } from "../store/slices/registrationsSlice";
import { useNavigate } from "react-router-dom";

const CreateRegistration = () => {
  const [studentID, setStudentID] = useState("");
  const [courseID, setCourseID] = useState("");
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(
        addRegistration({
          studentID: Number(studentID),
          courseID: Number(courseID),
          grade,
        })
      );
      navigate("/registrations");
    } catch (err) {
      if (err instanceof Error) alert("Failed to add registration");
    }
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-2xl font-semibold mb-4">Add New Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentID">Student ID</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="studentID"
              name="studentID"
              placeholder="Enter Student ID"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              required
            />
          </div>
        </div>

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
          <label htmlFor="grade">Grade</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="grade"
              name="grade"
              placeholder="Enter Grade"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 py-1 w-full cursor-pointer px-3 items-center rounded-md hover:bg-blue-400 bg-blue-500 text-white text-lg"
        >
          Add Registration
        </button>
      </form>
    </div>
  );
};
export default CreateRegistration;
