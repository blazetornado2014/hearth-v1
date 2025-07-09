import { Hammer, Wrench, Square, Zap } from "lucide-react";
import forgeTools from "@/assets/forge-tools.png";

const ForgeSection = () => {
  return (
    <section className="relative py-24 bg-gradient-forge-bg overflow-hidden">
      {/* Workshop ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Workshop light beams */}
        <div className="absolute top-16 left-1/4 w-0.5 h-24 bg-gradient-to-b from-forge-copper to-transparent opacity-40 animate-radiant-glow"></div>
        <div className="absolute bottom-20 right-1/3 w-0.5 h-32 bg-gradient-to-t from-forge-earth to-transparent opacity-30 animate-radiant-glow delay-1000"></div>
        
        {/* Building block elements */}
        <div className="absolute top-32 right-20 w-4 h-4 bg-forge-charcoal rotate-45 animate-tool-rhythm opacity-50"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-forge-copper rotate-12 animate-tool-rhythm delay-500 opacity-40"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-forge-earth animate-tool-rhythm delay-1000 opacity-35"></div>
        
        {/* Workshop texture lines */}
        <div className="absolute top-40 left-0 w-32 h-0.5 bg-gradient-forge-workshop opacity-20 animate-forge-build"></div>
        <div className="absolute bottom-40 right-0 w-24 h-0.5 bg-gradient-forge-workshop opacity-25 animate-forge-build delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-forge-workshop opacity-15 animate-forge-build delay-1400"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element - Left side */}
          <div className="relative order-2 lg:order-1">
            {/* Central workshop visualization */}
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Background tools image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={forgeTools} 
                  alt="Workshop tools and building elements" 
                  className="w-64 h-64 opacity-50 animate-forge-build"
                />
              </div>
              
              {/* Structured building grid */}
              <div className="absolute inset-0">
                {/* Grid structure */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-8">
                  {/* Building blocks */}
                  <div className="bg-forge-charcoal/20 rounded-sm animate-forge-build delay-200"></div>
                  <div className="bg-forge-copper/15 rounded-sm animate-forge-build delay-400"></div>
                  <div className="bg-forge-earth/10 rounded-sm animate-forge-build delay-600"></div>
                  <div className="bg-forge-stone/25 rounded-sm animate-forge-build delay-800"></div>
                  <div className="bg-gradient-forge/30 rounded-sm animate-forge-build delay-1000"></div>
                  <div className="bg-forge-charcoal/15 rounded-sm animate-forge-build delay-1200"></div>
                  <div className="bg-forge-copper/20 rounded-sm animate-forge-build delay-1400"></div>
                  <div className="bg-forge-earth/25 rounded-sm animate-forge-build delay-1600"></div>
                  <div className="bg-forge-stone/15 rounded-sm animate-forge-build delay-1800"></div>
                </div>
                
                {/* Central focus point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-gradient-forge rounded-sm animate-radiant-glow shadow-lg"></div>
                </div>
              </div>

              {/* Radiant outline structure */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 border border-forge-copper/20 rounded-lg animate-radiant-glow"></div>
                <div className="absolute inset-4 border border-forge-earth/15 rounded-lg animate-radiant-glow delay-500"></div>
                <div className="absolute inset-8 border border-forge-charcoal/10 rounded-lg animate-radiant-glow delay-1000"></div>
              </div>
            </div>

            {/* Workshop glow */}
            <div className="absolute inset-0 bg-gradient-forge opacity-5 rounded-lg blur-3xl animate-radiant-glow"></div>
          </div>

          {/* Content - Right side */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            {/* Tool icons */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <Hammer className="w-12 h-12 text-forge-copper animate-tool-rhythm" />
                <div className="absolute inset-0 bg-forge-copper opacity-20 rounded-full blur-lg animate-radiant-glow"></div>
              </div>
              <Wrench className="w-10 h-10 text-forge-earth animate-tool-rhythm delay-300" />
              <Square className="w-8 h-8 text-forge-charcoal animate-tool-rhythm delay-600" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
              <span className="block text-forge-charcoal font-medium">Shape</span>
              <span className="block text-forge-copper">What You</span>
              <span className="block text-forge-earth">Imagine</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
                The structured workshop where ideas from Spark are broken down into plans, 
                tasks, and focused momentum. Where action and execution take shape.
              </p>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light max-w-xl italic">
                Forge doesn't push you to hustle — it helps you act with intention, 
                like quiet focus in a workshop filled with natural light.
              </p>
            </div>

            {/* Creation aspects */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-forge-copper">
                <div className="w-2 h-2 bg-forge-copper rounded-sm animate-tool-rhythm"></div>
                <span>Break Down Ideas</span>
              </div>
              <div className="flex items-center gap-3 text-forge-earth">
                <div className="w-2 h-2 bg-forge-earth rounded-sm animate-tool-rhythm delay-500"></div>
                <span>Build Focused Plans</span>
              </div>
              <div className="flex items-center gap-3 text-forge-charcoal">
                <div className="w-2 h-2 bg-forge-charcoal rounded-sm animate-tool-rhythm delay-1000"></div>
                <span>Create with Intention</span>
              </div>
            </div>

            {/* Crafting tagline */}
            <div className="mt-10 pt-8 border-t border-forge-stone/30">
              <p className="text-sm text-muted-foreground/70 font-light italic flex items-center gap-2">
                <Zap className="w-4 h-4 text-forge-copper animate-tool-rhythm" />
                Meaningful creation, shaped with your own hands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeSection;