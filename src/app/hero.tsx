"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            {'\u{1F44B}'}   Hello There,<br/> Nice to Meet You!
          </Typography>
          <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m  Chhatra Bikram Shah, a dedicated software engineer from Nepal. I specialize in full-stack development  and have hands-on experience in AI projects and Quality Assurance. Explore my work and see how my skills can bring your ideas to life.
          </Typography>
          <div className="grid">
            <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}   
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]" placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}>
                require offer
              </Button>
            </div>
          </div>
          <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }} variant="small" className="font-normal !text-gray-500">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/chhatrapic.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
