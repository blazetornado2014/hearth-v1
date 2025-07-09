import forgeTools from "@/assets/forge-tools.png";
import { Button } from "@/components/ui/button";

const ForgeSection = () => {
  return (
    <section className="relative py-20 bg-forge-bg overflow-hidden">
      {/* Molten forge atmosphere */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-radial from-forge-copper/40 to-transparent rounded-full blur-2xl animate-radiant-glow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-radial from-forge-earth/30 to-transparent rounded-full blur-xl animate-forge-build"></div>
        
        {/* Molten sparks and embers */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-forge-copper rounded-full animate-tool-rhythm shadow-lg shadow-forge-copper/60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-radiant-glow delay-500 shadow-md shadow-primary/50"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-forge-copper rounded-full animate-tool-rhythm delay-700"></div>
        <div className="absolute bottom-1/2 left-1/3 w-1 h-1 bg-primary/80 rounded-full animate-forge-build delay-300"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Creative forge visualization */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-forge rounded-sm animate-forge-build shadow-lg shadow-forge-copper/30"></div>
                
                {/* Building blocks grid */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-8 opacity-30">
                  <div className="bg-forge-copper/40 rounded-sm animate-forge-build delay-100"></div>
                  <div className="bg-forge-earth/30 rounded-sm animate-forge-build delay-200"></div>
                  <div className="bg-forge-stone/35 rounded-sm animate-forge-build delay-300"></div>
                  <div className="bg-forge-earth/25 rounded-sm animate-forge-build delay-400"></div>
                  <div className="bg-forge-copper/20 rounded-sm animate-radiant-glow delay-500"></div>
                  <div className="bg-forge-charcoal/30 rounded-sm animate-forge-build delay-600"></div>
                  <div className="bg-forge-stone/25 rounded-sm animate-forge-build delay-700"></div>
                  <div className="bg-forge-earth/35 rounded-sm animate-forge-build delay-800"></div>
                  <div className="bg-forge-copper/30 rounded-sm animate-forge-build delay-900"></div>
                </div>
                
                {/* Creation sparks */}
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-forge-copper rounded-full animate-tool-rhythm"></div>
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-forge-earth rounded-full animate-radiant-glow delay-300"></div>
                <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-forge-copper rounded-full animate-tool-rhythm delay-600"></div>
                
                {/* Workshop borders */}
                <div className="absolute inset-0 border-2 border-forge-copper/15 rounded-lg animate-tool-rhythm"></div>
                <div className="absolute inset-6 border border-forge-earth/10 rounded-lg animate-radiant-glow delay-500"></div>
              </div>
            </div>
            
            {/* Workshop atmosphere */}
            <div className="absolute inset-0 bg-gradient-radial from-forge-stone/10 to-transparent rounded-lg blur-2xl animate-radiant-glow"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              <span className="text-forge-copper/90">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-forge font-medium text-6xl md:text-7xl">
                Forge
              </span>
              <span className="block text-white/90">Your Creative Partner</span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
              The final companion in your journey. Forge takes the insights from Spark, the processing from Loom, 
              and the direction from Path — and helps you create. Not through pressure or deadlines, 
              but through gentle, sustainable action that honors your natural rhythm.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-forge rounded-sm animate-tool-rhythm shadow-lg shadow-forge-copper/50"></div>
                <span className="text-sm font-medium">Gentle Creation</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-forge rounded-sm animate-radiant-glow delay-300 shadow-lg shadow-primary/40"></div>
                <span className="text-sm font-medium">Sustainable Action</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-forge rounded-sm animate-forge-build delay-600 shadow-lg shadow-forge-copper/40"></div>
                <span className="text-sm font-medium">Natural Rhythm</span>
              </div>
            </div>

            <div className="pt-8 border-t border-forge-copper/30 text-center">
              <p className="text-sm text-forge-copper italic mb-6 font-medium">
                "In the forge of creation, vision becomes reality"
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
              >
                Begin Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeSection;