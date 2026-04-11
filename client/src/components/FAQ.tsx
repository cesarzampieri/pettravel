import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Qual é o custo do transporte?",
      answer: "Os valores variam de acordo com a distância, tipo de transporte (terrestre ou aéreo) e características do seu pet. Entre em contato conosco via WhatsApp para um orçamento personalizado.",
    },
    {
      question: "Meu pet precisa de documentação especial?",
      answer: "Sim, para transporte aéreo internacional é necessário CVI (Certificado Veterinário Internacional), vacinação antirrábica atualizada e outros documentos conforme o país de destino. Cuidamos de tudo isso para você.",
    },
    {
      question: "Quanto tempo leva o transporte?",
      answer: "O tempo depende da distância e do tipo de transporte. Transporte terrestre pode levar de 1 a 7 dias. Transporte aéreo varia conforme os voos disponíveis. Informamos sempre o prazo estimado.",
    },
    {
      question: "Meu pet pode viajar em cabine?",
      answer: "Sim, alguns pets podem viajar em cabine com o passageiro. Isso depende das normas da companhia aérea e do tamanho do seu pet. Analisamos a melhor opção para cada caso.",
    },
    {
      question: "Como funciona o acompanhamento durante a viagem?",
      answer: "Você recebe atualizações em tempo real via WhatsApp. Informamos cada etapa da jornada do seu pet, desde a busca até a entrega final.",
    },
    {
      question: "Vocês atendem para qualquer lugar do Brasil e exterior?",
      answer: "Sim! Atendemos para todo o Brasil e diversos países no exterior. Temos parcerias com transportadoras internacionais para garantir segurança em qualquer destino.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Perguntas Frequentes</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de transporte de pets.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
