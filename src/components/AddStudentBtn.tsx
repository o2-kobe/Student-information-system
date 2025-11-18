type AddStudentBtnProps = {
  onClick: () => void;
  children: string;
};

const AddStudentBtn = ({ onClick, children }: AddStudentBtnProps) => {
  return (
    <div className="mt-5 flex ">
      <button
        onClick={onClick}
        title="Add new student"
        className={`${
          children === "+" ? "text-3xl" : ""
        } py-1 ml-auto cursor-pointer px-3 items-center rounded-md hover:bg-blue-400 bg-blue-500 text-white`}
      >
        {children}
      </button>
    </div>
  );
};
export default AddStudentBtn;
