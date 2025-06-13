export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br mt-4 from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} WACCBIP. All rights reserved.
              </p>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-400">Made with</span>
                <span className="text-red-400 animate-pulse text-lg">♥</span>
                <span className="text-slate-400">
                  for malaria research and surveillance
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700/30">
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-slate-500">
                <span>Advancing Healthcare Through Technology</span>
                <span className="hidden md:block">•</span>
                <span>Committed to Global Health Impact</span>
                <span className="hidden md:block">•</span>
                <span>Innovation in Malaria Prevention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
