import { useState } from "react"
import Rating from "./components/Rating"
import Thanks from "./components/Thanks"

const App = () => {
  const [showThanks, setShowThanks] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleSubmit = (rating:number) => {
    setSelectedRating(rating);
    setShowThanks(true)
  }
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="sm:w-[500px] sm:h-[500px] w-[405px] h-[545px] bg-gradient-to-b from-[#252d37] to-[#121417] rounded-4xl sm:p-9 py-9 px-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex flex-col justify-between ">

        {!showThanks
          ? (<Rating onSubmit={handleSubmit} />) 
          : (<Thanks rating={selectedRating} />)
        }
      </div>
    </div>
  )
}

export default App


