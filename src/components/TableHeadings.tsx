type TableHeadingsProps = {
  title: string;
  summary: string;
};

const TableHeadings = ({ title, summary }: TableHeadingsProps) => {
  return (
    <>
      <h2 className="font-semibold tracking-normal text-2xl">{title}</h2>
      <p className="text-gray-400 text-xs my-2">{summary}</p>
    </>
  );
};
export default TableHeadings;
