import { counterItems } from "../constants"
import CountUp from "react-countup"
import { useState, useEffect, useRef } from "react"

const AnimatedCounter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Optional: disconnect observer after first trigger
          // observer.disconnect()
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before fully visible
      }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32" ref={counterRef}>
        <div className="mx-auto grid-4-cols">
          {counterItems.map((item, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"> 
              <div className="counter-number text-white text-5xl font-bold mb-2">
                <CountUp 
                  suffix={item.suffix} 
                  end={isVisible ? item.value : 0} 
                  duration={2.5}
                  preserveValue={true}
                />
              </div>
              <div className="text-white-50 text-lg"> 
                {item.label}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default AnimatedCounter