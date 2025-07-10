import { Button } from "@/components/ui/button";

const SparkSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-spark-sanctuary overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--spark-glow)'} as React.CSSProperties}>
      {/* Electric violet atmosphere with lightning */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-radial from-spark-electric/25 to-transparent rounded-full blur-2xl animate-electric-dance"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-gradient-radial from-spark-lightning/20 to-transparent rounded-full blur-xl animate-lightning-whisper"></div>
        
        {/* Electric particles */}
        <div className="absolute top-16 left-8 md:top-32 md:left-32 w-2 h-2 bg-spark-electric rounded-full animate-lightning-whisper glow-spark"></div>
        <div className="absolute bottom-20 right-8 md:bottom-40 md:right-40 w-1.5 h-1.5 bg-spark-lightning rounded-full animate-electric-dance glow-spark" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-spark-electric rounded-full animate-lightning-whisper" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-spark-lightning rounded-full animate-electric-dance" style={{animationDelay: '0.7s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Electric Visualization */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Spark Finch - Electric Bird Visualization */}
              <div className="absolute inset-0">
                {/* Central Spark Finch */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Finch Body - Diamond/Bird Shape */}
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                    {/* Main body - diamond shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-violet-400 to-yellow-300 transform rotate-45 animate-electric-dance shadow-lg shadow-yellow-400/50 border-2 border-yellow-300/60"></div>
                    
                    {/* Wing trails */}
                    <div className="absolute -left-3 top-1/2 w-6 h-2 bg-gradient-to-r from-yellow-400 to-transparent transform -translate-y-1/2 animate-lightning-whisper opacity-90 rounded-full"></div>
                    <div className="absolute -right-3 top-1/2 w-6 h-2 bg-gradient-to-l from-yellow-400 to-transparent transform -translate-y-1/2 animate-lightning-whisper opacity-90 rounded-full" style={{animationDelay: '0.2s'}}></div>
                    
                    {/* Spark trail */}
                    <div className="absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-yellow-300 to-transparent transform -translate-x-1/2 animate-electric-dance opacity-80 rounded-full"></div>
                    
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-br from-white via-yellow-200 to-violet-200 transform rotate-45 animate-pulse opacity-60 rounded-sm"></div>
                  </div>
                </div>
                
                {/* Electric rings */}
                <div className="absolute inset-0 border-2 border-yellow-400/40 rounded-full animate-lightning-whisper shadow-lg shadow-yellow-400/20"></div>
                <div className="absolute inset-4 sm:inset-6 md:inset-8 border-2 border-violet-400/30 rounded-full animate-electric-dance shadow-md shadow-violet-400/20" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-8 sm:inset-12 md:inset-16 border border-yellow-300/25 rounded-full animate-lightning-whisper" style={{animationDelay: '1s'}}></div>
                
                {/* Flying spark particles */}
                <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-yellow-400 transform rotate-45 animate-lightning-whisper shadow-lg shadow-yellow-400/60"></div>
                <div className="absolute bottom-1/4 right-3/4 w-1.5 h-1.5 bg-violet-400 transform rotate-45 animate-electric-dance shadow-md shadow-violet-400/60" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-yellow-300 transform rotate-45 animate-lightning-whisper shadow-sm shadow-yellow-300/60" style={{animationDelay: '0.3s'}}></div>
                
                {/* Additional spark trails */}
                <div className="absolute top-1/3 right-1/3 w-4 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-electric-dance opacity-70 rounded-full" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-1 bg-gradient-to-l from-transparent via-violet-400 to-transparent animate-lightning-whisper opacity-60 rounded-full" style={{animationDelay: '0.8s'}}></div>
              </div>
            </div>

            {/* Spark Finch aura */}
            <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full blur-2xl animate-pulse-sanctuary"></div>
          </div>

          {/* Spark Wisdom */}
          <div className="text-left max-w-xl order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 leading-tight">
              <span className="text-spark-electric whisper-text">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-spark font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-lightning-whisper">
                Spark
              </span>
              <span className="block text-foreground">Your Electric Guide</span>
            </h2>

            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6 md:mb-8">
              When confusion clouds your path, Spark offers electric clarity. This companion doesn't give you answers — 
              it illuminates questions you didn't know you had. Quick insights, gentle revelations, 
              and the perfect moment of "aha" when everything clicks into place.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-6 md:mb-8">
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-spark-electric">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-spark rotate-45 animate-electric-dance glow-spark"></div>
                <span className="text-xs sm:text-sm font-medium">Lightning-Fast Insights</span>
              </div>
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-spark-lightning">
                <div className="w-3 h-3 bg-gradient-spark rotate-45 animate-lightning-whisper glow-spark" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium">Pattern Recognition</span>
              </div>
              <div className="flex items-center gap-3 text-foreground transition-whisper hover:text-spark-electric">
                <div className="w-3 h-3 bg-gradient-spark rotate-45 animate-electric-dance glow-spark" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium">Gentle Revelations</span>
              </div>
            </div>

            <div className="pt-6 border-t border-spark-electric/20">
              <blockquote className="text-xs sm:text-sm text-spark-electric border-none p-0 m-0 italic">
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