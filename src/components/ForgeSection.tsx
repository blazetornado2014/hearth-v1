import { Button } from "@/components/ui/button";

const ForgeSection = () => {
  return (
    <section className="relative py-20 bg-forge-sanctuary overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--forge-glow)'} as React.CSSProperties}>
      {/* Obsidian and copper atmosphere */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-radial from-forge-copper/45 to-transparent rounded-full blur-2xl animate-ember-glow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-radial from-forge-obsidian/35 to-transparent rounded-full blur-xl animate-molten-flow"></div>
        
        {/* Molten embers */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-forge-copper rounded-full animate-ember-glow glow-forge"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-forge-obsidian rounded-full animate-molten-flow glow-forge" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-forge-copper rounded-full animate-ember-glow" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-1/2 left-1/3 w-1 h-1 bg-forge-obsidian rounded-full animate-molten-flow" style={{animationDelay: '0.3s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Forge Visualization */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Molten core */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-forge rounded-sm animate-ember-glow glow-forge"></div>
                
                {/* Obsidian matrix */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-8 opacity-40">
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
                <div className="absolute inset-6 border border-forge-obsidian/15 rounded-lg animate-molten-flow" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            {/* Forge aura */}
            <div className="absolute inset-0 bg-gradient-radial from-forge-copper/15 to-transparent rounded-lg blur-2xl animate-breathe-sanctuary"></div>
          </div>

          {/* Forge Wisdom */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              <span className="text-forge-copper whisper-text">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-forge font-normal text-6xl md:text-7xl animate-ember-glow">
                Forge
              </span>
              <span className="block text-foreground">Your Creative Partner</span>
            </h2>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              The final companion in your journey. Forge takes the insights from Spark, the processing from Loom, 
              and the direction from Path — and helps you create. Not through pressure or deadlines, 
              but through gentle, sustainable action that honors your natural rhythm.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-forge-copper">
                <div className="w-3 h-3 bg-gradient-forge rounded-sm animate-ember-glow glow-forge"></div>
                <span className="text-sm font-medium">Gentle Creation</span>
              </div>
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-forge-obsidian">
                <div className="w-3 h-3 bg-gradient-forge rounded-sm animate-molten-flow glow-forge" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium">Sustainable Action</span>
              </div>
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-forge-copper">
                <div className="w-3 h-3 bg-gradient-forge rounded-sm animate-ember-glow glow-forge" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium">Natural Rhythm</span>
              </div>
            </div>

            <div className="pt-8 border-t border-forge-copper/20 text-center">
              <blockquote className="text-sm text-forge-copper mb-6 border-none p-0 m-0 italic">
                "In the forge of creation, vision becomes reality"
              </blockquote>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-medium rounded-2xl shadow-sanctuary hover:shadow-depth transition-sanctuary hover:scale-105 glow-forge"
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