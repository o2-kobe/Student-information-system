import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateDepartment } from "../store/slices/departmentsSlice";

const EditDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { departments } = useAppSelector((state) => state.departments);
  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");

  useEffect(() => {
    if (!id) return;
    const department = departments.find((d) => d.departmentID === Number(id));
    if (department) {
      setDepartmentName(department.departmentName);
      setDepartmentHead(department.departmentHead);
    }
  }, [id, departments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(
        updateDepartment({
          departmentID: Number(id),
          departmentName,
          departmentHead,
        })
      );
      navigate("/departments");
    } catch (err) {
      if (err instanceof Error) alert("Failed to update department");
    }
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-2xl font-semibold mb-4">Edit Department</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="departmentName">Department Name</label>
          <br />
          <div className="w-full border border-gray-300 rounded-md mt-1">
            <input
              type="text"
              id="departmentName"
              name="departmentName"
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
          Update Department
        </button>
      </form>
    </div>
  );
};
export default EditDepartment;
