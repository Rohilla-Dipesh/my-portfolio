import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink } from "lucide-react";

export default function Contact({ contactRef }) {
  return (
    <section ref={contactRef} className="py-20 px-6 bg-slate-900">
      <h2 className="text-5xl text-center text-cyan-400 mb-12">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        <div>
          <h3 className="text-2xl text-cyan-400 mb-6">Contact</h3>

          <div className="space-y-4 text-slate-300">
            <p className="flex items-center gap-3"><Mail /> alex.morgan@email.com</p>
            <p className="flex items-center gap-3"><Phone /> +1 (555) 123-4567</p>
            <p className="flex items-center gap-3"><MapPin /> Los Angeles, CA</p>
          </div>

          <h3 className="text-2xl text-cyan-400 mt-8 mb-4">Socials</h3>
          <div className="flex gap-4">
            <Instagram />
            <Linkedin />
            <ExternalLink />
          </div>
        </div>

        <div>
          <h3 className="text-2xl text-cyan-400 mb-6">Send a Message</h3>

          <div className="space-y-4">
            <input className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded" placeholder="Name"/>
            <input className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded" placeholder="Email"/>
            <textarea rows="5" className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded" placeholder="Message"></textarea>
            <button className="w-full py-3 bg-cyan-500 text-black font-bold rounded">SEND</button>
          </div>

        </div>

      </div>
    </section>
  );
}
