import forgeTools from "@/assets/forge-tools.png";

const ForgeSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-forge-bg overflow-hidden flex items-center">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-forge-copper/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Element - Left */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Background tools image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={forgeTools} 
                  alt="Workshop tools and building elements" 
                  className="w-72 h-72 opacity-40 animate-forge-build"
                />
              </div>
              
              {/* Structured building grid */}
              <div className="absolute inset-0">
                {/* Grid structure */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-8">
                  {/* Building blocks */}
                  <div className="bg-forge-charcoal/20 rounded-sm animate-forge-build delay-200"></div>
                  <div className="bg-forge-copper/15 rounded-sm animate-forge-build delay-400"></div>
                  <div className="bg-forge-earth/10 rounded-sm animate-forge-build delay-600"></div>
                  <div className="bg-forge-stone/25 rounded-sm animate-forge-build delay-800"></div>
                  <div className="bg-gradient-forge/30 rounded-sm animate-forge-build delay-1000"></div>
                  <div className="bg-forge-charcoal/15 rounded-sm animate-forge-build delay-1200"></div>
                  <div className="bg-forge-copper/20 rounded-sm animate-forge-build delay-1400"></div>
                  <div className="bg-forge-earth/25 rounded-sm animate-forge-build delay-1600"></div>
                  <div className="bg-forge-stone/15 rounded-sm animate-forge-build delay-1800"></div>
                </div>
                
                {/* Central focus point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-gradient-forge rounded-sm animate-radiant-glow shadow-lg"></div>
                </div>
              </div>

              {/* Radiant outline structure */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 border border-forge-copper/20 rounded-lg animate-radiant-glow"></div>
                <div className="absolute inset-4 border border-forge-earth/15 rounded-lg animate-radiant-glow delay-500"></div>
                <div className="absolute inset-8 border border-forge-charcoal/10 rounded-lg animate-radiant-glow delay-1000"></div>
              </div>
            </div>

            {/* Workshop glow */}
            <div className="absolute inset-0 bg-gradient-forge opacity-5 rounded-lg blur-3xl animate-radiant-glow"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 leading-tight">
              <span className="block text-forge-charcoal font-medium">Shape</span>
              <span className="block text-forge-copper">What You</span>
              <span className="block text-forge-earth">Imagine</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-10">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                The structured workshop where ideas from Spark are broken down into plans, 
                tasks, and focused momentum. Where action and execution take shape.
              </p>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light italic">
                Forge doesn't push you to hustle — it helps you act with intention, 
                like quiet focus in a workshop filled with natural light.
              </p>
            </div>

            {/* Creation aspects */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-forge-copper">
                <div className="w-2 h-2 bg-forge-copper rounded-sm animate-tool-rhythm"></div>
                <span className="text-sm font-medium">Break Down Ideas</span>
              </div>
              <div className="flex items-center gap-3 text-forge-earth">
                <div className="w-2 h-2 bg-forge-earth rounded-sm animate-tool-rhythm delay-500"></div>
                <span className="text-sm font-medium">Build Focused Plans</span>
              </div>
              <div className="flex items-center gap-3 text-forge-charcoal">
                <div className="w-2 h-2 bg-forge-charcoal rounded-sm animate-tool-rhythm delay-1000"></div>
                <span className="text-sm font-medium">Create with Intention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeSection;