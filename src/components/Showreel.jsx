import { Play } from "lucide-react";

export default function Showreel({ reelRef }) {
  return (
    <section ref={reelRef} className="py-20 px-6 bg-slate-900">
      <h2 className="text-5xl text-center text-cyan-400 mb-8">Showreel</h2>

      <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200"
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-cyan-500 p-6 rounded-full">
            <Play size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
