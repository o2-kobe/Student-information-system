import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addDepartment } from "../store/slices/departmentsSlice";
import { useNavigate } from "react-router-dom";

const CreateDepartment = () => {
  const [departmentID, setDepartmentID] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(
        addDepartment({
          departmentID: Number(departmentID),
          departmentName,
          departmentHead,
        })
      );
      navigate("/departments");
    } catch (err) {
      if (err instanceof Error) alert("Failed to add department");
    }
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-2xl font-semibold mb-4">Add New Department</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="departmentID">Department ID</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="departmentID"
              name="departmentID"
              placeholder="Enter Department ID"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={departmentID}
              onChange={(e) => setDepartmentID(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="departmentName">Department Name</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="departmentName"
              name="departmentName"
              placeholder="Enter Department Name"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="departmentHead">Department Head</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="departmentHead"
              name="departmentHead"
              placeholder="Enter Department Head Name"
              className="bg-transparent outline-none px-3 py-1 text-blue-500"
              value={departmentHead}
              onChange={(e) => setDepartmentHead(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 py-1 w-full cursor-pointer px-3 items-center rounded-md hover:bg-blue-400 bg-blue-500 text-white text-lg"
        >
          Add Department
        </button>
      </form>
    </div>
  );
};
export default CreateDepartment;
