import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink } from "lucide-react";

export default function Contact({ contactRef }) {
  return (
    <section ref={contactRef} className="py-20 px-6 bg-slate-900">
      <h2 className="text-5xl text-center text-cyan-400 mb-12">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl text-cyan-400 mb-6">Contact</h3>

          <div className="space-y-4 text-slate-300">
            <p className="flex items-center gap-3">
              <Mail className="text-cyan-400" /> 
              dipeshrohilla.dr@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-cyan-400" /> 
              +91-9971611746
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-cyan-400" /> 
              Mumbai / Delhi
            </p>
          </div>

          {/* Social Links */}
          <h3 className="text-2xl text-cyan-400 mt-8 mb-4">Socials</h3>

          <div className="flex gap-4">

            {/* Instagram */}
            <a 
              href="https://instagram.com/aaam_ras?igshid=hkypfnu49kua"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
            >
              <Instagram size={20} />
            </a>

            {/* IMDb */}
            <a 
              href="https://m.imdb.com/name/nm13421862/?fbclid=PAAaZqF4wFsratKQ8s6cKmVj-9iFQ7jGgC_mKT_jnO8j63721a_t80mVeEjnI&ref_=ext_shr_lnk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
            >
              <ExternalLink size={20} />
            </a>

          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl text-cyan-400 mb-6">Send a Message</h3>

          <div className="space-y-4">
            <input 
              className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded" 
              placeholder="Name"
            />
            <input 
              className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded" 
              placeholder="Email"
            />
            <textarea 
              rows="5"
              className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded" 
              placeholder="Message"
            ></textarea>
            <button 
              className="w-full py-3 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition"
            >
              SEND
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
