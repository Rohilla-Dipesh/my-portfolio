export default function Hero({ reelRef, scrollToSection }) {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950"></div>

      <img 
        src="/public/images/headshot_1.jpeg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative text-center z-10">
        <h2 className="text-6xl md:text-8xl font-bold mb-4">ALEX MORGAN</h2>
        <p className="text-xl md:text-3xl text-cyan-400">ACTOR • PERFORMER • ARTIST</p>

        <button 
          onClick={() => scrollToSection(reelRef)}
          className="mt-8 px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
        >
          VIEW SHOWREEL
        </button>
      </div>
    </section>
  );
}
