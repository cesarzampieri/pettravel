import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/5543988706090?text=Olá%20TransportaPet!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20transporte%20de%20pets.";




  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663145715139/S6EqWXLHAhcvApRMnLzi6o/hero-image_7eeb136a.png"
          alt="Cão e gato viajando de carro"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Seu Pet Merece uma Viagem Segura
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Transporte terrestre e aéreo para cães e gatos. Buscamos e entregamos no seu destino final, com segurança e conforto. Desde 2013 reunindo famílias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 h-auto gap-2 w-full sm:w-auto">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.992 1.327c-1.55.749-2.982 1.812-4.185 3.127C5.071 9.653 4.37 11.05 4.07 12.56c-.299 1.51-.17 3.07.521 4.55.691 1.48 1.892 2.71 3.509 3.462 1.616.752 3.598.734 5.355-.054 1.757-.789 3.106-2.2 3.829-3.996.723-1.797.573-3.773-.425-5.195-.998-1.422-2.88-2.278-4.703-2.218z" />
                </svg>
                Fale Conosco
              </Button>
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("como-funciona");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto transition-colors w-full sm:w-auto"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
