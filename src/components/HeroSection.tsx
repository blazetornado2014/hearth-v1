import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden sanctuary-overlay">
      {/* Mystical atmosphere */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-sanctuary"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-accent/15 to-transparent rounded-full blur-2xl animate-breathe-sanctuary"></div>
        
        {/* Floating sanctuary elements */}
        <div className="absolute top-32 right-32 w-2 h-2 bg-primary/60 rounded-full animate-starlight-twinkle"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-accent/50 rounded-full animate-starlight-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/2 w-1 h-1 bg-primary/40 rounded-full animate-starlight-twinkle" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Sanctuary Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Hearth Brand Identity */}
        <div className="mb-8">
          <span className="text-lg md:text-xl text-primary font-medium tracking-[0.3em] whisper-text animate-shimmer-sanctuary">HEARTH</span>
        </div>
        
        {/* Mystical Headline */}
        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 text-foreground">
          Master your personal elements
        </h1>

        {/* Whispered Guidance */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Four gentle digital companions that guide your journey to emotional clarity and purposeful action
        </p>

        {/* Sanctuary Portal */}
        <div className="mb-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-medium rounded-2xl shadow-sanctuary hover:shadow-depth transition-sanctuary hover:scale-105 glow-spark"
          >
            Start Your Journey
          </Button>
        </div>

        {/* Elemental Whispers */}
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <span className="flex items-center gap-3 transition-whisper hover:text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-starlight-twinkle"></div>
            Emotional Processing
          </span>
          <span className="flex items-center gap-3 transition-whisper hover:text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-starlight-twinkle" style={{animationDelay: '0.5s'}}></div>
            Gentle Guidance
          </span>
          <span className="flex items-center gap-3 transition-whisper hover:text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-starlight-twinkle" style={{animationDelay: '1s'}}></div>
            Personal Growth
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;