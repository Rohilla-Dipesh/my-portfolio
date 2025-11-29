import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Instagram, ExternalLink } from "lucide-react";

export default function Contact({ contactRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.send(
      "service_yphsjfo",
      "template_6azuwa6",
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      },
      "WXwDcs9_ZFqBfg_Bj"
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => setStatus("Failed to send message. Please try again."));
  };

  return (
    <section ref={contactRef} className="py-20 px-6 bg-slate-900">
      <h2 className="text-5xl text-center text-cyan-400 mb-12">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl text-cyan-400 mb-6">Contact</h3>

          <div className="space-y-4 text-slate-300">
            <p className="flex items-center gap-3"><Mail className="text-cyan-400" /> dipeshr061@gmail.com</p>
            <p className="flex items-center gap-3"><Phone className="text-cyan-400" /> +91-9971611746</p>
            <p className="flex items-center gap-3"><MapPin className="text-cyan-400" /> Mumbai / Delhi</p>
          </div>

          <h3 className="text-2xl text-cyan-400 mt-8 mb-4">Socials</h3>

          <div className="flex gap-4">
            <a href="https://instagram.com/aaam_ras?igshid=hkypfnu49kua"
              target="_blank"
              className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all">
              <Instagram size={20} />
            </a>

            <a href="https://m.imdb.com/name/nm13421862/"
              target="_blank"
              className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl text-cyan-400 mb-6">Send a Message</h3>

          <form onSubmit={sendEmail} className="space-y-4">

            <input
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
              className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded"
            />

            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your Email"
              className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded"
            />

            <textarea
              required
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message"
              className="w-full py-3 px-4 bg-slate-950 border border-slate-700 rounded"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition"
            >
              SEND
            </button>

            {status && (
              <p className="text-center text-cyan-400 text-sm mt-2">{status}</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
