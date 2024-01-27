import Link from "next/link";
import { SiHashnode, SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

const HomeHeroSection = () => {
  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Fullstack Developer, Absolute JavaScrpt Enthusiast, and Tech Blogger.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        A tech-savvy and competent MERN developer with a passion for developing clean and user-friendly experiences, possessing hands-on expertise in responsive web design, bug analysis, rapid bug resolution, and code optimization techniques.
        </p>
        <div className="mt-6 flex gap-6">
          <Link
            className="group -m-1 p-1"
            href="https://www.linkedin.com/in/bobby-sadhwani"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </Link>
          <Link
            className="group -m-1 p-1"
            href="https://github.com/Bobby-coder"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </Link>
          <Link
            className="group -m-1 p-1"
            href="https://bobby-sadhwani.hashnode.dev"
            target="_blank"
            rel="noreferrer"
          >
            <SiHashnode className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </Link>
          <Link
            className="group -m-1 p-1"
            href="https://twitter.com/BOBBY__SADHWANI"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
