interface ThanksProps {
  rating: number | null
}
const Thanks = ({rating}:ThanksProps) => {
  return (
    <div className="flex flex-col justify-around items-center h-full w-full">
      <div className="flex justify-center items-center">
        <img src="./images/illustration-thank-you.svg" alt="" />
      </div>
      <div className="flex items-center justify-center py-2 px-[25px] bg-[#252d37] text-[#fb7413] rounded-[50px]">
        <p>{`You selected ${rating} out of 5`}</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold mb-4">Thank you</h1>
        <p className="text-[16px] text-center text-[#959eac] leading-6 w-[366px]">
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default Thanks
