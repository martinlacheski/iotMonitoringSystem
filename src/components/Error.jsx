const Error = ({children}) => {
  return (
    <div>
      <div className="bg-red-600 text-white p-3 mb-3 font-bold text-center rounded-md uppercase">
      {children}
      </div>
    </div>
  );
};

export default Error;
