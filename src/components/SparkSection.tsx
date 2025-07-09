import sparkIcon from "@/assets/spark-icon.png";
import { Button } from "@/components/ui/button";

const SparkSection = () => {
  return (
    <section className="relative py-20 bg-gradient-spark-bg overflow-hidden">
      {/* Simplified atmosphere */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-radial from-spark-electric/8 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-gradient-radial from-spark-violet/6 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Subtle electric particles */}
        <div className="absolute top-32 left-32 w-1 h-1 bg-spark-electric/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-0.5 h-0.5 bg-spark-violet/50 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-1/2 w-0.5 h-0.5 bg-spark-electric/40 rounded-full animate-pulse delay-1000"></div>
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
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              <span className="text-muted-foreground">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-spark font-medium">
                Spark
              </span>
              <span className="block text-muted-foreground">Your Electric Guide</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
              When confusion clouds your path, Spark offers electric clarity. This companion doesn't give you answers — 
              it illuminates questions you didn't know you had. Quick insights, gentle revelations, 
              and the perfect moment of "aha" when everything clicks into place.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-spark rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Lightning-Fast Insights</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-spark rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Pattern Recognition</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-spark rounded-full animate-pulse delay-600"></div>
                <span className="text-sm font-medium">Gentle Revelations</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">When you're ready to process deeper...</p>
              <Button variant="outline" className="hover:bg-primary/10 transition-colors">
                Continue to Loom →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;