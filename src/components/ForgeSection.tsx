import forgeTools from "@/assets/forge-tools.png";

const ForgeSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-800 via-amber-900 to-slate-900 overflow-hidden flex items-center">
      {/* Underground forge atmosphere */}
      <div className="absolute inset-0 opacity-40">
        {/* Molten core glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-900/25 via-red-900/30 to-slate-900/40"></div>
        <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-gradient-radial from-orange-500/12 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-radial from-red-500/8 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Molten sparks */}
        <div className="absolute top-32 left-32 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-500 opacity-70"></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse delay-1500 opacity-50"></div>
        
        {/* Forge fire veins */}
        <div className="absolute top-40 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/15 to-transparent animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-pulse delay-700 opacity-25"></div>
        
        {/* Stone altar texture */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-stone-600/20 rounded-sm rotate-12 animate-pulse opacity-30"></div>
        <div className="absolute bottom-24 right-24 w-12 h-12 bg-amber-600/15 rounded-sm -rotate-6 animate-pulse delay-800 opacity-25"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-orange-700/25 rounded-sm rotate-45 animate-pulse delay-1200 opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Molten Visual - Left */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
              {/* Sacred forge tools */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={forgeTools} 
                  alt="Sacred forge and molten creation" 
                  className="w-64 h-64 opacity-60 animate-pulse filter drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.2))' }}
                />
              </div>
              
              {/* Molten core structure */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-sm animate-pulse shadow-lg shadow-orange-400/50"></div>
                
                {/* Building grid - stone altar */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-8 opacity-40">
                  <div className="bg-stone-600/30 rounded-sm animate-pulse delay-200"></div>
                  <div className="bg-orange-600/25 rounded-sm animate-pulse delay-400"></div>
                  <div className="bg-amber-600/20 rounded-sm animate-pulse delay-600"></div>
                  <div className="bg-red-600/35 rounded-sm animate-pulse delay-800"></div>
                  <div className="bg-gradient-to-r from-orange-500/40 to-red-500/30 rounded-sm animate-pulse delay-1000"></div>
                  <div className="bg-stone-600/25 rounded-sm animate-pulse delay-1200"></div>
                  <div className="bg-orange-600/30 rounded-sm animate-pulse delay-1400"></div>
                  <div className="bg-amber-600/35 rounded-sm animate-pulse delay-1600"></div>
                  <div className="bg-red-600/25 rounded-sm animate-pulse delay-1800"></div>
                </div>
                
                {/* Radiant structure */}
                <div className="absolute inset-0 border border-orange-400/20 rounded-lg animate-pulse"></div>
                <div className="absolute inset-4 border border-red-400/15 rounded-lg animate-pulse delay-500"></div>
                <div className="absolute inset-8 border border-amber-400/10 rounded-lg animate-pulse delay-1000"></div>
              </div>
            </div>
            
            {/* Forge glow */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-red-500/5 to-transparent rounded-lg blur-3xl animate-pulse"></div>
          </div>

          {/* Sacred Text - Right */}
          <div className="text-left max-w-xl">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              <span className="text-slate-200">Shape</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-medium">
                Sacred
              </span>
              <span className="block text-slate-200">Fire</span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
              In the underground sanctuary where dreams become substance, where the molten core of intention 
              meets the ancient stone of commitment. Here, beneath the mountain's heart, 
              your visions are hammered into being — not through force, but through devotion.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-orange-300">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-sm animate-pulse shadow-lg shadow-orange-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Sacred Intention</span>
              </div>
              <div className="flex items-center gap-4 text-red-300">
                <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-sm animate-pulse delay-500 shadow-lg shadow-red-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Molten Focus</span>
              </div>
              <div className="flex items-center gap-4 text-amber-300">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-sm animate-pulse delay-1000 shadow-lg shadow-amber-400/50"></div>
                <span className="text-sm font-medium tracking-wide">Living Creation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgeSection;