import { Menu, X } from "lucide-react";

export default function Navbar({ navItems, scrolled, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-slate-950/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ALEX MORGAN</h1>

        <div className="hidden md:flex gap-8">
          {navItems.map((i) => (
            <button key={i.name} onClick={() => scrollToSection(i.ref)} className="hover:text-cyan-400">
              {i.name}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 py-6">
          {navItems.map((i) => (
            <button key={i.name} onClick={() => scrollToSection(i.ref)} className="w-full text-left px-6 py-3 hover:bg-cyan-500/10">
              {i.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
