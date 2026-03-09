// import { FaMoneyBills } from "react-icons/fa6";
// import { FaDollarSign } from "react-icons/fa";
// import Input from "../Ui/Input";
// import ToggleSwitch from "../Ui/ToggleSwitch";

// export default function PricingAccess({ courseData, handleChange, errors }) {
//   return (
//     <section className="rounded-[12px] border border-borderCard flex flex-col">
//       {/* Icon + SubTitle */}
//       <div className="flex p-6 items-center gap-2">
//         <FaMoneyBills className="size-5 text-primary" />
//         <h2 className="font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-grayDark">
//           Pricing & Access
//         </h2>
//       </div>

//       <div className="flex flex-col p-6 pt-0">
//         <div className="flex flex-col gap-2 w-full">
//           <p className="font-semibold text-grayLabel text-[13px] sm:text-[14px] leading-[20px]">
//             Course Price
//           </p>

//           <div className="flex flex-col md:flex-row gap-6">
//             {/* Price Input */}
//             <div className="w-full">
//               <Input
//                 type="number"
//                 value={courseData.price}
//                 onChange={(e) => handleChange("price", e.target.value)}
//                 placeholder="0.00"
//                 icon={<FaDollarSign />}
//               />

//               {errors.price && (
//                 <span className="text-danger text-xs mt-1">{errors.price}</span>
//               )}

//               <p className="pt-2 text-textMuted text-[12px] leading-[16px]">
//                 Suggested price: $49.99 - $129.99 based on <br /> subject area.
//               </p>
//             </div>

//             {/* Free Toggle */}
//             <div className="w-full flex  gap-3">
//               <ToggleSwitch
//                 checked={courseData.isFree}
//                 onChange={(e) => handleChange("isFree", e.target.checked)}
//               />

//               <p className="font-medium text-grayLabel text-[14px] leading-[20px]">
//                 This is a free course
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { FaMoneyBills } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import Input from "../Ui/Input";
import ToggleSwitch from "../Ui/ToggleSwitch";

export default function PricingAccess({ courseData, handleChange, errors }) {
  // Logic: Show error only if the course is NOT free and an error exists
  const showPriceError = !courseData.isFree && errors.price;

  return (
    <section className="rounded-[12px] border border-borderCard flex flex-col bg-white">
      <div className="flex p-6 items-center gap-2">
        <FaMoneyBills className="size-5 text-primary" />
        <h2 className="font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-grayDark">
          Pricing & Access
        </h2>
      </div>

      <div className="flex flex-col p-6 pt-0">
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold text-grayLabel text-[13px] sm:text-[14px]">
            Course Price
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full">
              <Input
                type="number"
                value={courseData.isFree ? "" : courseData.price} // Clear value visually if free
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder={courseData.isFree ? "Free" : "0.00"}
                icon={<FaDollarSign />}
                disabled={courseData.isFree} // Disable input if free
                className={courseData.isFree ? "bg-gray-50" : ""}
              />

              {/* Error only shows if NOT free */}
              {showPriceError && (
                <span className="text-red-500 text-xs mt-1 block font-medium">
                  {errors.price}
                </span>
              )}

              <p className="pt-2 text-textMuted text-[12px]">
                Suggested price: $49.99 - $129.99 based on <br /> subject area.
              </p>
            </div>

            {/* Free Toggle Column */}
            <div className="w-full flex items-center gap-3 pt-2">
              <ToggleSwitch
                checked={courseData.isFree}
                onChange={(e) => handleChange("isFree", e.target.checked)}
              />
              <p className="font-medium text-grayLabel text-[14px]">
                This is a free course
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
