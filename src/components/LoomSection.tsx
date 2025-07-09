import { Button } from "@/components/ui/button";

const LoomSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-loom-sanctuary overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--loom-glow)'} as React.CSSProperties}>
      {/* Mist and ink atmosphere */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-gradient-radial from-loom-mist/20 to-transparent rounded-full blur-2xl animate-mist-flow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-radial from-loom-ink/15 to-transparent rounded-full blur-xl animate-ink-ripple" style={{animationDelay: '1s'}}></div>
        
        {/* Flowing mist particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-loom-mist rounded-full animate-mist-flow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-loom-ink rounded-full animate-ink-ripple" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Flowing Visualization */}
          <div className="relative">
            <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Mist core */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-loom rounded-full animate-mist-flow glow-loom"></div>
                
                {/* Flowing patterns */}
                <svg className="w-full h-full opacity-40" viewBox="0 0 320 320">
                  <path
                    d="M50 160 Q160 80 270 160 Q160 240 50 160"
                    stroke="hsl(var(--loom-mist) / 0.6)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-mist-flow"
                  />
                  <path
                    d="M80 100 Q160 160 240 220"
                    stroke="hsl(var(--loom-ink) / 0.4)"
                    strokeWidth="1.5"
                    fill="none"
                    className="animate-ink-ripple"
                    style={{animationDelay: '0.5s'}}
                  />
                  <path
                    d="M80 220 Q160 160 240 100"
                    stroke="hsl(var(--loom-mist) / 0.3)"
                    strokeWidth="1"
                    fill="none"
                    className="animate-mist-flow"
                    style={{animationDelay: '1s'}}
                  />
                </svg>
                
                {/* Mist ripples */}
                <div className="absolute inset-0 border border-loom-mist/20 rounded-full animate-mist-flow"></div>
                <div className="absolute inset-8 border border-loom-ink/15 rounded-full animate-ink-ripple" style={{animationDelay: '1s'}}></div>
                
                {/* Flowing particles */}
                <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-loom-mist rounded-full animate-mist-flow"></div>
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-loom-ink rounded-full animate-ink-ripple" style={{animationDelay: '0.7s'}}></div>
              </div>
            </div>
            
            {/* Misty aura */}
            <div className="absolute inset-0 bg-gradient-radial from-loom-mist/15 to-transparent rounded-full blur-2xl animate-breathe-sanctuary"></div>
          </div>

          {/* Loom Wisdom */}
          <div className="text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 leading-tight">
              <span className="text-loom-mist whisper-text">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-loom font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-mist-flow">
                Loom
              </span>
              <span className="block text-white">Your Emotional Weaver</span>
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 md:mb-8">
              After Spark illuminates, Loom helps you process. This companion creates space for your emotions 
              to unfold naturally — no rushing, no fixing, just gentle witnessing. 
              Like threads settling into patterns, your feelings find their place here.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 md:mb-8">
              <div className="flex items-center gap-3 text-white transition-whisper hover:text-loom-mist">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-loom rounded-full animate-mist-flow glow-loom"></div>
                <span className="text-xs sm:text-sm font-medium">Emotional Processing</span>
              </div>
              <div className="flex items-center gap-3 text-white transition-whisper hover:text-loom-mist">
                <div className="w-2 h-2 bg-gradient-loom rounded-full animate-ink-ripple glow-loom" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium">Patient Witnessing</span>
              </div>
              <div className="flex items-center gap-3 text-white transition-whisper hover:text-loom-mist">
                <div className="w-2 h-2 bg-gradient-loom rounded-full animate-mist-flow glow-loom" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium">Natural Unfolding</span>
              </div>
            </div>

            <div className="pt-6 border-t border-loom-mist/20">
              <blockquote className="text-xs sm:text-sm text-loom-mist border-none p-0 m-0 italic">
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