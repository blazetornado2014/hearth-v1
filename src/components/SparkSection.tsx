import { Zap } from "lucide-react";
import sparkIcon from "@/assets/spark-icon.png";

const SparkSection = () => {
  return (
    <section className="relative py-24 bg-gradient-spark-bg overflow-hidden">
      {/* Electric ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Kinetic lines */}
        <div className="absolute top-20 left-10 w-32 h-0.5 bg-gradient-to-r from-transparent via-spark-electric to-transparent animate-lightning-flicker opacity-40"></div>
        <div className="absolute bottom-32 right-20 w-24 h-0.5 bg-gradient-to-r from-transparent via-spark-violet to-transparent animate-lightning-flicker opacity-30 delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-spark-electric to-transparent animate-lightning-flicker opacity-50 delay-500"></div>
        
        {/* Electric particles */}
        <div className="absolute top-32 right-32 w-1 h-1 bg-spark-electric rounded-full animate-electric-pulse"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-spark-violet rounded-full animate-electric-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-spark-electric rounded-full animate-lightning-flicker delay-300"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            {/* Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <img 
                  src={sparkIcon} 
                  alt="Spark element symbol" 
                  className="w-16 h-16 animate-electric-pulse"
                />
                <div className="absolute inset-0 bg-spark-electric opacity-20 rounded-full blur-xl animate-glow-pulse"></div>
              </div>
              <Zap className="w-8 h-8 text-spark-violet animate-lightning-flicker" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
              Catch the
              <span className="block text-spark-electric font-medium animate-electric-pulse">
                Spark
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
              A flash of insight, a surge of emotional energy — the moment something shifts. 
              This is where ideas crackle into being, emotions are activated, 
              and conversations begin their dance.
            </p>

            {/* Element details */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2 text-spark-electric">
                <div className="w-1.5 h-1.5 bg-spark-electric rounded-full animate-electric-pulse"></div>
                Sudden Clarity
              </span>
              <span className="flex items-center gap-2 text-spark-violet">
                <div className="w-1.5 h-1.5 bg-spark-violet rounded-full animate-electric-pulse delay-200"></div>
                Inspiration
              </span>
              <span className="flex items-center gap-2 text-spark-electric">
                <div className="w-1.5 h-1.5 bg-spark-electric rounded-full animate-electric-pulse delay-400"></div>
                Initial Motion
              </span>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            {/* Large stylized lightning */}
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Central spark */}
              <div className="absolute w-4 h-4 bg-gradient-spark rounded-full animate-electric-pulse shadow-lg shadow-spark-electric/50"></div>
              
              {/* Branching lines */}
              <div className="absolute inset-0">
                {/* Main bolt */}
                <div className="absolute top-12 left-1/2 w-1 h-32 bg-gradient-to-b from-spark-electric to-transparent rotate-12 animate-lightning-flicker origin-top"></div>
                <div className="absolute bottom-12 left-1/2 w-0.5 h-24 bg-gradient-to-t from-spark-violet to-transparent -rotate-6 animate-lightning-flicker delay-300 origin-bottom"></div>
                
                {/* Side branches */}
                <div className="absolute top-20 left-1/3 w-0.5 h-16 bg-gradient-to-b from-spark-electric to-transparent rotate-45 animate-lightning-flicker delay-500 origin-top opacity-70"></div>
                <div className="absolute top-32 right-1/3 w-0.5 h-12 bg-gradient-to-b from-spark-violet to-transparent -rotate-30 animate-lightning-flicker delay-800 origin-top opacity-60"></div>
                
                {/* Energy rings */}
                <div className="absolute inset-0 border border-spark-electric/30 rounded-full animate-electric-pulse"></div>
                <div className="absolute inset-4 border border-spark-violet/20 rounded-full animate-electric-pulse delay-500"></div>
                <div className="absolute inset-8 border border-spark-electric/10 rounded-full animate-electric-pulse delay-1000"></div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-spark opacity-5 rounded-full blur-3xl animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;