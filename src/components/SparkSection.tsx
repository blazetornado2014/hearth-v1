import sparkIcon from "@/assets/spark-icon.png";

const SparkSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-spark-bg overflow-hidden flex items-center">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-spark-electric/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Element - Left */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Background spark icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={sparkIcon} 
                  alt="Spark element symbol" 
                  className="w-72 h-72 opacity-40 animate-electric-pulse"
                />
              </div>
              
              {/* Branching lightning visualization */}
              <div className="absolute inset-0">
                {/* Central pulse */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-spark rounded-full animate-electric-pulse shadow-lg shadow-spark-electric/50"></div>
                
                {/* Main lightning branches */}
                <div className="absolute top-12 left-1/2 w-1 h-32 bg-gradient-to-b from-spark-electric to-transparent rotate-12 animate-lightning-flicker origin-top opacity-80"></div>
                <div className="absolute bottom-12 left-1/2 w-0.5 h-24 bg-gradient-to-t from-spark-violet to-transparent -rotate-6 animate-lightning-flicker delay-300 origin-bottom opacity-70"></div>
                
                {/* Side branches */}
                <div className="absolute top-20 left-1/3 w-0.5 h-16 bg-gradient-to-b from-spark-electric to-transparent rotate-45 animate-lightning-flicker delay-500 origin-top opacity-60"></div>
                <div className="absolute top-32 right-1/3 w-0.5 h-12 bg-gradient-to-b from-spark-violet to-transparent -rotate-30 animate-lightning-flicker delay-800 origin-top opacity-50"></div>
                
                {/* Energy rings */}
                <div className="absolute inset-0 border border-spark-electric/20 rounded-full animate-electric-pulse"></div>
                <div className="absolute inset-8 border border-spark-violet/15 rounded-full animate-electric-pulse delay-500"></div>
                <div className="absolute inset-16 border border-spark-electric/10 rounded-full animate-electric-pulse delay-1000"></div>
              </div>
            </div>

            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-gradient-spark opacity-5 rounded-full blur-3xl animate-glow-pulse"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 leading-tight">
              Catch the
              <span className="block text-spark-electric font-medium">
                Spark
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-10">
              A flash of insight, a surge of emotional energy — the moment something shifts. 
              This is where ideas crackle into being, emotions are activated, 
              and conversations begin their dance.
            </p>

            {/* Element qualities */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-spark-electric">
                <div className="w-2 h-2 bg-spark-electric rounded-full animate-electric-pulse"></div>
                <span className="text-sm font-medium">Sudden Clarity</span>
              </div>
              <div className="flex items-center gap-3 text-spark-violet">
                <div className="w-2 h-2 bg-spark-violet rounded-full animate-electric-pulse delay-200"></div>
                <span className="text-sm font-medium">Inspiration</span>
              </div>
              <div className="flex items-center gap-3 text-spark-electric">
                <div className="w-2 h-2 bg-spark-electric rounded-full animate-electric-pulse delay-400"></div>
                <span className="text-sm font-medium">Initial Motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;