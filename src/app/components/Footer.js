import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className="mt-16 sm:mt-20">
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  <Link
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="https://www.linkedin.com/in/bobby-sadhwani"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="https://github.com/Bobby-coder"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                  <Link
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="https://bobby-sadhwani.hashnode.dev"
                    target="_blank"
                  >
                    Hashnode
                  </Link>
                  <Link
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="https://twitter.com/BOBBY__SADHWANI"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  {`© ${year} Bobby Sadhwani. All rights reserved.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
