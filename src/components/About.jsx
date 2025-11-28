import { skills } from "../data/skills";

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef} className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center text-cyan-400 mb-12">About</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <img 
            src="/images/perform-6.jpeg"
            className="rounded-lg shadow-lg border border-cyan-500/20"
        />


          <div>
            <p className="text-lg text-slate-300 mb-6">
              With over 5 years of experience...
            </p>

            <h3 className="text-2xl text-cyan-400 mb-4">Skills</h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
