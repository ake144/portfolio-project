import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from './data/services'



export default function ServicesSection() {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-muted">
            <CardHeader className="flex flex-row items-center gap-4">
              {service.icon}
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}