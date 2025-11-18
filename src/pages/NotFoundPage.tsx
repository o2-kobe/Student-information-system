import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-4xl mt-[20%]">
      <div>404 | Page Not found</div>

      <div>
        <Link to="/" className="text-sm text-blue-400">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
