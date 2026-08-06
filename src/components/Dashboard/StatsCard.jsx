const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            {value}
          </h2>
        </div>

        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 text-2xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
