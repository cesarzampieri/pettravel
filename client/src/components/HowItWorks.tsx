import { CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Consulta Inicial",
      description: "Entre em contato conosco via WhatsApp. Discutimos suas necessidades, origem e destino.",
    },
    {
      number: "2",
      title: "Planejamento",
      description: "Preparamos toda a documentação necessária e escolhemos a melhor rota para seu pet.",
    },
    {
      number: "3",
      title: "Busca e Preparação",
      description: "Buscamos seu pet em casa e realizamos todos os procedimentos de preparação.",
    },
    {
      number: "4",
      title: "Transporte",
      description: "Seu pet viaja com segurança e conforto. Você recebe atualizações durante toda a jornada.",
    },
    {
      number: "5",
      title: "Entrega",
      description: "Entregamos seu pet no destino final, seguro e feliz de reencontrar você.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Como Funciona</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Nosso processo é simples, seguro e pensado para oferecer tranquilidade em cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-16 w-0.5 h-12 bg-border transform translate-x-6"></div>
                )}
              </div>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-foreground/70 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline for mobile/tablet */}
        <div className="mt-12 lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-border my-2"></div>
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
