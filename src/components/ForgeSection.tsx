import { Button } from "@/components/ui/button";

const ForgeSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--forge-glow)'} as React.CSSProperties}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Forge Visualization */}
          <div className="relative">
            <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Molten core */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-forge rounded-sm animate-ember-glow glow-forge"></div>
                
                {/* Obsidian matrix */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1.5 sm:gap-2 md:gap-3 p-4 sm:p-6 md:p-8 opacity-40">
                  <div className="bg-forge-copper/45 rounded-sm animate-ember-glow" style={{animationDelay: '0.1s'}}></div>
                  <div className="bg-forge-obsidian/35 rounded-sm animate-molten-flow" style={{animationDelay: '0.2s'}}></div>
                  <div className="bg-forge-copper/40 rounded-sm animate-ember-glow" style={{animationDelay: '0.3s'}}></div>
                  <div className="bg-forge-obsidian/30 rounded-sm animate-molten-flow" style={{animationDelay: '0.4s'}}></div>
                  <div className="bg-forge-copper/25 rounded-sm animate-ember-glow" style={{animationDelay: '0.5s'}}></div>
                  <div className="bg-forge-obsidian/35 rounded-sm animate-molten-flow" style={{animationDelay: '0.6s'}}></div>
                  <div className="bg-forge-copper/30 rounded-sm animate-ember-glow" style={{animationDelay: '0.7s'}}></div>
                  <div className="bg-forge-obsidian/40 rounded-sm animate-molten-flow" style={{animationDelay: '0.8s'}}></div>
                  <div className="bg-forge-copper/35 rounded-sm animate-ember-glow" style={{animationDelay: '0.9s'}}></div>
                </div>
                
                {/* Molten sparks */}
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-forge-copper rounded-full animate-ember-glow"></div>
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-forge-obsidian rounded-full animate-molten-flow" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-forge-copper rounded-full animate-ember-glow" style={{animationDelay: '0.6s'}}></div>
                
                {/* Forge borders */}
                <div className="absolute inset-0 border-2 border-forge-copper/20 rounded-lg animate-ember-glow"></div>
                <div className="absolute inset-3 sm:inset-4 md:inset-6 border border-forge-obsidian/15 rounded-lg animate-molten-flow" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            {/* Forge aura */}
            <div className="absolute inset-0 bg-gradient-radial from-forge-copper/15 to-transparent rounded-lg blur-2xl animate-breathe-sanctuary"></div>
          </div>

          {/* Forge Wisdom */}
          <div className="text-left max-w-xl relative z-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-forge font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-ember-glow pb-2">
                Forge
              </span>
              <span className="block text-black">Your Creative Partner</span>
            </h2>

            <p className="text-base sm:text-lg text-black/90 leading-relaxed mb-6 md:mb-8">
              The final companion in your journey. Forge takes the insights from Spark, the processing from Loom, 
              and the direction from Path — and helps you create. Not through pressure or deadlines, 
              but through gentle, sustainable action that honors your natural rhythm.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 md:mb-8">
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-forge rounded-sm animate-ember-glow glow-forge"></div>
                <span className="text-xs sm:text-sm font-medium">Gentle Creation</span>
              </div>
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-3 h-3 bg-gradient-forge rounded-sm animate-molten-flow glow-forge" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium">Sustainable Action</span>
              </div>
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-3 h-3 bg-gradient-forge rounded-sm animate-ember-glow glow-forge" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium">Natural Rhythm</span>
              </div>
            </div>

            <div className="pt-8 border-t border-black/20 text-center">
              <blockquote className="text-xs sm:text-sm text-black/90 mb-4 sm:mb-6 border-none p-0 m-0 italic">
                "In the forge of creation, vision becomes reality"
              </blockquote>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-2xl shadow-sanctuary hover:shadow-depth transition-sanctuary hover:scale-105 glow-forge w-full sm:w-auto"
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
