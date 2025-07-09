import { Button } from "@/components/ui/button";
import heroSanctuary from "@/assets/hero-sanctuary.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-twilight">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSanctuary} 
          alt="Digital sanctuary landscape" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-sanctuary opacity-30"></div>
      </div>

      {/* Floating Elements for Magical Feel */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-sanctuary-glow rounded-full animate-glow-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary rounded-full animate-float-gentle opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-secondary rounded-full animate-glow-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-float-gentle opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 text-foreground">
          <span className="block">Hearth,</span>
          <span className="block text-primary font-medium">your personal elements.</span>
          <span className="block text-secondary">Mastered.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed font-light">
          Four mystical elements that guide your journey — offering emotional warmth, 
          soft structure, and social presence in your digital sanctuary.
        </p>

        {/* Elemental Tagline */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <span className="flex items-center gap-2 text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
            Emotional Warmth
          </span>
          <span className="flex items-center gap-2 text-secondary">
            <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse delay-75"></div>
            Soft Structure
          </span>
          <span className="flex items-center gap-2 text-accent">
            <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse delay-150"></div>
            Social Presence
          </span>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up">
          <Button 
            variant="sanctuary" 
            size="sanctuary"
            className="animate-float-gentle"
          >
            Get Early Access
          </Button>
        </div>

        {/* Subtle Description */}
        <p className="text-sm text-muted-foreground/70 mt-8 font-light italic">
          Not just a tool — a space that feels like exhaling after holding your breath
        </p>
      </div>
    </section>
  );
};

export default HeroSection;