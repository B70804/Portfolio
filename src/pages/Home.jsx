import profilePic from '../assets/profile-pic.jpeg';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        ></img>
        <h1 className="text-5xl md:text-7xl mb-6 font-bold text-purple-600">
          Hi, I'm Pik Qi
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 mx-auto">
          I'm a fresh graduate student that interested in Web Development
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="inline-flex justify-center items-center text-sm font-medium border-none rounded-md bg-violet-300 hover:bg-violet-400 text-white dark:text-black px-8 py-2">
            View My Work
          </a>
          <a href="#contact" className="inline-flex justify-center items-center text-sm font-medium border rounded-md bg-white hover:bg-gray-200 dark:bg-transparent dark:hover:bg-gray-500 dark:text-white px-8 py-2">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 dark:text-slate-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
