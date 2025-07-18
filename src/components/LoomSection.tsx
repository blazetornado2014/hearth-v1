import loomIcon from "@/assets/loom-icon-transparent.png";

const LoomSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--loom-glow)'} as React.CSSProperties}>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Flowing Visualization */}
          <div className="relative flex items-center justify-center">
            <img src={loomIcon} alt="Loom Icon" className="w-80 h-80 sm:w-[39rem] sm:h-[39rem] md:w-[42rem] md:h-[42rem] object-contain" />
          </div>

          {/* Loom Wisdom */}
          <div className="text-left max-w-xl relative z-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-loom font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-mist-flow pb-2">
                Loom
              </span>
              <span className="block text-black">Your Emotional Weaver</span>
            </h2>

            <p className="text-base sm:text-lg text-black/90 leading-relaxed mb-6 md:mb-8">
              Loom helps you process. This companion creates space for your emotions 
              to unfold naturally — no rushing, no fixing, just gentle witnessing. 
              Like threads settling into patterns, your feelings find their place here.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 md:mb-8">
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-loom rounded-full animate-mist-flow glow-loom"></div>
                <span className="text-xs sm:text-sm font-medium">Emotional Processing</span>
              </div>
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-2 h-2 bg-gradient-loom rounded-full animate-ink-ripple glow-loom" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium">Patient Witnessing</span>
              </div>
              <div className="flex items-center gap-3 text-black transition-whisper hover:text-black">
                <div className="w-2 h-2 bg-gradient-loom rounded-full animate-mist-flow glow-loom" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium">Natural Unfolding</span>
              </div>
            </div>

            <div className="pt-6 border-t border-black/20">
              <blockquote className="text-xs sm:text-sm text-black border-none p-0 m-0 italic">
                "Like threads in a loom, emotions weave into understanding"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomSection;
