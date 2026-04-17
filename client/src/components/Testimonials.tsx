import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alaice",
      location: "Londrina → Boston",
      text: "Confiei meu querido Max à TransportaPet e não me arrependo. Ele chegou em Miami seguro, feliz e bem cuidado. Excelente atendimento!",
      rating: 5,
    },
    {
      name: "Cláudia",
      location: "Londrina → Londres",
      text: "Processo tranquilo do início ao fim. A equipe foi atenciosa, respondeu todas as minhas dúvidas e minha gata Chanel viajou com segurança.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      location: "Londrina → Belo Horizonte",
      text: "Serviço de transporte terrestre impecável. Meu cachorro chegou feliz e descansado. Recomendo muito a TransportaPet!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Depoimentos de Clientes</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre a experiência com a TransportaPet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-foreground/60 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
