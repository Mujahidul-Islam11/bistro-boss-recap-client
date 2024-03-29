import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
        )

    return (
        <div className="">
            <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1"><img className="md:h-[650px] w-full" src="https://i.postimg.cc/tghn3TqB/01.jpg" alt="" /></div>
        <div className="keen-slider__slide number-slide2"><img className="md:h-[650px] w-full" src="https://i.postimg.cc/1XY8mVB3/02.jpg" alt="" /></div>
        <div className="keen-slider__slide number-slide3"><img className="md:h-[650px] w-full" src="https://i.postimg.cc/50gHrRFv/03.png" alt="" /></div>
        <div className="keen-slider__slide number-slide4"><img className="md:h-[650px] w-full" src="https://i.postimg.cc/6qQ7xfdP/04.jpg" alt="" /></div>
        <div className="keen-slider__slide number-slide5"><img className="md:h-[650px] w-full" src="https://i.postimg.cc/3RrdHgbP/05.png" alt="" /></div>
        <div className="keen-slider__slide number-slide6"><img className="md:h-[650px] w-full" src="https://i.postimg.cc/HnVnrTmz/06.png" alt="" /></div>
      </div>
        </div>
    );
};

export default Banner;