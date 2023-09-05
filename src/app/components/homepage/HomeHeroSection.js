import { SiHashnode, SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

const HomeHeroSection = () => {
  return (
    <>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Frontend Developer, Absolute JavaScrpt Enthusiast, and Tech Blogger.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Bobby an enthusiastic and passionate Frontend developer focused on
          crafting clean and user friendly experiences. Good hands in responsive
          Web Design and analyzing and fixing bugs quickly. Proficiency in code
          optimization to improve the performance.
        </p>
        <div className="mt-6 flex gap-6">
          <a
            className="group -m-1 p-1"
            href="https://www.linkedin.com/in/bobby-sadhwani"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a
            className="group -m-1 p-1"
            href="https://github.com/Bobby-coder"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a
            className="group -m-1 p-1"
            href="https://bobby-sadhwani.hashnode.dev"
            target="_blank"
            rel="noreferrer"
          >
            <SiHashnode className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a
            className="group -m-1 p-1"
            href="https://twitter.com/BOBBY__SADHWANI"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
