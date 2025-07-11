const Error404 = () => {
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <div>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-2">Page Not Found</p>
        <a href="/" className="text-blue-500 underline mt-4 block">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default Error404;
