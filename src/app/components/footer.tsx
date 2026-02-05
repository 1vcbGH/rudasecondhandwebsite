import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">RUDA SECOND HAND</h3>
            <p className="text-neutral-400 text-sm">
              Moda sostenible y única. Cada prenda tiene su historia.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="hover:text-neutral-300">
                <Instagram className="size-5" />
              </button>
              <button className="hover:text-neutral-300">
                <Facebook className="size-5" />
              </button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Tienda</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><button className="hover:text-white">Mujer</button></li>
              <li><button className="hover:text-white">Hombre</button></li>
              <li><button className="hover:text-white">Accesorios</button></li>
              <li><button className="hover:text-white">Novedades</button></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><button className="hover:text-white">Sobre nosotros</button></li>
              <li><button className="hover:text-white">Envíos</button></li>
              <li><button className="hover:text-white">Devoluciones</button></li>
              <li><button className="hover:text-white">FAQ</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="size-4" />
                <span>info@rudasecondhand.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4" />
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>© 2026 RUDA Second Hand. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
