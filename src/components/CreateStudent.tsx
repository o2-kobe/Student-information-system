import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addStudent } from "../store/slices/studentsSlice";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [studentName, setStudentName] = useState("");
  const [departmentID, setDepartmentID] = useState("");
  const [studentID, setStudentID] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(
        addStudent({
          studentID: Number(studentID),
          studentName: studentName,
          departmentID: Number(departmentID),
        })
      );
      navigate("/students");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message); // safe to access
      } else {
        alert("Failed to add student");
      }
    }
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-2xl font-semibold mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentID">Student ID</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="studentID"
              name="studentID"
              placeholder="Enter student's ID"
              className="bg-transparent outline-none w-full px-3 py-1 text-blue-500"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="studentName">Student Name</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="studentName"
              name="studentName"
              placeholder="Enter student's full Name"
              className="bg-transparent outline-none px-3 py-1 w-full text-blue-500"
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
              placeholder="Enter the Department ID"
              className="bg-transparent outline-none px-3 py-1 w-full text-blue-500"
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
          Add New Student
        </button>
      </form>
    </div>
  );
};
export default CreateStudent;
