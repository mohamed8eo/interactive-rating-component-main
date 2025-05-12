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
      <div className="w-[500px] h-[500px] bg-gradient-to-b from-[#252d37] to-[#121417] rounded-4xl p-9 shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex flex-col justify-between">

        {!showThanks
          ? (<Rating onSubmit={handleSubmit} />) 
          : (<Thanks rating={selectedRating} />)
        }
      </div>
    </div>
  )
}

export default App


