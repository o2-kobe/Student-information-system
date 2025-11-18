import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateRegistration } from "../store/slices/registrationsSlice";

const EditRegistration = () => {
  const { studentID, courseID } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { registrations } = useAppSelector((state) => state.registrations);
  const [grade, setGrade] = useState("");

  useEffect(() => {
    if (!studentID || !courseID) return;
    const registration = registrations.find(
      (r) =>
        r.studentID === Number(studentID) && r.courseID === Number(courseID)
    );
    if (registration) {
      setGrade(registration.grade);
    }
  }, [studentID, courseID, registrations]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentID || !courseID) return;
    try {
      dispatch(
        updateRegistration({
          studentID: Number(studentID),
          courseID: Number(courseID),
          grade,
        })
      );
      navigate("/registrations");
    } catch (err) {
      if (err instanceof Error) alert("Failed to update registration");
    }
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-2xl font-semibold mb-4">Edit Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="grade">Grade</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="grade"
              name="grade"
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
          Update Registration
        </button>
      </form>
    </div>
  );
};
export default EditRegistration;
