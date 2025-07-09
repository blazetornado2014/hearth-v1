const IntroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Gentle atmospheric elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-secondary/6 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Subtle connecting elements */}
        <div className="absolute top-32 right-32 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute top-2/3 right-1/2 w-0.5 h-0.5 bg-accent rounded-full animate-pulse delay-1500 opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8 leading-tight">
          <span className="block text-muted-foreground">Meet your</span>
          <span className="block text-primary font-medium">Digital Companions</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Four ancient elements, reimagined as gentle guides for your digital life. 
          Each companion offers a unique approach to processing thoughts, emotions, and decisions — 
          creating a complete system for personal growth without judgment or pressure.
        </p>

        {/* Companion preview */}
        <div className="grid md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-spark-electric to-spark-violet rounded-full mx-auto mb-3 animate-glow-pulse group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-sm font-medium text-foreground mb-1">Spark</h3>
            <p className="text-xs text-muted-foreground">Electric Insight</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-loom-blue to-loom-lavender rounded-full mx-auto mb-3 animate-glow-pulse delay-300 group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-sm font-medium text-foreground mb-1">Loom</h3>
            <p className="text-xs text-muted-foreground">Emotional Processing</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-path-green to-path-sage rounded-full mx-auto mb-3 animate-glow-pulse delay-600 group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-sm font-medium text-foreground mb-1">Path</h3>
            <p className="text-xs text-muted-foreground">Gentle Guidance</p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-forge-copper to-forge-earth rounded-full mx-auto mb-3 animate-glow-pulse delay-900 group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-sm font-medium text-foreground mb-1">Forge</h3>
            <p className="text-xs text-muted-foreground">Creative Action</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground/80 italic mb-4">
            "Each companion holds ancient wisdom, adapted for your digital sanctuary"
          </p>
          
          <div className="flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;