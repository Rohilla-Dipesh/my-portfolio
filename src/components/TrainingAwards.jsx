import { Award, Film } from "lucide-react";
import { training } from "../data/training";
import { awards } from "../data/awards";

export default function TrainingAwards() {
  return (
    <section className="py-20 px-6 bg-slate-950 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      
      <div>
        <h2 className="text-4xl flex items-center gap-3 mb-8">
          <Film className="text-cyan-400" />
          Training
        </h2>

        {training.map((t, i) => (
          <div key={i} className="mb-6 border-b border-slate-800 pb-6">
            <h3 className="text-xl text-cyan-400">{t.school}</h3>
            <p>{t.degree}</p>
            <p className="text-sm text-slate-500">{t.year}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-4xl flex items-center gap-3 mb-8">
          <Award className="text-cyan-400" />
          Awards
        </h2>

        {awards.map((a, i) => (
          <div key={i} className="mb-6 border-b border-slate-800 pb-6">
            <h3 className="text-xl text-cyan-400">{a.name}</h3>
            <p>{a.event}</p>
            <p className="text-sm text-slate-500">{a.year}</p>
          </div>
        ))}
      </div>

    </section>
  );
}