// import { useEffect } from "react";
import Table from "../components/Table";
import TableHeadings from "../components/TableHeadings";
import TableRow from "../components/TableRow";
import { capitalizeInitial } from "../utils/helper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteRegistration } from "../store/slices/registrationsSlice";
import AddStudentBtn from "../components/AddStudentBtn";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteAllBtn from "../components/DeleteAllBtn";

const Registrations = () => {
  type Registration = {
    studentID: number;
    courseID: number;
    grade: string;
  };

  const columns: (keyof Registration)[] = ["studentID", "courseID", "grade"];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { registrations } = useAppSelector((state) => state.registrations);

  const handleDelete = (studentID: number, courseID: number) => {
    if (!confirm("Delete registration?")) return;
    dispatch(deleteRegistration({ studentID, courseID }));
  };

  const handleDeleteAll = () => {
    if (!confirm("Delete ALL registrations?")) return;
    registrations.forEach((registration) =>
      dispatch(
        deleteRegistration({
          studentID: registration.studentID,
          courseID: registration.courseID,
        })
      )
    );
  };

  return (
    <div className="h-full w-[80%]">
      <TableHeadings
        title="Registrations"
        summary="View and manage registrations"
      />
      <Table columns={capitalizeInitial([...columns, "Actions"])}>
        <TableRow
          data={registrations}
          keys={columns}
          actionRender={(row) => (
            <>
              <FiEdit
                className="cursor-pointer text-blue-500"
                onClick={() =>
                  navigate(
                    `/registrations/edit/${row.studentID}/${row.courseID}`
                  )
                }
              />
              <FiTrash2
                className="cursor-pointer text-red-500"
                onClick={() => handleDelete(row.studentID, row.courseID)}
              />
            </>
          )}
        />
      </Table>

      <AddStudentBtn
        onClick={() => navigate("/registrations/add-registration")}
      >
        +
      </AddStudentBtn>
      <DeleteAllBtn onClick={handleDeleteAll} />
    </div>
  );
};
export default Registrations;
