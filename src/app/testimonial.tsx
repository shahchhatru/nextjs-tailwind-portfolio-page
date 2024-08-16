"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }} variant="h2" color="blue-gray" className="mb-4">
           Work Experience
          </Typography>
          <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
            >
            Discover my previous role about their experiences working
            with me. My Company&apos;s satisfaction with my work is my greatest achievement!
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row" placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}>
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between" placeholder=""
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}>
            <div className="w-full mb-10 lg:mb-0">
              <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                FullStack Web Fellow
              </Typography>
              <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }} className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                Full-Stack Fellow with hands-on experience in building and deploying scalable applications. Proficient in both front-end and back-end development, and skilled in CI/CD, containerization, and cloud infrastructure management.
              </Typography>
              <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }} variant="h6" color="blue-gray" className="mb-0.5">
               Gritfeat Solutions , Kritipur , Kathmandu
              </Typography>
              <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
               April-2024 to June-2024
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/logos/logo-ts.svg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer 
                    opacity-100`}
                  placeholder=""
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}

                  
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/logos/logo-react.svg"   
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer 
                    opacity-100`}
                  placeholder=""
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}
    
                  
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/logos/logo-nodejs.svg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer 
                    opacity-100`}
                  placeholder=""
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}
                  
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/logo-gritfeat.svg`}
                className="h-full rounded-lg w-full object-fit"
              />
            </div>
          </CardBody>
        </Card>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row" placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}>
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between " placeholder=""
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}>
            <div className="w-full mb-10 lg:mb-0">
              <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
               Software Test Engineer
              </Typography>
              <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }} className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                Experienced Software Test Engineer specializing in UI testing and enhancing user experience. Skilled in maintaining CI/CD pipelines and writing automation tests to ensure seamless software delivery
              </Typography>
              <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }} variant="h6" color="blue-gray" className="mb-0.5">
               Growthzilla , Remote , USA
              </Typography>
              <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                Agust-2024 to Present
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/logos/logo-ts.svg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer 
                    opacity-100`}
                  placeholder=""
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}

                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/selenium-logo.svg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer 
                    opacity-100`} 
                  placeholder=""
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}


                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/logos/logo-jest.svg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer 
                    opacity-100`}
                  placeholder=""
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}

                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/logos/growthzilla-logo.webp`}
                className="h-full rounded-lg w-full object-contain"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
