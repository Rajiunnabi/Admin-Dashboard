import { FaApple, FaWindows, FaAndroid, FaLinux, FaQuestion } from "react-icons/fa6";
import SingleActivity from "./SingleActivity";

const Activities = () => {
  return (
    <div className="activity-main">
      <h4 className="text-2xl dark:text-whiteSecondary text-blackPrimary font-bold mb-7 max-[440px]:text-center">
        Activity by devices
      </h4>
      <div className="w-full flex flex-col gap-y-4 
                      max-[440px]:grid 
                      max-[440px]:grid-cols-2 
                      max-[440px]:place-items-center 
                      max-[390px]:grid-cols-1">
        
        <SingleActivity
          mainTitle="Apple devices"
          totalVisitors="5,200"
          totalMoney="$2300,20"
          percent="+20%"
        >
          <FaApple className="dark:text-blackPrimary text-whiteSecondary text-3xl" />
        </SingleActivity>

        <SingleActivity
          mainTitle="Windows devices"
          totalVisitors="2,200"
          totalMoney="$1100,30"
          percent="+5%"
        >
          <FaWindows className="dark:text-blackPrimary text-whiteSecondary text-3xl" />
        </SingleActivity>

        <SingleActivity
          mainTitle="Android devices"
          totalVisitors="7,200"
          totalMoney="$7100,99"
          percent="+105%"
        >
          <FaAndroid className="dark:text-blackPrimary text-whiteSecondary text-3xl" />
        </SingleActivity>

        <SingleActivity
          mainTitle="Linux devices"
          totalVisitors="103"
          totalMoney="$140"
          percent="-3%"
        >
          <FaLinux className="dark:text-blackPrimary text-whiteSecondary text-3xl" />
        </SingleActivity>

        <SingleActivity
          mainTitle="Mac devices"
          totalVisitors="1700"
          totalMoney="$10500"
          percent="+350%"
        >
          <FaApple className="dark:text-blackPrimary text-whiteSecondary text-3xl" />
        </SingleActivity>

        <SingleActivity
          mainTitle="Other"
          totalVisitors="1200"
          totalMoney="$1000"
          percent="+22%"
        >
          <FaQuestion className="dark:text-blackPrimary text-whiteSecondary text-3xl" />
        </SingleActivity>
      </div>
    </div>
  );
};

export default Activities;
