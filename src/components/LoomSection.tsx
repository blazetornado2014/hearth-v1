import loomThreads from "@/assets/loom-threads.png";
import { Button } from "@/components/ui/button";

const LoomSection = () => {
  return (
    <section className="relative py-20 bg-gradient-loom-bg overflow-hidden">
      {/* Simplified mist atmosphere */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-radial from-loom-blue/6 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-radial from-loom-lavender/4 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Subtle ink drops */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-loom-blue/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-loom-lavender/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={loomThreads} 
                  alt="Emotional processing threads" 
                  className="w-48 h-48 opacity-50 filter drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 0 10px hsl(var(--loom-blue) / 0.15))' }}
                />
              </div>
              
              {/* Simplified center */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-loom rounded-full animate-pulse shadow-lg shadow-loom-blue/20"></div>
                
                {/* Gentle ripples */}
                <div className="absolute inset-0 border border-loom-blue/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 border border-loom-lavender/8 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
            
            {/* Soft glow */}
            <div className="absolute inset-0 bg-gradient-radial from-loom-blue/5 to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              <span className="text-muted-foreground">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-loom font-medium">
                Loom
              </span>
              <span className="block text-muted-foreground">Your Emotional Weaver</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
              After Spark illuminates, Loom helps you process. This companion creates space for your emotions 
              to unfold naturally — no rushing, no fixing, just gentle witnessing. 
              Like threads settling into patterns, your feelings find their place here.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-loom rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Emotional Processing</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-loom rounded-full animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Patient Witnessing</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-loom rounded-full animate-pulse delay-600"></div>
                <span className="text-sm font-medium">Natural Unfolding</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">When you're ready to find direction...</p>
              <Button variant="outline" className="hover:bg-secondary/10 transition-colors">
                Meet Path →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomSection;