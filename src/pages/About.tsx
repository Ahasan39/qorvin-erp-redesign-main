import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Target, Users, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { getWhatsAppLink, whatsAppMessages } from "@/lib/whatsapp";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: TrendingUp, value: "99%", label: "Success Rate" },
  { icon: Target, value: "12+", label: "Solutions" },
];

const values = [
  {
    title: "Innovation",
    description: "We constantly evolve our solutions to meet the changing needs of modern businesses.",
    icon: "💡",
  },
  {
    title: "Reliability",
    description: "Our systems are built for 24/7 operation with minimal downtime and maximum security.",
    icon: "🛡️",
  },
  {
    title: "Customer Success",
    description: "Your success is our success. We provide dedicated support to ensure you thrive.",
    icon: "🎯",
  },
  {
    title: "Simplicity",
    description: "Complex problems deserve simple solutions. We make business management effortless.",
    icon: "✨",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Mail, href: "#" },
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background" style={{ backgroundImage: "var(--gradient-bg)" }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 py-8">
        {/* Hero Section */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              About <span className="text-primary">Qorvin IT</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a leading provider of comprehensive business management software solutions,
              empowering businesses across Bangladesh and beyond to streamline their operations
              and achieve greater efficiency.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center space-y-3 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 opacity-0 animate-slide-in-left" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to revolutionize business management in Bangladesh,
                    Qorvin IT has grown to become a trusted partner for businesses of all sizes.
                  </p>
                  <p>
                    We understand the unique challenges faced by businesses in various sectors
                    - from retail and hospitality to healthcare and education. Our comprehensive
                    ERP solutions are designed to address these challenges head-on.
                  </p>
                  <p>
                    With over a decade of experience and hundreds of successful implementations,
                    we continue to innovate and evolve, ensuring our clients stay ahead in an
                    increasingly competitive marketplace.
                  </p>
                </div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6 opacity-0 animate-slide-in-right" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                <h3 className="text-2xl font-bold text-foreground">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">All-in-one solution for complete business management</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">Affordable pricing with flexible payment plans</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">24/7 customer support in local language</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">Regular updates and feature enhancements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">Cloud-based with secure data backup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Values</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="text-4xl">{value.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 sm:p-10 md:p-12 text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Ready to Transform Your Business?</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of successful businesses using Qorvin IT solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <a
                  href={getWhatsAppLink(whatsAppMessages.pricing.trial)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  Start Free Trial
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/10"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-12 mt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
            <span>Support: info@qorvinit.com</span>
            <span>Help Line: +8801842299275</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Connect:</span>
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="text-muted-foreground transition hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Copyright © 2022 to 2024 Qorvin It Limited. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
