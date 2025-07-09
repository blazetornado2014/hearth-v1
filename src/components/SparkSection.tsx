import sparkIcon from "@/assets/spark-icon.png";
import { Button } from "@/components/ui/button";

const SparkSection = () => {
  return (
    <section className="relative py-20 bg-spark-bg overflow-hidden">
      {/* Electric atmosphere */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-radial from-spark-electric/40 to-transparent rounded-full blur-2xl animate-electric-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-radial from-spark-gold/30 to-transparent rounded-full blur-xl animate-lightning-flicker"></div>
        
        {/* Electric sparks and energy */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-spark-electric rounded-full animate-electric-pulse shadow-lg shadow-spark-electric/60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-spark-gold rounded-full animate-lightning-flicker delay-500 shadow-md shadow-spark-gold/50"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-spark-electric rounded-full animate-electric-pulse delay-700"></div>
        <div className="absolute bottom-1/2 left-1/3 w-1 h-1 bg-spark-gold/80 rounded-full animate-lightning-flicker delay-300"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Electric energy visualization */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-spark rounded-full animate-electric-pulse shadow-lg shadow-spark-electric/30"></div>
                
                {/* Lightning bolt grid */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-8 opacity-40">
                  <div className="bg-spark-electric/30 rounded-sm animate-lightning-flicker delay-100"></div>
                  <div className="bg-spark-gold/25 rounded-sm animate-electric-pulse delay-200"></div>
                  <div className="bg-spark-bright/35 rounded-sm animate-lightning-flicker delay-300"></div>
                  <div className="bg-spark-gold/20 rounded-sm animate-electric-pulse delay-400"></div>
                  <div className="bg-spark-electric/25 rounded-sm animate-lightning-flicker delay-500"></div>
                  <div className="bg-spark-bright/30 rounded-sm animate-electric-pulse delay-600"></div>
                  <div className="bg-spark-electric/35 rounded-sm animate-lightning-flicker delay-700"></div>
                  <div className="bg-spark-gold/30 rounded-sm animate-electric-pulse delay-800"></div>
                  <div className="bg-spark-bright/25 rounded-sm animate-lightning-flicker delay-900"></div>
                </div>
                
                {/* Electric sparks */}
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-spark-electric rounded-full animate-electric-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-spark-gold rounded-full animate-lightning-flicker delay-300"></div>
                <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-spark-electric rounded-full animate-electric-pulse delay-600"></div>
                
                {/* Energy borders */}
                <div className="absolute inset-0 border-2 border-spark-electric/15 rounded-lg animate-electric-pulse"></div>
                <div className="absolute inset-6 border border-spark-gold/10 rounded-lg animate-lightning-flicker delay-500"></div>
              </div>
            </div>
            
            {/* Electric field atmosphere */}
            <div className="absolute inset-0 bg-gradient-radial from-spark-bright/10 to-transparent rounded-lg blur-2xl animate-electric-pulse"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              <span className="text-spark-gold/90">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-spark font-medium text-6xl md:text-7xl">
                Spark
              </span>
              <span className="block text-gray-800">Your Inner Illuminator</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
              Your journey begins here. Spark doesn't create insights from thin air — 
              it illuminates what's already within you. Like lightning revealing a landscape in darkness, 
              this companion helps you discover the patterns, wisdom, and clarity you already possess.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-electric-pulse shadow-lg shadow-spark-electric/50"></div>
                <span className="text-sm font-medium">Inner Illumination</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-lightning-flicker delay-300 shadow-lg shadow-spark-gold/40"></div>
                <span className="text-sm font-medium">Pattern Recognition</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <div className="w-3 h-3 bg-gradient-spark rounded-full animate-electric-pulse delay-600 shadow-lg shadow-spark-electric/40"></div>
                <span className="text-sm font-medium">Gentle Awakening</span>
              </div>
            </div>

            <div className="pt-6 border-t border-spark-electric/30">
              <p className="text-sm text-spark-electric italic font-medium">
                "The light you seek was always within you"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;