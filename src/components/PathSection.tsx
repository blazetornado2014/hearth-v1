import pathHorizon from "@/assets/path-horizon.png";

const PathSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-700 via-emerald-900 to-slate-800 overflow-hidden flex items-center">
      {/* Twilight forest atmosphere */}
      <div className="absolute inset-0 opacity-35">
        {/* Windswept dunes and forest mist */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/20 via-teal-800/30 to-slate-800/40"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-radial from-emerald-400/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-radial from-teal-400/6 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Constellation points */}
        <div className="absolute top-24 left-24 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-teal-300 rounded-full animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-green-300 rounded-full animate-pulse delay-1500 opacity-50"></div>
        <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-sage-300 rounded-full animate-pulse delay-2000 opacity-80"></div>
        
        {/* Horizon lines and trail markers */}
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400/15 to-transparent animate-pulse delay-1000 opacity-25"></div>
        
        {/* Windswept particles */}
        <div className="absolute top-16 left-16 w-8 h-0.5 bg-gradient-to-r from-emerald-400/30 to-transparent animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-12 h-0.5 bg-gradient-to-l from-teal-400/25 to-transparent animate-pulse delay-700 opacity-35"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Constellation Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Twilight horizon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={pathHorizon} 
                  alt="Twilight path through ancient forest" 
                  className="w-64 h-64 opacity-60 animate-pulse filter drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(52, 211, 153, 0.15))' }}
                />
              </div>
              
              {/* Constellation map overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/30"></div>
                
                {/* Converging paths */}
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <path
                    d="M50 350 Q200 200 350 50"
                    stroke="rgba(52, 211, 153, 0.4)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="8,4"
                    className="animate-pulse"
                  />
                  <path
                    d="M50 50 Q200 200 350 350"
                    stroke="rgba(20, 184, 166, 0.3)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="6,3"
                    className="animate-pulse delay-1000"
                  />
                  <path
                    d="M100 200 L300 200"
                    stroke="rgba(34, 197, 94, 0.5)"
                    strokeWidth="2.5"
                    fill="none"
                    className="animate-pulse delay-2000"
                  />
                </svg>
                
                {/* Expanding guidance rings */}
                <div className="absolute inset-0 border border-emerald-400/15 rounded-full animate-pulse"></div>
                <div className="absolute inset-12 border border-teal-400/10 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute inset-24 border border-green-400/8 rounded-full animate-pulse delay-2000"></div>
              </div>
            </div>
            
            {/* Twilight glow */}
            <div className="absolute inset-0 bg-gradient-radial from-emerald-500/8 via-teal-500/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Sacred Text - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              <span className="text-slate-200">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-medium">
                Path
              </span>
              <span className="block text-slate-200">Your Gentle Navigator</span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
              After processing with Loom, Path offers gentle guidance. This companion doesn't push or rush — 
              it simply shows you the next right step. Like ancient trails that know the way, 
              Path helps you trust your own inner compass and move forward with confidence.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-emerald-300">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Gentle Guidance</span>
              </div>
              <div className="flex items-center gap-4 text-teal-300">
                <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse delay-700 shadow-lg shadow-teal-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Natural Navigation</span>
              </div>
              <div className="flex items-center gap-4 text-green-300">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse delay-1400 shadow-lg shadow-green-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Inner Compass</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-4">Ready to take inspired action?</p>
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border border-white/20 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Meet Forge →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;