import { Award, Users, Shield, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "13+ Anos de Experiência",
      description: "Atuando desde 2013, somos referência em transporte de pets no Brasil e exterior.",
    },
    {
      icon: Users,
      title: "Equipe Profissional",
      description: "Especialistas treinados e comprometidos com o bem-estar do seu pet.",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Todos os procedimentos seguem normas internacionais de segurança e bem-estar animal.",
    },
    {
      icon: Zap,
      title: "Serviço Completo",
      description: "Buscamos e entregamos seu pet. Cuidamos de toda a documentação e logística.",
    },
  ];

  return (
    <section id="por-que-nos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663145715139/S6EqWXLHAhcvApRMnLzi6o/delivery-image_db58729d.png"
              alt="Família reunida com seu pet"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-primary mb-6">Por Que Nos Escolher</h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Somos mais do que uma transportadora. Somos parceiros na jornada do seu pet, garantindo segurança, conforto e profissionalismo em cada etapa.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                      <p className="text-foreground/70 text-sm">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
