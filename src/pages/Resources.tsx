import { Link } from "react-router-dom";
import {
  Book, Video, FileText, HeadphonesIcon, MessageSquare, Download,
  Facebook, Twitter, Instagram, Youtube, Linkedin, Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { getWhatsAppLink, whatsAppMessages } from "@/lib/whatsapp";

const resourceCategories = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides and tutorials for all our modules",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    items: [
      "Getting Started Guide",
      "User Manual",
      "Administrator Guide",
      "API Documentation",
    ],
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides to help you master the system",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    items: [
      "Setup & Configuration",
      "Daily Operations",
      "Advanced Features",
      "Tips & Tricks",
    ],
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real-world success stories from our clients",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    items: [
      "Retail Success Story",
      "Restaurant Case Study",
      "Hospital Implementation",
      "Manufacturing ROI",
    ],
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Access mobile apps, desktop clients, and templates",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    items: [
      "Android App",
      "iOS App",
      "Desktop Client",
      "Excel Templates",
    ],
  },
  {
    icon: MessageSquare,
    title: "Community",
    description: "Connect with other users and share experiences",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    items: [
      "User Forum",
      "Facebook Group",
      "WhatsApp Community",
      "Monthly Webinars",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Get help from our dedicated support team",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    items: [
      "Live Chat Support",
      "Email Support",
      "Phone Support",
      "Remote Assistance",
    ],
  },
];

const faqs = [
  {
    question: "How do I get started?",
    answer: "Sign up for a free trial, and our onboarding team will guide you through the setup process. We provide comprehensive training and support.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! We use industry-standard encryption, regular backups, and secure cloud infrastructure to protect your data 24/7.",
  },
  {
    question: "Can I customize the system?",
    answer: "Yes! Our system is highly customizable. You can configure workflows, reports, and features to match your business needs.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 email support, phone support during business hours, live chat, and remote assistance. Premium plans include priority support.",
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

const Resources = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background" style={{ backgroundImage: "var(--gradient-bg)" }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Help & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to get the most out of Qorvin IT solutions.
              From documentation to video tutorials, we've got you covered.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
              >
                <div className={`w-14 h-14 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                  <category.icon className={`h-7 w-7 ${category.color}`} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                </div>

                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our platform
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 space-y-3 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Support Section */}
          <section className="opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Still Need Help?</h2>
                <p className="text-muted-foreground">
                  Our support team is available 24/7 to assist you. Get in touch and we'll respond as quickly as possible.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-2">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-foreground">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Available 24/7</p>
                  </div>
                  <div className="space-y-2">
                    <Mail className="h-8 w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">info@qorvinit.com</p>
                  </div>
                  <div className="space-y-2">
                    <HeadphonesIcon className="h-8 w-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">+8801842299275</p>
                  </div>
                </div>

                <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                  <a
                    href={getWhatsAppLink(whatsAppMessages.contact.support)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Support
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-12 mt-auto">
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

export default Resources;
