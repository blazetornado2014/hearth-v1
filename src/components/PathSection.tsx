import pathHorizon from "@/assets/path-horizon.png";

const PathSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-path-bg overflow-hidden flex items-center">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-path-green/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Element - Left */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Background horizon image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={pathHorizon} 
                  alt="Path through nature toward horizon" 
                  className="w-72 h-72 opacity-40 animate-grow-gentle"
                />
              </div>
              
              {/* Converging path lines */}
              <div className="absolute inset-0">
                {/* Main path lines converging toward center/horizon */}
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  {/* Left converging line */}
                  <path
                    d="M50 350 Q200 200 350 50"
                    stroke="hsl(var(--path-green))"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.5"
                    strokeDasharray="5,5"
                    className="animate-path-emerge"
                  />
                  {/* Right converging line */}
                  <path
                    d="M50 50 Q200 200 350 350"
                    stroke="hsl(var(--path-sage))"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                    strokeDasharray="3,3"
                    className="animate-path-emerge delay-1000"
                  />
                  {/* Horizontal horizon line */}
                  <path
                    d="M100 200 L300 200"
                    stroke="hsl(var(--path-sand))"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                    className="animate-path-emerge delay-2000"
                  />
                </svg>
                
                {/* Growth center point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-gradient-path rounded-full animate-grow-gentle shadow-lg shadow-path-green/30"></div>
                </div>
              </div>

              {/* Gentle expanding rings representing growth */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 border border-path-green/15 rounded-full animate-grow-gentle"></div>
                <div className="absolute inset-12 border border-path-sage/10 rounded-full animate-grow-gentle delay-1000"></div>
                <div className="absolute inset-24 border border-path-sand/8 rounded-full animate-grow-gentle delay-2000"></div>
              </div>
            </div>

            {/* Soft directional glow */}
            <div className="absolute inset-0 bg-gradient-path opacity-5 rounded-full blur-3xl animate-breathe"></div>
          </div>

          {/* Content - Right */}
          <div className="text-left max-w-xl">
            {/* Headline */}
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 leading-tight">
              <span className="block">Grow</span>
              <span className="block text-path-green font-medium">Toward</span>
              <span className="block text-path-sage">What Matters</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-10">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                A compass for long-term personal development — helping you define values, 
                set meaningful goals, and orient yourself on your life journey.
              </p>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light italic">
                Path doesn't push. It gently guides, where purpose is clarified 
                and direction slowly emerges.
              </p>
            </div>

            {/* Growth aspects */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-path-green">
                <div className="w-2 h-2 bg-path-green rounded-full animate-grow-gentle"></div>
                <span className="text-sm font-medium">Define Your Values</span>
              </div>
              <div className="flex items-center gap-3 text-path-sage">
                <div className="w-2 h-2 bg-path-sage rounded-full animate-grow-gentle delay-700"></div>
                <span className="text-sm font-medium">Set Meaningful Goals</span>
              </div>
              <div className="flex items-center gap-3 text-path-sand">
                <div className="w-2 h-2 bg-path-sand rounded-full animate-grow-gentle delay-1400"></div>
                <span className="text-sm font-medium">Orient Your Journey</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;