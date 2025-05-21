//src/components/shared/footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 border-t border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p>
              Data provided by{" "}
              <a
                href="https://www.freetogame.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky-400 hover:text-sky-300 hover:underline transition-colors duration-200"
              >
                FreeToGame.com
              </a>
              .
            </p>
            <p>This project is for educational & demonstration purposes.</p>
          </div>
          <p className="text-slate-500">
            © {new Date().getFullYear()} FreeToGame. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
