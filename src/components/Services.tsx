import { Cpu, BarChart3, Radar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'IoT in Oil & Gas',
      description: 'Smart sensors and connected devices for real-time asset monitoring, predictive maintenance, and operational efficiency.',
      features: ['Smart Sensors', 'Asset Tracking', 'Predictive Analytics', 'Remote Operations']
    },
    {
      icon: BarChart3,
      title: 'Edge Analytics',
      description: 'Process data at the edge for instant insights, reduced latency, and improved decision-making capabilities.',
      features: ['Real-time Processing', 'Local Intelligence', 'Reduced Latency', 'Data Security']
    },
    {
      icon: Radar,
      title: 'Real-time Dashboards',
      description: 'Comprehensive visualization platform for monitoring operations, KPIs, and critical alerts across all facilities.',
      features: ['Live Monitoring', 'Custom KPIs', 'Alert Systems', 'Mobile Access']
    },
    {
      icon: Shield,
      title: 'Remote Field Monitoring',
      description: 'Monitor remote assets and field operations with advanced security, ensuring safety and compliance.',
      features: ['Safety Monitoring', 'Compliance Tracking', 'Incident Management', 'Environmental Control']
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Technology Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital transformation services designed specifically for the Oil & Gas industry, 
            delivering measurable results and operational excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get a personalized consultation and discover how our solutions can optimize your Oil & Gas operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-background text-primary hover:bg-background/90">
              Download Case Studies
            </Button>
            <Button variant="cta" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;