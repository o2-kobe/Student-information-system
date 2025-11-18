import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateStudent } from "../store/slices/studentsSlice";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { students } = useAppSelector((state) => state.students);
  const [studentName, setStudentName] = useState("");
  const [departmentID, setDepartmentID] = useState("");

  useEffect(() => {
    if (!id) return;
    const student = students.find((s) => s.studentID === Number(id));
    if (student) {
      setStudentName(student.studentName);
      setDepartmentID(String(student.departmentID));
    }
  }, [id, students]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(
        updateStudent({
          studentID: Number(id),
          studentName,
          departmentID: Number(departmentID),
        })
      );
      navigate("/students");
    } catch (err) {
      if (err instanceof Error) alert("Failed to update student");
    }
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-2xl font-semibold mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName">Student Name</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="studentName"
              name="studentName"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="departmentID">Department ID</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="departmentID"
              name="departmentID"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={departmentID}
              onChange={(e) => setDepartmentID(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 py-1 w-full cursor-pointer px-3 items-center rounded-md hover:bg-blue-400 bg-blue-500 text-white text-lg"
        >
          Update Student
        </button>
      </form>
    </div>
  );
};
export default EditStudent;
