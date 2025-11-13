import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Index() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: "https://cdn.poehali.dev/files/820006f5-36f8-4aec-ad8a-1844829827da.jpg",
      alt: "Комплект постельного белья Грани"
    },
    {
      url: "https://cdn.poehali.dev/files/23073d38-d8e5-42e3-a696-1ea0d29356f3.jpg",
      alt: "Комплект постельного белья Софт"
    }
  ];

  const specs = [
    { icon: "Layers", label: "Плотность", value: "115 г/м²" },
    { icon: "Sparkles", label: "Материал", value: "100% хлопок" },
    { icon: "Shield", label: "Прочность", value: "Высокая износостойкость" },
    { icon: "Wind", label: "Воздухопроницаемость", value: "Отличная" }
  ];

  const benefits = [
    {
      icon: "Heart",
      title: "Приятные тактильные ощущения",
      description: "Мягкая и нежная поверхность обеспечивает комфортный сон"
    },
    {
      icon: "Timer",
      title: "Долговечность",
      description: "Плотное плетение волокон гарантирует длительный срок службы"
    },
    {
      icon: "Droplet",
      title: "Простота ухода",
      description: "Легко стирается, быстро сохнет, не требует глажки"
    },
    {
      icon: "Thermometer",
      title: "Терморегуляция",
      description: "Поддерживает комфортную температуру в любое время года"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90 text-sm px-4 py-1">
            В наличии
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
            Постельное белье из поплина
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Премиальное качество для безупречного комфорта
          </p>
        </div>

        <div className="mb-16 animate-scale-in">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl font-heading font-semibold text-primary mb-8 text-center">
            Технические характеристики
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Icon name={spec.icon} className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                  {spec.label}
                </h3>
                <p className="text-muted-foreground font-medium">{spec.value}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-4xl font-heading font-semibold text-primary mb-8 text-center">
            Преимущества для вас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
                      <Icon name={benefit.icon} className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4">
              Условия заказа
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Поплин плотностью 115 г/м² доступен в различных размерах и расцветках.
              Быстрая доставка по России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Check" className="w-5 h-5 text-accent" />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Check" className="w-5 h-5 text-accent" />
                <span>Быстрая доставка</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Check" className="w-5 h-5 text-accent" />
                <span>Выгодные цены</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
              Оформить заказ
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              Или свяжитесь с нами для консультации
            </p>
          </div>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground text-sm">
          <p>© 2024 Премиальное постельное белье</p>
        </footer>
      </div>
    </div>
  );
}
