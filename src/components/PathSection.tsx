import pathIcon from "@/assets/path-icon-transparent.png";

const PathSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--path-glow)'} as React.CSSProperties}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Path Visualization */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center">
            <img src={pathIcon} alt="Path Icon" className="w-72 h-72 sm:w-[36rem] sm:h-[36rem] md:w-[39rem] md:h-[39rem] object-contain" />
          </div>

          {/* Path Wisdom */}
          <div className="text-left max-w-xl order-1 lg:order-2 relative z-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-path font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-forest-sway pb-2">
                Path
              </span>
              <span className="block text-foreground">Your Gentle Navigator</span>
            </h2>

            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6 md:mb-8">
              After processing with Loom, Path offers gentle guidance. This companion doesn't push or rush — 
              it simply shows you the next right step. Like ancient trails that know the way, 
              Path helps you trust your own inner compass and move forward with confidence.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 md:mb-8">
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-path-emerald">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-path rounded-full animate-forest-sway glow-path"></div>
                <span className="text-xs sm:text-sm font-medium">Gentle Guidance</span>
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
              <blockquote className="text-xs sm:text-sm text-path-emerald border-none p-0 m-0 italic">
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
