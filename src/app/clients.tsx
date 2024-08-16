'use client';
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "react",
  "huggingface",
  "aws",
  "golang",
  "kubernetes",
  "nodejs",
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-8"
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
        >
          Some technologies I often use
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <div className="flex gap-2 flex-col" key={key}>
              <Image
                alt={logo}
                width={400}
                height={400}
                className="w-40 scale-50"
                src={`/logos/logo-${logo}.svg`}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-8 opacity-50"
                placeholder=""
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
              >
                {logo}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
