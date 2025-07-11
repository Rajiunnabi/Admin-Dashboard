import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import {
  ImageUpload,
  InputWithLabel,
  Sidebar,
  SimpleInput,
  WhiteButton,
  TextAreaInput,
} from "../components";
import { useState } from "react";

const EditReview = () => {
  const [inputObject, setInputObject] = useState({
    product: "Samsung Galaxy S21 Ultra 5G",
    rating: 5,
    reviewText: "Great phone, I love it!",
  });

  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Edit Review
              </h2>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 w-48 py-2 text-lg dark:hover:border-gray-500 hover:border-gray-400 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineSave className="dark:text-whiteSecondary text-blackPrimary text-xl" />
                <span className="dark:text-whiteSecondary text-blackPrimary font-medium">
                  Save Review
                </span>
              </button>
              <WhiteButton
                link="/reviews"
                textSize="lg"
                width="48"
                py="2"
                text="Update review"
              >
                <HiOutlineSave className="dark:text-blackPrimary text-whiteSecondary text-xl" />
              </WhiteButton>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-2 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
            {/* Review Details */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Review Details
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Product to rate">
                  <SimpleInput
                    type="text"
                    placeholder="Search a product to rate..."
                    value={inputObject.product}
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        product: e.target.value,
                      })
                    }
                  />
                </InputWithLabel>

                <InputWithLabel label="Rating">
                  <SimpleInput
                    type="number"
                    placeholder="Enter a rating (1-5)..."
                    value={inputObject.rating}
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        rating: Number(e.target.value),
                      })
                    }
                  />
                </InputWithLabel>

                <InputWithLabel label="Review Text">
                  <TextAreaInput
                    placeholder="Enter review text..."
                    value={inputObject.reviewText}
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        reviewText: e.target.value,
                      })
                    }
                  />
                </InputWithLabel>
              </div>
            </div>

            {/* Upload Review Image */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Upload review images
              </h3>
              <ImageUpload />

              <div className="flex justify-center gap-x-2 mt-5 flex-wrap">
                <img
                  src="/assets/phone 1.jpg"
                  alt=""
                  className="w-36 h-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditReview;
