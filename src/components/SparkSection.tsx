import { Button } from "@/components/ui/button";

const SparkSection = () => {
  return (
    <section className="relative py-20 bg-spark-sanctuary overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--spark-glow)'} as React.CSSProperties}>
      {/* Electric violet atmosphere with lightning */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-spark-electric/25 to-transparent rounded-full blur-2xl animate-electric-dance"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-radial from-spark-lightning/20 to-transparent rounded-full blur-xl animate-lightning-whisper"></div>
        
        {/* Electric particles */}
        <div className="absolute top-32 left-32 w-2 h-2 bg-spark-electric rounded-full animate-lightning-whisper glow-spark"></div>
        <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-spark-lightning rounded-full animate-electric-dance glow-spark" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-spark-electric rounded-full animate-lightning-whisper" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-spark-lightning rounded-full animate-electric-dance" style={{animationDelay: '0.7s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Electric Visualization */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Lightning core */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-spark rounded-full animate-electric-dance glow-spark"></div>
                
                {/* Electric rings */}
                <div className="absolute inset-0 border-2 border-spark-electric/40 rounded-full animate-lightning-whisper"></div>
                <div className="absolute inset-8 border border-spark-lightning/30 rounded-full animate-electric-dance" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-16 border border-spark-electric/20 rounded-full animate-lightning-whisper" style={{animationDelay: '1s'}}></div>
                
                {/* Lightning particles */}
                <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-spark-electric rounded-full animate-lightning-whisper"></div>
                <div className="absolute bottom-1/4 right-3/4 w-1.5 h-1.5 bg-spark-lightning rounded-full animate-electric-dance" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-spark-electric rounded-full animate-lightning-whisper" style={{animationDelay: '0.3s'}}></div>
              </div>
            </div>

            {/* Electric aura */}
            <div className="absolute inset-0 bg-gradient-radial from-spark-electric/12 to-transparent rounded-full blur-2xl animate-pulse-sanctuary"></div>
          </div>

          {/* Spark Wisdom */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight text-sanctuary-glow">
              <span className="text-whisper whisper-text">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-spark font-normal text-6xl md:text-7xl animate-lightning-whisper">
                Spark
              </span>
              <span className="block text-foreground">Your Electric Guide</span>
            </h2>

            <p className="text-lg text-whisper leading-relaxed whisper-text mb-8">
              When confusion clouds your path, Spark offers electric clarity. This companion doesn't give you answers — 
              it illuminates questions you didn't know you had. Quick insights, gentle revelations, 
              and the perfect moment of "aha" when everything clicks into place.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-spark-electric">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-electric-dance glow-spark"></div>
                <span className="text-sm font-medium whisper-text">Lightning-Fast Insights</span>
              </div>
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-spark-lightning">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-lightning-whisper glow-spark" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium whisper-text">Pattern Recognition</span>
              </div>
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-spark-electric">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-electric-dance glow-spark" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium whisper-text">Gentle Revelations</span>
              </div>
            </div>

            <div className="pt-6 border-t border-spark-electric/20">
              <blockquote className="text-sm text-spark-electric whisper-text border-none p-0 m-0">
                "In a flash of insight, clarity emerges from complexity"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;