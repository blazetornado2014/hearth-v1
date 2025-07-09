import forgeTools from "@/assets/forge-tools.png";
import { Button } from "@/components/ui/button";

const ForgeSection = () => {
  return (
    <section className="relative py-20 bg-gradient-forge-bg overflow-hidden">
      {/* Simplified forge atmosphere */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-gradient-radial from-forge-copper/8 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-radial from-forge-earth/6 to-transparent rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Subtle sparks */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-forge-copper/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-forge-earth/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={forgeTools} 
                  alt="Creative forge tools" 
                  className="w-48 h-48 opacity-50 filter drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 0 10px hsl(var(--forge-copper) / 0.15))' }}
                />
              </div>
              
              {/* Simplified creation core */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-forge rounded-sm animate-pulse shadow-lg shadow-forge-copper/20"></div>
                
                {/* Simple grid pattern */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-12 opacity-20">
                  <div className="bg-forge-copper/20 rounded-sm animate-pulse"></div>
                  <div className="bg-forge-earth/15 rounded-sm animate-pulse delay-300"></div>
                  <div className="bg-forge-earth/20 rounded-sm animate-pulse delay-600"></div>
                  <div className="bg-forge-copper/15 rounded-sm animate-pulse delay-900"></div>
                </div>
                
                {/* Gentle borders */}
                <div className="absolute inset-0 border border-forge-copper/10 rounded-lg animate-pulse"></div>
                <div className="absolute inset-4 border border-forge-earth/8 rounded-lg animate-pulse delay-1000"></div>
              </div>
            </div>
            
            {/* Soft glow */}
            <div className="absolute inset-0 bg-gradient-radial from-forge-copper/5 to-transparent rounded-lg blur-2xl"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              <span className="text-muted-foreground">Meet</span>
              <span className="block text-transparent bg-clip-text bg-gradient-forge font-medium">
                Forge
              </span>
              <span className="block text-muted-foreground">Your Creative Partner</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
              The final companion in your journey. Forge takes the insights from Spark, the processing from Loom, 
              and the direction from Path — and helps you create. Not through pressure or deadlines, 
              but through gentle, sustainable action that honors your natural rhythm.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-forge rounded-sm animate-pulse"></div>
                <span className="text-sm font-medium">Gentle Creation</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-forge rounded-sm animate-pulse delay-300"></div>
                <span className="text-sm font-medium">Sustainable Action</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-gradient-forge rounded-sm animate-pulse delay-600"></div>
                <span className="text-sm font-medium">Natural Rhythm</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Ready to begin your journey?</p>
              <Button 
                variant="sanctuary" 
                size="sanctuary"
                className="hover:scale-105 transition-transform duration-200"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeSection;