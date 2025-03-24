import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import "./App.css";

export default function SyrionPublishingLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-8 space-y-16">
      <section className="text-center mt-10">
        <h1 className="text-6xl font-bold tracking-wider mb-4">Syrion Publishing</h1>
        <p className="text-xl max-w-2xl mx-auto text-zinc-300">
          Editorial musical independiente fundada por Gaston Producer. Protegemos, administramos y monetizamos obras musicales de alto nivel para compositores, productores y artistas visionarios.
        </p>
      </section>

      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Registro de canciones y acuerdos de splits",
            "Administración global de regalías (performance y mecánicas)",
            "Distribución digital y sincronización (sync licensing)",
            "Negociación de publishing deals personalizados",
            "Representación legal y consultoría editorial"
          ].map((service, index) => (
            <Card key={index} className="bg-zinc-900 border border-zinc-700">
              <CardContent className="p-6 text-zinc-100 text-lg">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center space-y-6">
        <h3 className="text-2xl font-semibold">Trabaja con nosotros</h3>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Estamos buscando los próximos creadores legendarios. Envíanos tu demo o contáctanos para discutir tu futuro editorial.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button className="bg-white text-black hover:bg-zinc-200 text-lg px-8 py-4 rounded-2xl shadow-md">
            Enviar demo
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-2xl">
            Contactar equipo
          </Button>
        </div>
      </section>

      <footer className="text-center mt-20 text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} Syrion Publishing. Todos los derechos reservados.
      </footer>
    </div>
  );
}
