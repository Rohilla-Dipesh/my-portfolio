import { projects } from "../data/projects";
import { Play } from "lucide-react";

export default function Work({ workRef }) {
  return (
    <section ref={workRef} className="py-20 px-6 bg-slate-900">
      <h2 className="text-5xl text-center text-cyan-400 mb-12">Recent Work</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="relative group">
            <img 
              src={p.image}
              className="w-full h-80 object-cover rounded-lg group-hover:scale-110 transition"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 opacity-80 rounded-lg"></div>

            <div className="absolute bottom-0 p-6">
              <p className="text-cyan-400">{p.type} • {p.year}</p>
              <h3 className="text-2xl">{p.title}</h3>
              <p>{p.role}</p>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
              <Play className="text-cyan-400" size={32} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
