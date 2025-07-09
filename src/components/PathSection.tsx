import { Button } from "@/components/ui/button";

const PathSection = () => {
  return (
    <section className="relative py-20 bg-path-sanctuary overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--path-glow)'} as React.CSSProperties}>
      {/* Forest and starlight atmosphere */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-path-emerald/25 to-transparent rounded-full blur-3xl animate-forest-sway"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-radial from-path-starlight/20 to-transparent rounded-full blur-2xl animate-starlight-twinkle"></div>
        
        {/* Starlight particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-path-emerald rounded-full animate-starlight-twinkle glow-path"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-path-starlight rounded-full animate-starlight-twinkle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-path-emerald rounded-full animate-starlight-twinkle" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Path Visualization */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Compass core */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-path rounded-full animate-forest-sway glow-path"></div>
                
                {/* Starlight paths */}
                <svg className="w-full h-full opacity-50" viewBox="0 0 320 320">
                  <path
                    d="M80 240 Q160 160 240 80"
                    stroke="hsl(var(--path-emerald) / 0.6)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8,6"
                    className="animate-starlight-twinkle"
                  />
                  <path
                    d="M100 160 L220 160"
                    stroke="hsl(var(--path-starlight) / 0.4)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-forest-sway"
                    style={{animationDelay: '0.5s'}}
                  />
                  <path
                    d="M160 100 L160 220"
                    stroke="hsl(var(--path-emerald) / 0.3)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4,3"
                    className="animate-starlight-twinkle"
                    style={{animationDelay: '1s'}}
                  />
                </svg>
                
                {/* Starlight guides */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-path-emerald rounded-full animate-starlight-twinkle"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-path-starlight rounded-full animate-forest-sway" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-2/3 right-1/2 w-1 h-1 bg-path-emerald rounded-full animate-starlight-twinkle" style={{animationDelay: '0.7s'}}></div>
                
                {/* Compass rings */}
                <div className="absolute inset-0 border border-path-emerald/20 rounded-full animate-forest-sway"></div>
                <div className="absolute inset-12 border border-path-starlight/15 rounded-full animate-starlight-twinkle" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            {/* Forest aura */}
            <div className="absolute inset-0 bg-gradient-radial from-path-emerald/12 to-transparent rounded-full blur-2xl animate-breathe-sanctuary"></div>
          </div>

          {/* Path Wisdom */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              <span className="text-path-emerald whisper-text">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-path font-normal text-6xl md:text-7xl animate-forest-sway">
                Path
              </span>
              <span className="block text-foreground">Your Gentle Navigator</span>
            </h2>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              After processing with Loom, Path offers gentle guidance. This companion doesn't push or rush — 
              it simply shows you the next right step. Like ancient trails that know the way, 
              Path helps you trust your own inner compass and move forward with confidence.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-path-emerald">
                <div className="w-3 h-3 bg-gradient-path rounded-full animate-forest-sway glow-path"></div>
                <span className="text-sm font-medium">Gentle Guidance</span>
              </div>
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-path-starlight">
                <div className="w-3 h-3 bg-gradient-path rounded-full animate-starlight-twinkle glow-path" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium">Natural Navigation</span>
              </div>
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-path-emerald">
                <div className="w-3 h-3 bg-gradient-path rounded-full animate-forest-sway glow-path" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium">Inner Compass</span>
              </div>
            </div>

            <div className="pt-6 border-t border-path-emerald/20">
              <blockquote className="text-sm text-path-emerald border-none p-0 m-0 italic">
                "Every journey begins with a single, mindful step forward"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;