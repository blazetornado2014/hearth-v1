const SparkSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-background overflow-hidden sanctuary-overlay" style={{'--element-glow': 'var(--spark-glow)'} as React.CSSProperties}>
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
                  <div className="absolute inset-0 bg-gradient-spark transform rotate-45 animate-electric-dance shadow-md shadow-yellow-400/30 border border-yellow-300/40"></div>
                    
                  </div>
                </div>
              
              {/* Electric rings */}
              <div className="absolute inset-0 border-2 border-yellow-400/40 rounded-full animate-lightning-whisper shadow-sm shadow-yellow-400/10"></div>
              <div className="absolute inset-4 sm:inset-6 md:inset-8 border-2 border-spark-lightning/30 rounded-full animate-electric-dance shadow-xs shadow-spark-lightning/10" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-8 sm:inset-12 md:inset-16 border border-yellow-300/25 rounded-full animate-lightning-whisper" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            {/* Spark Finch aura */}
            <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 to-transparent rounded-full blur-2xl animate-pulse-sanctuary"></div>
          </div>

          {/* Spark Wisdom */}
          <div className="text-left max-w-xl order-1 lg:order-2 relative z-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-spark font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-lightning-whisper pb-2">
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
