import { Button } from "@/components/ui/button";
import forgeIcon from "@/assets/forge-icon-transparent.png";
import { Link } from "react-router-dom";

const ForgeSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--forge-glow)'} as React.CSSProperties}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Forge Visualization */}
          <div className="relative flex items-center justify-center">
            <img src={forgeIcon} alt="Forge Icon" className="w-72 h-72 sm:w-[36rem] sm:h-[36rem] md:w-[39rem] md:h-[39rem] object-contain" />
          </div>

          {/* Forge Wisdom */}
          <div className="text-left max-w-xl relative z-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-forge-charcoal font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-ember-glow pb-2">
                Forge
              </span>
              <span className="block text-black">Your Creative Partner</span>
            </h2>

            <p className="text-base sm:text-lg text-black/90 leading-relaxed mb-6 md:mb-8">
              The final companion in your journey. Forge helps you create. Not through pressure or deadlines, 
              but through gentle, sustainable action that honors your natural rhythm.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 md:mb-8">
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-forge-charcoal rounded-sm animate-ember-glow glow-forge"></div>
                <span className="text-xs sm:text-sm font-medium">Gentle Creation</span>
              </div>
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-3 h-3 bg-forge-charcoal rounded-sm animate-molten-flow glow-forge" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium">Sustainable Action</span>
              </div>
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-3 h-3 bg-forge-charcoal rounded-sm animate-ember-glow glow-forge" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium">Natural Rhythm</span>
              </div>
            </div>

            <div className="pt-8 border-t border-black/20 text-center">
              <blockquote className="text-xs sm:text-sm text-black/90 mb-4 sm:mb-6 border-none p-0 m-0 italic">
                "In the forge of creation, vision becomes reality"
              </blockquote>
              <Link to="/elements">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-2xl shadow-sanctuary hover:shadow-depth transition-sanctuary hover:scale-105 glow-forge w-full sm:w-auto"
                >
                  Begin Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeSection;
