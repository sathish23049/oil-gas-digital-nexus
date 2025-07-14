import { useState } from 'react';
import { Send, Calendar, User, Mail, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    requestMeeting: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 1 hour. Thank you for your interest.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      requestMeeting: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Transform Your <span className="text-primary">Operations Together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to revolutionize your Oil & Gas operations with cutting-edge IoT solutions? 
              Our experts are standing by to provide personalized consultation and demonstrate 
              how our technology can drive your digital transformation.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Response</h3>
                  <p className="text-muted-foreground">Within 1 hour, 24/7 availability</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Meeting Scheduling</h3>
                  <p className="text-muted-foreground">Google Meet or MS Teams integration</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Enterprise Support</h3>
                  <p className="text-muted-foreground">Dedicated account management</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">Our Expertise Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Smart Oilfields',
                  'Digital Transformation',
                  'Edge Computing',
                  'Industrial Dashboards',
                  'Remote Monitoring',
                  'IoT Implementation'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-primary" />
                Get Started Today
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and our team will reach out within 1 hour to discuss your specific needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Building className="mr-2 h-4 w-4" />
                    Company Name *
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message & Requirements *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current challenges and how we can help transform your operations..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="requestMeeting"
                    name="requestMeeting"
                    checked={formData.requestMeeting}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="requestMeeting" className="text-sm text-muted-foreground">
                    I would like to schedule a meeting to discuss this further
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" variant="hero" className="flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Meeting
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;