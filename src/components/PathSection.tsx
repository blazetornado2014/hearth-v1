import { Compass, TreePine, Target } from "lucide-react";
import pathHorizon from "@/assets/path-horizon.png";

const PathSection = () => {
  return (
    <section className="relative py-32 bg-gradient-path-bg overflow-hidden">
      {/* Horizon ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizon lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-path-horizon animate-horizon-drift opacity-30"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-path-horizon animate-horizon-drift opacity-25 delay-3000"></div>
        
        {/* Growth rings */}
        <div className="absolute top-20 right-20 w-16 h-16 border border-path-sage/20 rounded-full animate-grow-gentle opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-path-green/15 rounded-full animate-grow-gentle delay-1000 opacity-30"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 border border-path-sand/25 rounded-full animate-grow-gentle delay-2000 opacity-35"></div>
        
        {/* Gentle compass points */}
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-path-green rounded-full animate-grow-gentle opacity-50"></div>
        <div className="absolute bottom-40 right-1/4 w-1.5 h-1.5 bg-path-sage rounded-full animate-grow-gentle delay-1500 opacity-40"></div>
        <div className="absolute top-2/3 left-1/6 w-0.5 h-0.5 bg-path-sand rounded-full animate-grow-gentle delay-500 opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            {/* Icon cluster */}
            <div className="flex items-center gap-6 mb-12">
              <div className="relative">
                <Compass className="w-14 h-14 text-path-green animate-grow-gentle" />
                <div className="absolute inset-0 bg-path-green opacity-15 rounded-full blur-lg animate-breathe"></div>
              </div>
              <TreePine className="w-10 h-10 text-path-sage animate-grow-gentle delay-300" />
              <Target className="w-8 h-8 text-path-sand animate-grow-gentle delay-600" />
            </div>

            {/* Headline - spacious and breathing */}
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 leading-[1.15]">
              <span className="block mb-2">Grow</span>
              <span className="block text-path-green font-medium mb-2">Toward</span>
              <span className="block text-path-sage">What Matters</span>
            </h2>

            {/* Description with breathing space */}
            <div className="space-y-6 mb-12 max-w-xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                A compass for long-term personal development — helping you define values, 
                set meaningful goals, and orient yourself on your life journey.
              </p>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light italic">
                Path doesn't push. It gently guides, where purpose is clarified 
                and direction slowly emerges.
              </p>
            </div>

            {/* Growth aspects - spaced generously */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-path-green">
                <div className="w-2 h-2 bg-path-green rounded-full animate-grow-gentle"></div>
                <span>Define Your Values</span>
              </div>
              <div className="flex items-center gap-3 text-path-sage">
                <div className="w-2 h-2 bg-path-sage rounded-full animate-grow-gentle delay-700"></div>
                <span>Set Meaningful Goals</span>
              </div>
              <div className="flex items-center gap-3 text-path-sand">
                <div className="w-2 h-2 bg-path-sand rounded-full animate-grow-gentle delay-1400"></div>
                <span>Orient Your Journey</span>
              </div>
            </div>
          </div>

          {/* Visual Element - horizon-oriented */}
          <div className="relative">
            {/* Central path visualization */}
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Background horizon image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={pathHorizon} 
                  alt="Path through nature toward horizon" 
                  className="w-80 h-80 opacity-50 animate-grow-gentle"
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
                    opacity="0.4"
                    strokeDasharray="5,5"
                    className="animate-path-emerge"
                  />
                  {/* Right converging line */}
                  <path
                    d="M50 50 Q200 200 350 350"
                    stroke="hsl(var(--path-sage))"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                    strokeDasharray="3,3"
                    className="animate-path-emerge delay-1000"
                  />
                  {/* Horizontal horizon line */}
                  <path
                    d="M100 200 L300 200"
                    stroke="hsl(var(--path-sand))"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                    className="animate-path-emerge delay-2000"
                  />
                </svg>
                
                {/* Growth center point */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-gradient-path rounded-full animate-grow-gentle shadow-lg shadow-path-green/30"></div>
                </div>
              </div>

              {/* Gentle expanding rings representing growth */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 border border-path-green/15 rounded-full animate-grow-gentle"></div>
                <div className="absolute inset-12 border border-path-sage/10 rounded-full animate-grow-gentle delay-1000"></div>
                <div className="absolute inset-24 border border-path-sand/8 rounded-full animate-grow-gentle delay-2000"></div>
                <div className="absolute inset-36 border border-path-horizon/5 rounded-full animate-grow-gentle delay-3000"></div>
              </div>
            </div>

            {/* Soft directional glow */}
            <div className="absolute inset-0 bg-gradient-path opacity-5 rounded-full blur-3xl animate-breathe"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;