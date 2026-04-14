export default function Footer() {
  const whatsappUrl = "https://wa.me/5543984989220";

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663145715139/S6EqWXLHAhcvApRMnLzi6o/dog-logo-MJnxryXcgXBm9MNbGoCyU7.png" alt="PassageiroPet" className="w-9 h-9" />
              <span className="font-bold text-lg">PassageiroPet</span>
            </div>
            <p className="text-white/70 text-sm">
              Transporte seguro de cães e gatos desde 2009.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#por-que-nos" className="hover:text-white transition-colors">
                  Por Que Nos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Transporte Terrestre</li>
              <li>Transporte Aéreo</li>
              <li>Mudança Internacional</li>
              <li>Busca e Entrega</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <p className="text-white/70 text-sm mb-4">
              Fale conosco via WhatsApp para orçamentos e informações.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-4 py-2 rounded transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.992 1.327c-1.55.749-2.982 1.812-4.185 3.127C5.071 9.653 4.37 11.05 4.07 12.56c-.299 1.51-.17 3.07.521 4.55.691 1.48 1.892 2.71 3.509 3.462 1.616.752 3.598.734 5.355-.054 1.757-.789 3.106-2.2 3.829-3.996.723-1.797.573-3.773-.425-5.195-.998-1.422-2.88-2.278-4.703-2.218z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
          <p>&copy; 2024 PassageiroPet. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
