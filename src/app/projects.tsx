"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Routine Management System for DoECE Pulchowk Campus",
    desc: "I worked on the project which was essential for managing the Routine of teacher and classes of our department",
    github:"https://github.com/shahchhatru/routine-mis"
  },
  {
    img: "/image/blog2.svg",
    title: "Video Event Describer",
    desc: "Work on an AI model that would understand the video events and generate description for it",
    github: "https://github.com/shahchhatru/Video-Caption-Generator"    
  },
  {
    img: "/logos/logo-kubernetes.svg",
    title: "Scalable microservices artitecture using kubernetes",
    desc: "Played around with kubernetes to build a microservice artitecture",
    github: "https://github.com/shahchhatru/ems-k8s/tree/main"
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
    github: "#"
  },
 
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }} variant="h2" color="blue-gray" className="mb-4">
          Featured Projects
        </Typography>
        <Typography placeholder=""
  onPointerEnterCapture={() => { }}
  onPointerLeaveCapture={() => { }}
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Explore a diverse range of projects that demonstrate my skills across various disciplines. Whether it’s AI or application development, each project tells a story of collaboration, problem-solving, and a passion for excellence.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
