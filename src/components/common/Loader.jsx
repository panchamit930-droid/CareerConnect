const Spinner = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">
        {text}
      </p>
    </div>
  );
};

export default Spinner;