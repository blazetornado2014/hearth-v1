import loomThreads from "@/assets/loom-threads.png";
import { Button } from "@/components/ui/button";

const LoomSection = () => {
  return (
    <section className="relative py-20 bg-loom-bg overflow-hidden">
      {/* Deep mystical atmosphere */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-radial from-loom-royal/40 to-transparent rounded-full blur-2xl animate-breathe"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-radial from-loom-blue/30 to-transparent rounded-full blur-xl animate-flow-gentle"></div>
        
        {/* Mystical threads and wisps */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-loom-lavender rounded-full animate-breathe shadow-lg shadow-loom-lavender/60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-loom-blue rounded-full animate-flow-gentle delay-500 shadow-md shadow-loom-blue/50"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-loom-royal rounded-full animate-breathe delay-700"></div>
        <div className="absolute bottom-1/2 left-1/3 w-1 h-1 bg-loom-accent/80 rounded-full animate-settle delay-300"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Loom weaving visualization */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-loom rounded-full animate-breathe shadow-lg shadow-loom-blue/30"></div>
                
                {/* Weaving pattern grid */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-8 opacity-30">
                  <div className="bg-loom-blue/40 rounded-sm animate-flow-gentle delay-100"></div>
                  <div className="bg-loom-lavender/30 rounded-sm animate-breathe delay-200"></div>
                  <div className="bg-loom-royal/35 rounded-sm animate-settle delay-300"></div>
                  <div className="bg-loom-lavender/25 rounded-sm animate-flow-gentle delay-400"></div>
                  <div className="bg-loom-blue/20 rounded-sm animate-breathe delay-500"></div>
                  <div className="bg-loom-ink/30 rounded-sm animate-settle delay-600"></div>
                  <div className="bg-loom-royal/25 rounded-sm animate-flow-gentle delay-700"></div>
                  <div className="bg-loom-lavender/35 rounded-sm animate-breathe delay-800"></div>
                  <div className="bg-loom-blue/30 rounded-sm animate-settle delay-900"></div>
                </div>
                
                {/* Processing threads */}
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-loom-lavender rounded-full animate-breathe"></div>
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-loom-blue rounded-full animate-flow-gentle delay-300"></div>
                <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-loom-royal rounded-full animate-settle delay-600"></div>
                
                {/* Loom borders */}
                <div className="absolute inset-0 border-2 border-loom-blue/15 rounded-lg animate-breathe"></div>
                <div className="absolute inset-6 border border-loom-lavender/10 rounded-lg animate-flow-gentle delay-500"></div>
              </div>
            </div>
            
            {/* Mystical atmosphere */}
            <div className="absolute inset-0 bg-gradient-radial from-loom-mist/10 to-transparent rounded-lg blur-2xl animate-breathe"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              <span className="text-loom-lavender/90">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-loom font-medium text-6xl md:text-7xl">
                Loom
              </span>
              <span className="block text-white/90">Your Emotional Weaver</span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
              After Spark illuminates, Loom helps you process. This companion creates space for your emotions 
              to unfold naturally — no rushing, no fixing, just gentle witnessing. 
              Like threads settling into patterns, your feelings find their place here.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-loom rounded-full animate-breathe shadow-lg shadow-loom-blue/50"></div>
                <span className="text-sm font-medium">Emotional Processing</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-loom rounded-full animate-flow-gentle delay-300 shadow-lg shadow-loom-lavender/40"></div>
                <span className="text-sm font-medium">Patient Witnessing</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-3 h-3 bg-gradient-loom rounded-full animate-settle delay-600 shadow-lg shadow-loom-blue/40"></div>
                <span className="text-sm font-medium">Natural Unfolding</span>
              </div>
            </div>

            <div className="pt-6 border-t border-loom-accent/30">
              <p className="text-sm text-loom-accent italic font-medium">
                "Like threads in a loom, emotions weave into understanding"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomSection;