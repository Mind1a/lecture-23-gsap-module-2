import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const Hero = () => {
  const videoRef = useRef();
  const containerRef = useRef();
  // const isMobile = useMed

  useGSAP(
    () => {
      const heroSplit = new SplitText(".title", {
        type: "chars",
      });

      const paragraphSplit = new SplitText(".subtitle", {
        type: "lines",
      });

      // Animate title characters
      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
      });

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });

      // Video timelline

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "center 60%",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      if (videoRef.current) {
        videoRef.current.onloadedmetadata = () => {
          tl.to(videoRef.current, {
            currentTime: videoRef.current.duration || 0,
          });
        };
      }
    },

    // wait for video to load metadata

    { scope: containerRef }
  );

  return (
    <>
      <section
        ref={containerRef}
        id="hero"
        className="relative noisy z-10 min-h-dvh w-full overflow-hidden"
      >
        {/* Title */}
        <h1 className="title md:mt-32 mt-40 text-8xl md:text-[20vw] leading-none text-center font-modern-negra relative z-20">
          MOJITO
        </h1>

        {/* Left Leaf */}
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        {/* Right Leaf */}
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        {/* Body Content */}
        <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5 z-20 max-w-7xl w-full">
          <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle font-modern-negra text-6xl text-yellow max-w-xl">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full text-left">
              <p className="subtitle 2xl:text-start text-center">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a
                href="#cocktails"
                className="font-semibold opacity-80 2xl:text-start text-center hover:text-yellow block"
              >
                View cocktails
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Background - Separate from hero section like the old version */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
          className="w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover"
        />
      </div>
    </>
  );
};

export default Hero;
