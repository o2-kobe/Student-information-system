import Table from "../components/Table";
import TableHeadings from "../components/TableHeadings";
import TableRow from "../components/TableRow";
import { capitalizeInitial } from "../utils/helper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteDepartment } from "../store/slices/departmentsSlice";
import AddStudentBtn from "../components/AddStudentBtn";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteAllBtn from "../components/DeleteAllBtn";

type DepartmentType = {
  departmentID: number;
  departmentName: string;
  departmentHead: string;
};

const Department = () => {
  const columns: (keyof DepartmentType)[] = [
    "departmentID",
    "departmentHead",
    "departmentName",
  ];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { departments } = useAppSelector((state) => state.departments);

  const handleDelete = (id: number) => {
    if (!confirm("Delete department?")) return;
    dispatch(deleteDepartment(id));
  };

  const handleDeleteAll = () => {
    if (!confirm("Delete ALL departments?")) return;
    departments.forEach((department) =>
      dispatch(deleteDepartment(department.departmentID))
    );
  };

  return (
    <div className="w-[80%]">
      <TableHeadings
        title="Departments"
        summary="View Departments their details"
      />
      <Table columns={capitalizeInitial([...columns, "Actions"])}>
        <TableRow
          data={departments}
          keys={columns}
          actionRender={(row) => (
            <>
              <FiEdit
                className="cursor-pointer text-blue-500"
                onClick={() =>
                  navigate(`/departments/edit/${row.departmentID}`)
                }
              />
              <FiTrash2
                className="cursor-pointer text-red-500"
                onClick={() => handleDelete(row.departmentID)}
              />
            </>
          )}
        />
      </Table>

      <AddStudentBtn onClick={() => navigate("/departments/add-department")}>
        +
      </AddStudentBtn>
      <DeleteAllBtn onClick={handleDeleteAll} />
    </div>
  );
};
export default Department;
