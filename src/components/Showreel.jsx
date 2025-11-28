import { Play } from "lucide-react";

export default function Showreel({ reelRef }) {
  return (
    <section ref={reelRef} className="py-20 px-6 bg-slate-900">
      <h2 className="text-5xl text-center text-cyan-400 mb-8">Showreel</h2>

      <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-slate-900">
        <img 
          src="https://youtu.be/hlah3L8VHd4?si=H4iQPOK7KawjIT8l"
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
