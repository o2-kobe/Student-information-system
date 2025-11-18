import { FiSearch, FiTrash2, FiEdit } from "react-icons/fi";
import Table from "../components/Table";
import AddStudentBtn from "../components/AddStudentBtn";
import TableHeadings from "../components/TableHeadings";
import TableRow from "../components/TableRow";
import { capitalizeInitial } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteStudent } from "../store/slices/studentsSlice";
import DeleteAllBtn from "../components/DeleteAllBtn";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  type Student = {
    studentID: number;
    studentName: string;
    departmentID: number;
  };
  const columns: (keyof Student)[] = [
    "studentID",
    "studentName",
    "departmentID",
  ];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { students } = useAppSelector((state) => state.students);

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    dispatch(deleteStudent(id));
  };

  const handleDeleteAll = () => {
    if (!confirm("Delete ALL students?")) return;
    students.forEach((student) => dispatch(deleteStudent(student.studentID)));
  };

  const filteredStudents = students.filter((s) =>
    s.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full w-[80%]">
      <TableHeadings
        title="Student Information"
        summary="View and manage student information"
      />
      <div className="flex items-center gap-1 mt-5 py-2 px-3 bg-gray-100 w-full border border-blue-400  rounded-sm">
        <FiSearch size={15} style={{ color: "var(--color-blue-600)" }} />
        <input
          type="text"
          name="studentName"
          id="studentName"
          placeholder="Search students by name"
          className="text-gray-900 text-sm bg-transparent w-full outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Table columns={capitalizeInitial([...columns, "Actions"])}>
        <TableRow
          data={filteredStudents}
          keys={columns}
          actionRender={(row) => (
            <>
              <FiEdit
                className="cursor-pointer text-blue-500"
                onClick={() => navigate(`/students/edit/${row.studentID}`)}
              />
              <FiTrash2
                className="cursor-pointer text-red-500"
                onClick={() => handleDelete(row.studentID)}
              />
            </>
          )}
        />
      </Table>

      <AddStudentBtn onClick={() => navigate("/students/add-student")}>
        +
      </AddStudentBtn>
      <DeleteAllBtn onClick={handleDeleteAll} />
    </div>
  );
};
export default Students;
