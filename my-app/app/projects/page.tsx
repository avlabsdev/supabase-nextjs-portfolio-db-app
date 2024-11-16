import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Image from "next/image";

export default async function Projects() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Projects:</h1>
      <ul className="list-disc">
        {projects &&
          projects.map((project) => (
            <li key={project.id} className="flex flex-col gap-2">
              <img
                src={project.imgUrl}
                alt={project.title}
                width={200}
                height={200}
              />
              <span className="text-lg font-bold">{project.title}</span>
              <Link
                className="bg-green-500 w-fit py-2 px-4 rounded-xl text-white font-semibold"
                href={project.url}
                target="_blank"
              >
                Live Demo
              </Link>
              <span className="text-lg font-bold">{project.description}</span>
            </li>
          ))}
      </ul>
      <Link
        href="/"
        className="bg-blue-500 w-fit py-4 px-8 rounded-xl text-white font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}
