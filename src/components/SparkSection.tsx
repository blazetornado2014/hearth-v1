import sparkIcon from "@/assets/spark-icon.png";
import { Button } from "@/components/ui/button";

const SparkSection = () => {
  return (
    <section className="relative py-20 bg-spark-twilight overflow-hidden">
      {/* Electric atmosphere with bright sparks */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-spark-electric/30 to-transparent rounded-full blur-2xl animate-electric-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-radial from-spark-violet/25 to-transparent rounded-full blur-xl animate-lightning-flicker"></div>
        
        {/* Bright electric particles */}
        <div className="absolute top-32 left-32 w-2 h-2 bg-spark-electric rounded-full animate-lightning-flicker shadow-lg shadow-spark-electric/50"></div>
        <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-spark-violet rounded-full animate-electric-pulse delay-500 shadow-md shadow-spark-violet/40"></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-spark-electric rounded-full animate-lightning-flicker delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-spark-violet rounded-full animate-electric-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Electric core visualization */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-spark rounded-full animate-electric-pulse shadow-lg shadow-spark-electric/30"></div>
                
                {/* Electric rings */}
                <div className="absolute inset-0 border-2 border-spark-electric/20 rounded-full animate-lightning-flicker"></div>
                <div className="absolute inset-8 border border-spark-violet/15 rounded-full animate-pulse delay-500"></div>
                <div className="absolute inset-16 border border-spark-electric/10 rounded-full animate-pulse delay-1000"></div>
                
                {/* Electric particles */}
                <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-spark-electric rounded-full animate-lightning-flicker"></div>
                <div className="absolute bottom-1/4 right-3/4 w-1.5 h-1.5 bg-spark-violet rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-spark-electric rounded-full animate-lightning-flicker delay-300"></div>
              </div>
            </div>

            {/* Electric atmosphere */}
            <div className="absolute inset-0 bg-gradient-radial from-spark-electric/8 to-transparent rounded-full blur-2xl animate-glow-pulse"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              <span className="text-spark-electric/80">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-spark font-medium text-6xl md:text-7xl">
                Spark
              </span>
              <span className="block text-white/90">Your Electric Guide</span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
              When confusion clouds your path, Spark offers electric clarity. This companion doesn't give you answers — 
              it illuminates questions you didn't know you had. Quick insights, gentle revelations, 
              and the perfect moment of "aha" when everything clicks into place.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-electric-pulse shadow-lg shadow-spark-electric/50"></div>
                <span className="text-sm font-medium">Lightning-Fast Insights</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-lightning-flicker delay-300 shadow-lg shadow-spark-violet/50"></div>
                <span className="text-sm font-medium">Pattern Recognition</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-electric-pulse delay-600 shadow-lg shadow-spark-electric/40"></div>
                <span className="text-sm font-medium">Gentle Revelations</span>
              </div>
            </div>

            <div className="pt-6 border-t border-spark-electric/30">
              <p className="text-sm text-spark-electric/90 italic">
                "In a flash of insight, clarity emerges from complexity"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;