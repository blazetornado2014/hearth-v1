import { Button } from "@/components/ui/button";
import heroSanctuary from "@/assets/hero-sanctuary.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSanctuary} 
          alt="Digital sanctuary landscape" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Clean, Duolingo-style Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-foreground">
          Master your personal elements
        </h1>

        {/* Simple, Clear Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Four gentle companions that guide your journey to emotional wellness and personal growth
        </p>

        {/* Single, Prominent CTA */}
        <div className="mb-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            Get Started Free
          </Button>
        </div>

        {/* Simple Feature List */}
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Emotional Processing
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Gentle Guidance
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Personal Growth
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;