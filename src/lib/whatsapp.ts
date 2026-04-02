// WhatsApp utility functions

const WHATSAPP_NUMBER = "8801842299275"; // Without + prefix for URL

export const getWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const whatsAppMessages = {
  pricing: {
    trial: "Hello! I'm interested in starting the 15-day free trial of Qorvin IT ERP. Can you help me get started?",
    monthly: "Hello! I'm interested in the Monthly Plan (৳600/month) for Qorvin IT ERP. Please provide more details.",
    halfYearly: "Hello! I'm interested in the Half-Yearly Plan (৳3,000/6 months) for Qorvin IT ERP. Please provide more details.",
    yearly: "Hello! I'm interested in the Yearly Plan (৳5,000/year) for Qorvin IT ERP. Please provide more details.",
  },
  contact: {
    general: "Hello! I would like to know more about Qorvin IT solutions.",
    support: "Hello! I need support with Qorvin IT ERP. Can you assist me?",
    demo: "Hello! I would like to request a demo of Qorvin IT ERP system.",
    sales: "Hello! I'm interested in Qorvin IT solutions for my business. Can we discuss?",
  },
};

export const openWhatsApp = (message: string): void => {
  window.open(getWhatsAppLink(message), "_blank");
};
