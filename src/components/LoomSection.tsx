import loomThreads from "@/assets/loom-threads.png";

const LoomSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-800 via-indigo-800 to-slate-700 overflow-hidden flex items-center">
      {/* Mist and still water atmosphere */}
      <div className="absolute inset-0 opacity-40">
        {/* Ethereal mist layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-600/20 via-blue-800/30 to-slate-700/40"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-radial from-blue-400/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-400/6 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Ink drops in still water */}
        <div className="absolute top-32 left-32 w-2 h-2 bg-indigo-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-slate-300 rounded-full animate-pulse delay-1500 opacity-40"></div>
        
        {/* Silk threads flowing */}
        <div className="absolute top-40 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-400/15 to-transparent animate-pulse delay-1000 opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Fluid Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Ink swirling in water */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={loomThreads} 
                  alt="Ink swirling in still water" 
                  className="w-64 h-64 opacity-60 animate-pulse filter drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.2))' }}
                />
              </div>
              
              {/* Concentric ripples */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse shadow-lg shadow-blue-400/30"></div>
                
                {/* Flowing streams */}
                <div className="absolute top-0 left-1/2 w-0.5 h-20 bg-gradient-to-b from-blue-300 to-transparent animate-pulse opacity-60"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-24 bg-gradient-to-t from-indigo-300 to-transparent animate-pulse delay-500 opacity-50"></div>
                
                {/* Ripple rings */}
                <div className="absolute inset-0 border border-blue-400/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 border border-indigo-400/15 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute inset-16 border border-slate-400/10 rounded-full animate-pulse delay-2000"></div>
              </div>
            </div>
            
            {/* Soft mist glow */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/8 via-indigo-500/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Sacred Text - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              <span className="text-slate-200">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-medium">
                Loom
              </span>
              <span className="block text-slate-200">Your Emotional Weaver</span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
              After Spark illuminates, Loom helps you process. This companion creates space for your emotions 
              to unfold naturally — no rushing, no fixing, just gentle witnessing. 
              Like threads settling into patterns, your feelings find their place here.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-blue-300">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Emotional Processing</span>
              </div>
              <div className="flex items-center gap-4 text-indigo-300">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse delay-700 shadow-lg shadow-indigo-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Patient Witnessing</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full animate-pulse delay-1400 shadow-lg shadow-slate-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Natural Unfolding</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-4">When you're ready to find direction...</p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 border border-white/20 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Meet Path →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomSection;