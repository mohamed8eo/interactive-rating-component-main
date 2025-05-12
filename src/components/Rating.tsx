import { useState } from "react";

interface RatingProps {
  onSubmit: (rating: number) => void
}

const Rating = ({ onSubmit }: RatingProps) => {
  const numbers = [1, 2, 3, 4, 5];
  const [selected, setSelected] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selected !== null) {
      onSubmit(selected)
    }
  }
    return (
      <>
        <div className="w-[55px] h-[55px] flex justify-center items-center p-3.5 rounded-full bg-[#252d37]">
          <img src="./images/icon-star.svg" alt="Star Icon" className="w-[18px]"/>
        </div>
      <div className="flex flex-col gap-2.5">
        <h1 className="font-[700] text-white text-4xl">How did you do?</h1>
        <p className="text-[#959eac] font-[400] text-[15px]"> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
      </div>
      <ul className="flex flex-row justify-around">
          {
            numbers.map((number, index) => (
              <li 
                key={index} 
                onClick={() => setSelected(number)}
                className={`
                  text-white text-[16px] w-[65px] h-[65px] font-[400] rounded-full 
                  flex justify-center items-center cursor-pointer
                  transition-colors duration-200 ease-in-out
                  ${selected === number 
                    ? 'bg-[#fb7413] text-white' 
                    : 'bg-[#252d37] hover:bg-white hover:text-[#252d37]'
                  }
                `}
              >
                {number}
              </li>
            ))
          }
      </ul>
      <div onClick={handleSubmit} className="bg-[#fb7413] rounded-[50px] hover:bg-white transition-colors duration-200 ease-in-out  ">
        <span className=" uppercase text-whit flex justify-center items-center w-full font-[16px] pt-4 pb-4 cursor-pointer tracking-[2px] ">Submit</span>
      </div>
      </>
  );
}

export default Rating