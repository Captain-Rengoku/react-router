import { useNavigate, useParams } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  // To captures everything after "/"
  const { "*": splat } = useParams();

  return (
    <div className="flex flex-col w-screen items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <p className="text-lg mb-2 text-red-300">
        Unmatched path: <code className="text-red-400">{splat}</code>
      </p>
      <p className="text-lg mb-8 text-gray-400 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-xl transition-all"
      >
        Go Back
      </button>
      <p className="text-gray-400 text-lg mt-24 sm:max-w-240">
        This NotFound component acts as a fallback for any route that doesn't
        match existing paths. I use React Router's useParams hook to capture the
        unmatched portion of the URL via the special '*' parameter, and display
        it for debugging or information. I also use the useNavigate hook to
        programmatically navigate back one step in the browser history when the
        user clicks the 'Go Back' button.
      </p>
    </div>
  );
};

export default NotFound;
