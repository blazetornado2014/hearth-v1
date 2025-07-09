import pathHorizon from "@/assets/path-horizon.png";
import { Button } from "@/components/ui/button";

const PathSection = () => {
  return (
    <section className="relative py-20 bg-gradient-path-bg overflow-hidden">
      {/* Simplified horizon atmosphere */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-path-green/6 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-radial from-path-sage/4 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Subtle constellation points */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-path-green/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-path-sage/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Path navigation visualization */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-path rounded-full animate-grow-gentle shadow-lg shadow-path-green/30"></div>
                
                {/* Navigation paths */}
                <svg className="w-full h-full opacity-50" viewBox="0 0 320 320">
                  <path
                    d="M80 240 Q160 160 240 80"
                    stroke="hsl(var(--path-green) / 0.6)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8,6"
                    className="animate-path-emerge"
                  />
                  <path
                    d="M100 160 L220 160"
                    stroke="hsl(var(--path-sage) / 0.4)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-path-emerge delay-500"
                  />
                  <path
                    d="M160 100 L160 220"
                    stroke="hsl(var(--path-green) / 0.3)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4,3"
                    className="animate-path-emerge delay-1000"
                  />
                </svg>
                
                {/* Direction indicators */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-path-green rounded-full animate-horizon-drift"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-path-sage rounded-full animate-grow-gentle delay-300"></div>
                <div className="absolute top-2/3 right-1/2 w-1 h-1 bg-path-green rounded-full animate-horizon-drift delay-700"></div>
                
                {/* Compass rings */}
                <div className="absolute inset-0 border border-path-green/15 rounded-full animate-grow-gentle"></div>
                <div className="absolute inset-12 border border-path-sage/10 rounded-full animate-grow-gentle delay-500"></div>
              </div>
            </div>
            
            {/* Natural atmosphere */}
            <div className="absolute inset-0 bg-gradient-radial from-path-horizon/8 to-transparent rounded-full blur-2xl animate-horizon-drift"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              <span className="text-muted-foreground">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-path font-medium">
                Path
              </span>
              <span className="block text-muted-foreground">Your Gentle Navigator</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
              After processing with Loom, Path offers gentle guidance. This companion doesn't push or rush — 
              it simply shows you the next right step. Like ancient trails that know the way, 
              Path helps you trust your own inner compass and move forward with confidence.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-path rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Gentle Guidance</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-path rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Natural Navigation</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-path rounded-full animate-pulse delay-600"></div>
                <span className="text-sm font-medium">Inner Compass</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Ready to take inspired action?</p>
              <Button variant="outline" className="hover:bg-accent/10 transition-colors">
                Meet Forge →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;