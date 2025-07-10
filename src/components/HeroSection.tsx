import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden sanctuary-overlay">
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
        <div className="mb-8 md:mb-12">
          {/* Brand Symbol */}
          <div className="relative mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto relative">
              {/* Central hearth flame */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 rounded-full animate-pulse-sanctuary glow-spark"></div>
              
              {/* Elemental rings */}
              <div className="absolute inset-2 border-2 border-primary/30 rounded-full animate-breathe-sanctuary"></div>
              <div className="absolute inset-4 border border-primary/20 rounded-full animate-float-sanctuary"></div>
              
              {/* Four elemental points */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-spark-electric rotate-45 animate-lightning-whisper"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-loom-mist rounded-full animate-mist-flow"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-path-emerald rounded-full animate-starlight-twinkle"></div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-forge-copper rounded-full animate-ember-glow"></div>
            </div>
          </div>
          
          {/* Brand Name */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] text-primary animate-shimmer-sanctuary">
              HEARTH
            </h1>
            <p className="text-sm md:text-base text-muted-foreground tracking-[0.2em] whisper-text">
              Digital Sanctuary for the Soul
            </p>
          </div>
        </div>
        
        {/* Mystical Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 md:mb-8 text-foreground px-2">
          Master your personal elements
        </h2>

        {/* Whispered Guidance */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
          Four gentle digital companions that guide your journey to emotional clarity and purposeful action
        </p>

        {/* Sanctuary Portal */}
        <div className="mb-12 md:mb-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium rounded-2xl shadow-sanctuary hover:shadow-depth transition-sanctuary hover:scale-105 glow-spark w-full sm:w-auto max-w-xs sm:max-w-none relative overflow-hidden group"
          >
            <span className="relative z-10">Enter Your Sanctuary</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
        </div>

        {/* Brand Promise */}
        <div className="mb-8 md:mb-12">
          <blockquote className="text-base md:text-lg text-muted-foreground italic border-none p-0 m-0 max-w-2xl mx-auto">
            "Where ancient wisdom meets digital mindfulness, creating space for your authentic self to flourish"
          </blockquote>
        </div>

        {/* Elemental Preview */}
        <div className="mb-8 md:mb-12">
          <p className="text-sm text-muted-foreground mb-6 tracking-wide">
            Start Your Journey
          </p>
          <div className="flex justify-center items-center space-x-8 md:space-x-12">
            <div className="text-center group cursor-pointer">
              <div className="w-3 h-3 bg-spark-electric transform rotate-45 mx-auto mb-2 animate-lightning-whisper group-hover:scale-125 transition-transform glow-spark"></div>
              <span className="text-xs text-muted-foreground group-hover:text-spark-electric transition-colors">Spark</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-3 h-3 bg-loom-mist rounded-full mx-auto mb-2 animate-mist-flow group-hover:scale-125 transition-transform glow-loom"></div>
              <span className="text-xs text-muted-foreground group-hover:text-loom-mist transition-colors">Loom</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-3 h-3 bg-path-emerald rounded-full mx-auto mb-2 animate-starlight-twinkle group-hover:scale-125 transition-transform glow-path"></div>
              <span className="text-xs text-muted-foreground group-hover:text-path-emerald transition-colors">Path</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-3 h-3 bg-forge-copper rounded-full mx-auto mb-2 animate-ember-glow group-hover:scale-125 transition-transform glow-forge"></div>
              <span className="text-xs text-muted-foreground group-hover:text-forge-copper transition-colors">Forge</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs text-muted-foreground tracking-wide">Explore</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;