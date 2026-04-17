import { Truck, Plane, MapPin, Heart } from "lucide-react";

export default function ValueProposition() {
  const values = [
    {
      icon: Truck,
      title: "Transporte Terrestre",
      description: "Viagens seguras por estrada com conforto e cuidado especial para seu pet.",
    },
    {
      icon: Plane,
      title: "Transporte Aéreo",
      description: "Voos internacionais com todas as documentações e procedimentos de segurança.",
    },
    {
      icon: MapPin,
      title: "Busca e Entrega",
      description: "Buscamos seu pet em casa e entregamos no destino final. Serviço door-to-door.",
    },
    {
      icon: Heart,
      title: "Bem-Estar Total",
      description: "Seu pet é tratado como VIP. Segurança, conforto e cuidado em cada etapa.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Por Que Escolher TransportaPet</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Somos especialistas em transporte de pets com mais de 13 anos de experiência. Cada detalhe é pensado para o bem-estar do seu companheiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-primary font-bold mb-2">{value.title}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
