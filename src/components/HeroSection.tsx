import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden sanctuary-overlay">
      {/* Mystical atmosphere */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-sanctuary"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-radial from-accent/15 to-transparent rounded-full blur-2xl animate-breathe-sanctuary"></div>
        
        {/* Floating sanctuary elements */}
        <div className="absolute top-16 right-8 md:top-32 md:right-32 w-2 h-2 bg-primary/60 rounded-full animate-starlight-twinkle"></div>
        <div className="absolute bottom-20 left-8 md:bottom-40 md:left-40 w-1.5 h-1.5 bg-accent/50 rounded-full animate-starlight-twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/2 w-1 h-1 bg-primary/40 rounded-full animate-starlight-twinkle" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Sanctuary Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hearth Brand Identity */}
        <div className="mb-6 md:mb-8">
          <span className="text-base sm:text-lg md:text-xl text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] whisper-text animate-shimmer-sanctuary">HEARTH</span>
        </div>
        
        {/* Mystical Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6 md:mb-8 text-foreground px-2">
          Master your personal elements
        </h1>

        {/* Whispered Guidance */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
          Four gentle digital companions that guide your journey to emotional clarity and purposeful action
        </p>

        {/* Sanctuary Portal */}
        <div className="mb-12 md:mb-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-2xl shadow-sanctuary hover:shadow-depth transition-sanctuary hover:scale-105 glow-spark w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Start Your Journey
          </Button>
        </div>

        {/* Elemental Whispers */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-muted-foreground">
          <span className="flex items-center justify-center sm:justify-start gap-3 transition-whisper hover:text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-starlight-twinkle"></div>
            <span className="text-sm sm:text-base">Emotional Processing</span>
          </span>
          <span className="flex items-center justify-center sm:justify-start gap-3 transition-whisper hover:text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-starlight-twinkle" style={{animationDelay: '0.5s'}}></div>
            <span className="text-sm sm:text-base">Gentle Guidance</span>
          </span>
          <span className="flex items-center justify-center sm:justify-start gap-3 transition-whisper hover:text-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-starlight-twinkle" style={{animationDelay: '1s'}}></div>
            <span className="text-sm sm:text-base">Personal Growth</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;