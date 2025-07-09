const IntroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-sanctuary-whisper overflow-hidden sanctuary-overlay">
      {/* Sanctuary atmosphere */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-primary/12 to-transparent rounded-full blur-3xl animate-pulse-sanctuary"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-secondary/8 to-transparent rounded-full blur-3xl animate-breathe-sanctuary"></div>
        
        {/* Elemental connections */}
        <div className="absolute top-32 right-32 w-1 h-1 bg-primary rounded-full animate-starlight-twinkle opacity-60"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-secondary rounded-full animate-starlight-twinkle opacity-70" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/2 w-0.5 h-0.5 bg-accent rounded-full animate-starlight-twinkle opacity-80" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8 leading-tight text-sanctuary-glow">
          <span className="block text-whisper whisper-text">Meet your</span>
          <span className="block text-primary font-normal">Digital Companions</span>
        </h2>

        <p className="text-lg md:text-xl text-whisper max-w-3xl mx-auto mb-12 leading-relaxed whisper-text">
          Four ancient elements, reimagined as gentle guides for your digital life. 
          Each companion offers a unique approach to processing thoughts, emotions, and decisions — 
          creating a complete system for personal growth without judgment or pressure.
        </p>

        {/* Elemental Companions */}
        <div className="grid md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center group transition-elemental hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-spark-electric to-spark-lightning rounded-full mx-auto mb-3 animate-electric-dance group-hover:animate-lightning-whisper transition-elemental glow-spark"></div>
            <h3 className="text-sm font-medium text-foreground mb-1 whisper-text">Spark</h3>
            <p className="text-xs text-whisper">Electric Insight</p>
          </div>
          
          <div className="text-center group transition-elemental hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-loom-mist to-loom-ink rounded-full mx-auto mb-3 animate-mist-flow group-hover:animate-ink-ripple transition-elemental glow-loom" style={{animationDelay: '0.3s'}}></div>
            <h3 className="text-sm font-medium text-foreground mb-1 whisper-text">Loom</h3>
            <p className="text-xs text-whisper">Emotional Processing</p>
          </div>
          
          <div className="text-center group transition-elemental hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-path-emerald to-path-starlight rounded-full mx-auto mb-3 animate-forest-sway group-hover:animate-starlight-twinkle transition-elemental glow-path" style={{animationDelay: '0.6s'}}></div>
            <h3 className="text-sm font-medium text-foreground mb-1 whisper-text">Path</h3>
            <p className="text-xs text-whisper">Gentle Guidance</p>
          </div>
          
          <div className="text-center group transition-elemental hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-forge-copper to-forge-obsidian rounded-full mx-auto mb-3 animate-ember-glow group-hover:animate-molten-flow transition-elemental glow-forge" style={{animationDelay: '0.9s'}}></div>
            <h3 className="text-sm font-medium text-foreground mb-1 whisper-text">Forge</h3>
            <p className="text-xs text-whisper">Creative Action</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <blockquote className="text-sm text-whisper mb-4 border-none p-0 m-0">
            "Each companion holds ancient wisdom, adapted for your digital sanctuary"
          </blockquote>
          
          <div className="flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer-sanctuary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;