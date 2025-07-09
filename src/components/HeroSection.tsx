import { Button } from "@/components/ui/button";
import heroSanctuary from "@/assets/hero-sanctuary.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-twilight overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSanctuary} 
          alt="Digital sanctuary landscape" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-sanctuary opacity-20"></div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-foreground">
          <span className="block">Hearth,</span>
          <span className="block text-primary font-medium">your personal elements.</span>
          <span className="block text-secondary">Mastered.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Four gentle companions that guide your journey — offering emotional warmth, 
          soft structure, and thoughtful presence in your digital sanctuary.
        </p>

        {/* Elemental Tagline */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
          <span className="flex items-center gap-2 text-primary">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            Emotional Warmth
          </span>
          <span className="flex items-center gap-2 text-secondary">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-300"></div>
            Soft Structure
          </span>
          <span className="flex items-center gap-2 text-accent">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-600"></div>
            Social Presence
          </span>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <Button 
            variant="sanctuary" 
            size="sanctuary"
            className="hover:scale-105 transition-transform duration-200"
          >
            Get Early Access
          </Button>
        </div>

        {/* Subtle Description */}
        <p className="text-sm text-muted-foreground/60 font-light italic">
          Not just a tool — a space that feels like exhaling after holding your breath
        </p>
      </div>
    </section>
  );
};

export default HeroSection;