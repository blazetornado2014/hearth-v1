import { Heart, Waves } from "lucide-react";
import loomThreads from "@/assets/loom-threads.png";

const LoomSection = () => {
  return (
    <section className="relative py-24 bg-gradient-loom-bg overflow-hidden">
      {/* Flowing ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Flowing threads */}
        <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-loom-flow animate-flow-gentle opacity-30"></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-loom-flow animate-flow-gentle opacity-20 delay-2000"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-loom-flow animate-flow-gentle opacity-25 delay-4000"></div>
        
        {/* Gentle ink drops */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-loom-lavender rounded-full animate-breathe opacity-40"></div>
        <div className="absolute bottom-40 right-32 w-1.5 h-1.5 bg-loom-blue rounded-full animate-breathe opacity-50 delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-loom-ink rounded-full animate-breathe opacity-30 delay-2000"></div>
        
        {/* Soft fabric folds */}
        <div className="absolute top-40 right-20 w-24 h-32 bg-gradient-loom opacity-10 rounded-3xl animate-breathe delay-500"></div>
        <div className="absolute bottom-20 left-32 w-32 h-20 bg-gradient-loom opacity-15 rounded-3xl animate-breathe delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element - Left side */}
          <div className="relative order-2 lg:order-1">
            {/* Central flowing visualization */}
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Background threads image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={loomThreads} 
                  alt="Flowing threads representing emotional processing" 
                  className="w-64 h-64 opacity-60 animate-breathe"
                />
              </div>
              
              {/* Flowing concentric waves */}
              <div className="absolute inset-0">
                {/* Outer ripple */}
                <div className="absolute inset-0 border border-loom-blue/20 rounded-full animate-breathe"></div>
                <div className="absolute inset-8 border border-loom-lavender/15 rounded-full animate-breathe delay-1000"></div>
                <div className="absolute inset-16 border border-loom-ink/10 rounded-full animate-breathe delay-2000"></div>
                
                {/* Central processing point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-gradient-loom rounded-full animate-breathe shadow-lg shadow-loom-blue/30"></div>
                </div>
              </div>

              {/* Flowing ink streams */}
              <div className="absolute inset-0">
                {/* Vertical flow */}
                <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-gradient-to-b from-loom-blue to-transparent animate-settle opacity-40"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gradient-to-t from-loom-lavender to-transparent animate-settle delay-500 opacity-50"></div>
                
                {/* Horizontal flow */}
                <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-loom-ink to-transparent animate-settle delay-1000 opacity-30"></div>
                <div className="absolute top-1/2 right-0 w-16 h-0.5 bg-gradient-to-l from-loom-blue to-transparent animate-settle delay-1500 opacity-35"></div>
              </div>
            </div>

            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-gradient-loom opacity-5 rounded-full blur-3xl animate-breathe"></div>
          </div>

          {/* Content - Right side */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            {/* Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <Heart className="w-12 h-12 text-loom-lavender animate-breathe" />
                <div className="absolute inset-0 bg-loom-lavender opacity-20 rounded-full blur-lg animate-breathe"></div>
              </div>
              <Waves className="w-8 h-8 text-loom-blue animate-breathe delay-500" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
              Process
              <span className="block text-loom-ink font-medium">What You</span>
              <span className="block text-loom-lavender">Feel</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
                A safe, private space for introspection and emotional processing — 
                where thoughts untangle, memories settle, and clarity slowly forms.
              </p>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light max-w-xl italic">
                The inner room where you gently lay your thoughts out to breathe.
              </p>
            </div>

            {/* Element qualities */}
            <div className="flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2 text-loom-blue">
                <div className="w-1.5 h-1.5 bg-loom-blue rounded-full animate-breathe"></div>
                Journaling
              </span>
              <span className="flex items-center gap-2 text-loom-lavender">
                <div className="w-1.5 h-1.5 bg-loom-lavender rounded-full animate-breathe delay-700"></div>
                Reflection
              </span>
              <span className="flex items-center gap-2 text-loom-ink">
                <div className="w-1.5 h-1.5 bg-loom-ink rounded-full animate-breathe delay-1400"></div>
                Emotional Honesty
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomSection;