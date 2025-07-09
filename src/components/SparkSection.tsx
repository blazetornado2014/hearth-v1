import sparkIcon from "@/assets/spark-icon.png";

const SparkSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-800 overflow-hidden flex items-center">
      {/* Storm-lit sky atmosphere */}
      <div className="absolute inset-0 opacity-30">
        {/* Electric storm clouds */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-slate-900/40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-radial from-blue-400/15 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Crackling aether particles */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-violet-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-purple-300 rounded-full animate-ping delay-1500"></div>
        
        {/* Electric web lines */}
        <div className="absolute top-32 left-10 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 right-16 w-32 h-0.5 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent animate-pulse delay-700 opacity-50"></div>
        <div className="absolute top-2/3 left-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse delay-1200 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Elemental Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Crackling storm nexus */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={sparkIcon} 
                  alt="Electric storm nexus" 
                  className="w-64 h-64 opacity-70 animate-pulse filter drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' }}
                />
              </div>
              
              {/* Electric storm formation */}
              <div className="absolute inset-0">
                {/* Central electric core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                
                {/* Lightning branches - more organic */}
                <div className="absolute top-8 left-1/2 w-1.5 h-40 bg-gradient-to-b from-cyan-300 via-violet-300 to-transparent rotate-12 animate-pulse origin-top opacity-80 blur-sm"></div>
                <div className="absolute bottom-8 left-1/2 w-1 h-32 bg-gradient-to-t from-blue-300 via-purple-300 to-transparent -rotate-6 animate-pulse delay-300 origin-bottom opacity-70 blur-sm"></div>
                
                {/* Crackling branches */}
                <div className="absolute top-16 left-1/4 w-0.5 h-20 bg-gradient-to-b from-cyan-400 to-transparent rotate-45 animate-pulse delay-500 origin-top opacity-60"></div>
                <div className="absolute top-24 right-1/4 w-0.5 h-16 bg-gradient-to-b from-violet-400 to-transparent -rotate-30 animate-pulse delay-800 origin-top opacity-50"></div>
                
                {/* Electric aura rings */}
                <div className="absolute inset-0 border border-cyan-400/30 rounded-full animate-ping"></div>
                <div className="absolute inset-8 border border-violet-400/20 rounded-full animate-ping delay-500"></div>
                <div className="absolute inset-16 border border-blue-400/15 rounded-full animate-ping delay-1000"></div>
              </div>
            </div>

            {/* Storm glow */}
            <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Sacred Text - Right */}
          <div className="text-left max-w-xl">
            {/* Elemental Headline */}
            <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              <span className="text-slate-200">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-medium">
                Spark
              </span>
              <span className="block text-slate-200">Your Electric Guide</span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
              When confusion clouds your path, Spark offers electric clarity. This companion doesn't give you answers — 
              it illuminates questions you didn't know you had. Quick insights, gentle revelations, 
              and the perfect moment of "aha" when everything clicks into place.
            </p>

            {/* Elemental Qualities */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-cyan-300">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Lightning-Fast Insights</span>
              </div>
              <div className="flex items-center gap-4 text-violet-300">
                <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse delay-200 shadow-lg shadow-violet-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Pattern Recognition</span>
              </div>
              <div className="flex items-center gap-4 text-blue-300">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-400 shadow-lg shadow-blue-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Gentle Revelations</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400 mb-4">Ready to meet your electric companion?</p>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-violet-400/20 border border-white/20 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Continue to Loom →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;