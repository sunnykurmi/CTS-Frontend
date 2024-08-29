import React from "react";

const LastStep = (props) => {
  return (
    <>
      <div className="w-full pb-10 h-full flex gap-5 flex-col items-center shadow-lg">
        <p className="upper text-2xl font-semibold">Other Details</p>
        <div className="w-[60%] flex justify-between items-center">
          <p className="font-medium">Family Income</p>
          <div className=" relative w-auto font-semibold gap-2 h-12 flex items-center justify-center">
            {["Less than 1 Lac", "1-5 Lac", "5-10 Lac", "more than 10 Lac"].map(
              (option) => (
                <button
                  key={option}
                  className={`w-24 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                    props.userInput.familyincome === option
                      ? "bg-[#F58612] text-white"
                      : "border-[#F58612]"
                  }`}
                  onClick={() =>
                    props.handleChange("familyincome")({
                      target: { value: option },
                    })
                  }
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
        <div className="w-[60%]  flex justify-between items-center">
          <p className="font-medium">Caste Category</p>
          <div className="   relative w-[55.5%] font-semibold gap-2 h-12 flex items-center ">
            {["OBC", "SC", "ST", "GEN", "OTHER"].map((option) => (
              <button
                key={option}
                className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                  props.userInput.caste === option
                    ? "bg-[#F58612] text-white"
                    : "border-[#F58612]"
                }`}
                onClick={() =>
                  props.handleChange("caste")({ target: { value: option } })
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="w-[60%] flex justify-between items-center">
          <p className="font-medium">Do you have any physical disabilities?</p>
          <div className="relative w-[55.5%] font-semibold gap-6 h-12 flex items-center ">
            <button
              className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.physicaldisabilities === "YES"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("physicaldisabilities")({
                  target: { value: "YES" },
                })
              }
            >
              YES
            </button>
            <button
              className={`w-20 h-full border-2 rounded-lg px-2 flex items-center justify-center ${
                props.userInput.physicaldisabilities === "NO"
                  ? "bg-[#F58612] text-white"
                  : "border-[#F58612]"
              }`}
              onClick={() =>
                props.handleChange("physicaldisabilities")({
                  target: { value: "NO" },
                })
              }
            >
              NO
            </button>
          </div>
        </div>
        {props.userInput.physicaldisabilities === "YES" && (
           <div className="w-[60%] flex justify-between items-center">
          <p className="font-medium">Please Specify disabilities <sub>(optional)</sub></p>
          <div className="cursor-pointer relative w-96 h-12 border-2 rounded-lg px-2 flex items-center justify-center border-[#F58612]">
          <input
            type="text"
     
            placeholder="Specify like Blindness, Deafness, etc"
            className="w-full h-full outline-none"
            name="physicaldisabilitiestype"
            onChange={props.handleChange("physicaldisabilitiestype")}
            
            id=""
          />
          </div>
          </div>
        )}
      </div>
    </>
  );
};
export default LastStep;
