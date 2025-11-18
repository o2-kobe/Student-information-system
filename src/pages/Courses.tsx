import Table from "../components/Table";
import TableHeadings from "../components/TableHeadings";
import TableRow from "../components/TableRow";
import { capitalizeInitial } from "../utils/helper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteCourse } from "../store/slices/coursesSlice";
import AddStudentBtn from "../components/AddStudentBtn";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import DeleteAllBtn from "../components/DeleteAllBtn";

type Course = {
  courseID: number;
  courseName: string;
};

const Courses = () => {
  const columns: (keyof Course)[] = ["courseID", "courseName"];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector((state) => state.courses);

  const handleDelete = (id: number) => {
    if (!confirm("Delete course?")) return;
    dispatch(deleteCourse(id));
  };

  const handleDeleteAll = () => {
    if (!confirm("Delete ALL courses?")) return;
    courses.forEach((course) => dispatch(deleteCourse(course.courseID)));
  };

  return (
    <div className="w-[80%]">
      <TableHeadings title="Courses" summary="View courses their details" />
      <Table columns={capitalizeInitial([...columns, "Actions"])}>
        <TableRow
          data={courses}
          keys={columns}
          actionRender={(row) => (
            <>
              <FiEdit
                className="cursor-pointer text-blue-500"
                onClick={() => navigate(`/courses/edit/${row.courseID}`)}
              />
              <FiTrash2
                className="cursor-pointer text-red-500"
                onClick={() => handleDelete(row.courseID)}
              />
            </>
          )}
        />
      </Table>

      <AddStudentBtn onClick={() => navigate("/courses/add-course")}>
        +
      </AddStudentBtn>
      <DeleteAllBtn onClick={handleDeleteAll} />
    </div>
  );
};
export default Courses;
