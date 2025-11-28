import { Play } from "lucide-react";

export default function Showreel({ reelRef }) {
  return (
    <section ref={reelRef} className="py-20 px-6 bg-slate-900">
      <h2 className="text-5xl text-center text-cyan-400 mb-8">Showreel</h2>

      <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/hlah3L8VHd4"
          title="Showreel Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
