import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const useHomeAbout = ({ style }) => {
  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      // const door = self.selector(`.${style.door_item}`);

      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: main.current,
      //     end: "300%",
      //     scrub: 0.8,
      //     pin: main.current,
      //   },
      // });


      // door.map((item, i)=>{
      //     gsap.set(item, {transformOrigin: "bottom" , scale: 1 - (i * .1)});
      //     tl.to(item, {
      //       scale: 11 + (door.length - (i*2)),
      //     }, "<");
      // })
    }, main);

    return () => ctx.revert();
  }, []);

  return {
    main
  };
};

export default useHomeAbout;
