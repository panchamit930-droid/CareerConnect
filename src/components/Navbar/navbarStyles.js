export const navbarStyles = {
  header:
    "sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300",

  container: "max-w-7xl mx-auto flex items-center justify-between px-6 py-4",

  logo: "flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-white",

  nav: "hidden md:flex items-center gap-8",

  navLink:
    "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium hover:-translate-y-0.5",

  activeNavLink:
    "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1",

  buttonContainer: "hidden md:flex items-center gap-3",

  loginBtn:
    "border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 px-5 py-2 rounded-full font-semibold",

  registerBtn:
    "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transition-all duration-300 text-white px-5 py-2 rounded-full shadow-md",

  menuBtn: "md:hidden text-3xl text-gray-700 dark:text-white",

  mobileMenu:
    "md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 transition-colors duration-300",

  mobileLink:
    "block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium",

  activeMobileLink: "block text-blue-600 dark:text-blue-400 font-semibold",
};
