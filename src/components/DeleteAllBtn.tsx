type DeleteAllBtnProps = { onClick: () => void };

const DeleteAllBtn = ({ onClick }: DeleteAllBtnProps) => (
  <div className="mt-2 flex">
    <button
      onClick={onClick}
      className="py-1 ml-auto cursor-pointer px-3 items-center rounded-md hover:bg-red-400 bg-red-500 text-white"
    >
      Delete All
    </button>
  </div>
);

export default DeleteAllBtn;
