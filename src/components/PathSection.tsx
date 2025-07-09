import pathHorizon from "@/assets/path-horizon.png";
import { Button } from "@/components/ui/button";

const PathSection = () => {
  return (
    <section className="relative py-20 bg-path-bg overflow-hidden">
      {/* Clean natural atmosphere */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-path-emerald/20 to-transparent rounded-full blur-3xl animate-grow-gentle"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-radial from-path-mint/15 to-transparent rounded-full blur-2xl animate-horizon-drift"></div>
        
        {/* Natural growth elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-path-emerald rounded-full animate-grow-gentle shadow-sm shadow-path-emerald/30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-path-mint rounded-full animate-horizon-drift delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-path-emerald/80 rounded-full animate-grow-gentle delay-1000"></div>
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
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              <span className="text-path-emerald/80">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-path font-medium text-6xl md:text-7xl">
                Path
              </span>
              <span className="block text-gray-700">Your Gentle Navigator</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              After processing with Loom, Path offers gentle guidance. This companion doesn't push or rush — 
              it simply shows you the next right step. Like ancient trails that know the way, 
              Path helps you trust your own inner compass and move forward with confidence.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-3 h-3 bg-gradient-path rounded-full animate-grow-gentle shadow-sm shadow-path-green/40"></div>
                <span className="text-sm font-medium">Gentle Guidance</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-3 h-3 bg-gradient-path rounded-full animate-horizon-drift delay-300 shadow-sm shadow-path-sage/40"></div>
                <span className="text-sm font-medium">Natural Navigation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-3 h-3 bg-gradient-path rounded-full animate-grow-gentle delay-600 shadow-sm shadow-path-green/30"></div>
                <span className="text-sm font-medium">Inner Compass</span>
              </div>
            </div>

            <div className="pt-6 border-t border-path-green/30">
              <p className="text-sm text-path-green italic font-medium">
                "Every journey begins with a single, mindful step forward"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;