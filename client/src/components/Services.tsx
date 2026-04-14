import { Button } from "@/components/ui/button";

export default function Services() {
  const whatsappUrl = "https://wa.me/5543984989220?text=Olá%20PassageiroPet!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20transporte%20de%20pets.";


  const services = [
    {
      title: "Transporte Terrestre",
      description: "Viagens seguras por estrada em todo o Brasil. Seu pet viaja em conforto com paradas estratégicas.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663145715139/S6EqWXLHAhcvApRMnLzi6o/hero-image_7eeb136a.png",
    },
    {
      title: "Transporte Aéreo",
      description: "Voos internacionais com documentação completa. Seu pet viaja seguro em aeronaves modernas.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663145715139/S6EqWXLHAhcvApRMnLzi6o/airplane-image_d04849fe.png",
    },
    {
      title: "Mudança Internacional",
      description: "Transporte completo para o exterior. Cuidamos de toda a burocracia e documentação necessária.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663145715139/S6EqWXLHAhcvApRMnLzi6o/delivery-image_db58729d.png",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Nossos Serviços</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas de transporte para cães e gatos, adaptadas às suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
