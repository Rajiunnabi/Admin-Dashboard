

const SingleStats = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-whiteSecondary flex w-[300px] h-28 shadow-custom-white border-1 border-white flex items-center justify-between px-4 hover:scale-105 hover:ease-linear hover:duration-200 cursor-pointer">
      <div>
        <h3 className="text-blackPrimary text-xl font-bold">{title}</h3>
        <p className="text-blackPrimary text-2xl font-bold">{value}</p>
      </div>
      <img
        src="/assets/valueGraph.svg"
        alt="Value Graph"
        className="w-32"
      />
    </div>
  );
};
export default SingleStats;
