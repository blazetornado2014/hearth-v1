import loomThreads from "@/assets/loom-threads.png";

const LoomSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-loom-bg overflow-hidden flex items-center">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-loom-lavender/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Element - Left */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Background threads image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={loomThreads} 
                  alt="Flowing threads representing emotional processing" 
                  className="w-72 h-72 opacity-40 animate-breathe"
                />
              </div>
              
              {/* Flowing concentric waves */}
              <div className="absolute inset-0">
                {/* Central processing point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-gradient-loom rounded-full animate-breathe shadow-lg shadow-loom-blue/30"></div>
                </div>
                
                {/* Flowing ripples */}
                <div className="absolute inset-0 border border-loom-blue/20 rounded-full animate-breathe"></div>
                <div className="absolute inset-8 border border-loom-lavender/15 rounded-full animate-breathe delay-1000"></div>
                <div className="absolute inset-16 border border-loom-ink/10 rounded-full animate-breathe delay-2000"></div>
              </div>

              {/* Flowing ink streams */}
              <div className="absolute inset-0">
                {/* Vertical flow */}
                <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-gradient-to-b from-loom-blue to-transparent animate-settle opacity-50"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gradient-to-t from-loom-lavender to-transparent animate-settle delay-500 opacity-60"></div>
                
                {/* Horizontal flow */}
                <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-loom-ink to-transparent animate-settle delay-1000 opacity-40"></div>
                <div className="absolute top-1/2 right-0 w-16 h-0.5 bg-gradient-to-l from-loom-blue to-transparent animate-settle delay-1500 opacity-45"></div>
              </div>
            </div>

            {/* Soft glow effect */}
            <div className="absolute inset-0 bg-gradient-loom opacity-5 rounded-full blur-3xl animate-breathe"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 leading-tight">
              Process
              <span className="block text-loom-ink font-medium">What You</span>
              <span className="block text-loom-lavender">Feel</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-10">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                A safe, private space for introspection and emotional processing — 
                where thoughts untangle, memories settle, and clarity slowly forms.
              </p>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light italic">
                The inner room where you gently lay your thoughts out to breathe.
              </p>
            </div>

            {/* Element qualities */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-loom-blue">
                <div className="w-2 h-2 bg-loom-blue rounded-full animate-breathe"></div>
                <span className="text-sm font-medium">Journaling</span>
              </div>
              <div className="flex items-center gap-3 text-loom-lavender">
                <div className="w-2 h-2 bg-loom-lavender rounded-full animate-breathe delay-700"></div>
                <span className="text-sm font-medium">Reflection</span>
              </div>
              <div className="flex items-center gap-3 text-loom-ink">
                <div className="w-2 h-2 bg-loom-ink rounded-full animate-breathe delay-1400"></div>
                <span className="text-sm font-medium">Emotional Honesty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoomSection;