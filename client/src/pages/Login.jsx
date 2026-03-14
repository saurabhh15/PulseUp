import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Star } from "lucide-react";
import gsap from "gsap";
import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  const headingRef = useRef();
  const textRef = useRef();
  const logoRef = useRef();
  const signInRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        headingRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.4",
      )
      .from(
        textRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6",
      )
      .from(
        signInRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      );
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
      <img
        src={assets.bgImage}
        alt="Bgimage"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
      />

      <div className="flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-35">
        <img
          ref={logoRef}
          src={assets.logo}
          alt="logo"
          className="h-28 md:h-30 object-contain self-start"
        />

        <div>
          <div className="flex items-center gap-3 mb-4 max-md:mt-10">
            <img
              src={assets.group_users}
              alt="group-users"
              className="h-8 md:h-10"
            />

            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 md:size-5 text-transparent fill-amber-500"
                    />
                  ))}
              </div>
              <p>Used by 10k+ developers</p>
            </div>
          </div>

          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-6xl leading-tight font-bold bg-linear-to-r from-indigo-950 to-indigo-700 bg-clip-text text-transparent"
          >
            More than just friends, truly connect.
          </h1>

          <p
            ref={textRef}
            className="text-xl md:text-3xl text-indigo-900 max-w-xs md:max-w-md leading-relaxed"
          >
            Connect to a global community on PulseUp.
          </p>
        </div>
        
        <span className="md:h-10"></span>
      </div>
      {/* Login Form */}

      <div ref={signInRef} className="flex flex-1 items-center justify-center p-6 sm:p-10">
        <SignIn/>
      </div>
    </div>
  );
};

export default Login;
