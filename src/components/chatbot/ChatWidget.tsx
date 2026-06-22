"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Leaf,
  Bot,
  Minimize2,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const knowledgeBase: Record<string, string> = {
  default: "Hi! I'm Harvy, Green Harvest Produce's AI assistant 🌿 I can help with product availability, pricing, delivery, and ordering. What would you like to know?",
  onion: "Yes! We supply premium Nashik red onions in bulk. Available year-round in 25kg, 50kg jute bags, or custom packaging. Minimum order: **500 kg**. Sizes available: 35mm, 45mm, 55mm. Contact our team for current pricing.",
  tomato: "We supply grade-A hybrid tomatoes from Nashik and Pune belt year-round. Available in 10kg and 20kg crates. Minimum order: **200 kg**. Price varies by season — currently ₹15–₹60/kg.",
  potato: "Premium potatoes (Jyoti & Kufri Chipsona varieties) available year-round. Sourced from Agra (UP) and MP. Min order: **1,000 kg** in 25kg or 50kg bags. Ideal for restaurants and processors.",
  mango: "We supply GI-certified Alphonso (Hapus) mangoes from Ratnagiri & Devgad during April–July. Premium grade, export quality. Minimum order: **50 kg**. Pre-booking open November onwards.",
  apple: "Premium Shimla and Kinnaur apples available October–March. Varieties: Royal Delicious, Fuji, Golden. Packaging: 5kg, 10kg, 20kg boxes. Min order: **100 kg**.",
  banana: "Robusta and Grand Naine bananas available year-round from Jalgaon, Maharashtra. Min order: **200 kg**. Available in 10kg bunches or 15kg boxes.",
  grape: "Nashik Thompson Seedless and Sharad Seedless grapes available January–May. Export quality. Min order: **100 kg** in 5kg or 8kg boxes.",
  minimum: "Minimum order quantities vary by product:\n- **Onions**: 500 kg\n- **Potatoes**: 1,000 kg\n- **Tomatoes**: 200 kg\n- **Fruits**: 50–200 kg\n- **Green Peas**: 100 kg\n\nFor smaller orders, please contact us to discuss options.",
  delivery: "We deliver to **200+ cities across 15 Indian states**, including:\n- Maharashtra (Mumbai, Pune, Nashik, Nagpur, Aurangabad)\n- Delhi NCR\n- Karnataka (Bengaluru)\n- Gujarat (Ahmedabad, Surat)\n- Rajasthan, MP, UP, and more.\n\nRefrigerated transport with GPS tracking on all routes.",
  export: "Yes! We are **APEDA-registered** and export to the Middle East, Europe, and Southeast Asia. Key exports: Alphonso Mangoes, Grapes, Pomegranates, Onions.\n\nWe handle phytosanitary certificates, pre-cooling, blast freezing, and shipping documentation.",
  packaging: "We offer flexible packaging options:\n- **Jute bags** (25kg, 50kg)\n- **PP woven bags** (custom)\n- **Cardboard boxes** (various sizes)\n- **Mesh net bags**\n- **IQF frozen packs**\n- **Private label / branded** packaging\n\nMinimum quantities apply for custom packaging.",
  price: "Our prices are competitive as we source directly from farmers. Prices vary by season, volume, and quality grade. Please submit an inquiry on our **Contact page** for a formal quotation valid for 7 days.",
  order: "To place a bulk order:\n1. Submit an inquiry on our **Contact page**\n2. Our team sends a custom quote within **2–4 hours**\n3. Review and confirm\n4. First delivery within **48 hours** of confirmation\n\nFor ongoing supply, we set up weekly/monthly recurring schedules.",
  hours: "Our team is available:\n📅 **Monday – Saturday**: 6:00 AM – 8:00 PM IST\n📞 **Phone**: +91 98765 43210\n✉️ **Email**: sales@greenharvestproduce.com",
  quality: "Every batch goes through:\n✓ Farm-level pre-screening\n✓ FSSAI-standard grading & sorting\n✓ Cold chain maintenance (-2°C to 8°C)\n✓ Quality certificate with every delivery\n\nWe are **ISO 9001:2015** and **FSSAI** certified.",
  cold: "Yes! We operate **4 cold storage warehouses** across Maharashtra with combined capacity of **50,000 MT**. Temperature maintained at 0°C to 8°C throughout transit in our fleet of **50+ refrigerated vehicles**.",
  contact: "📞 **Phone / WhatsApp**: +91 98765 43210\n✉️ **Email**: sales@greenharvestproduce.com\n📍 **Address**: 123, Agri Business Park, Pune - 411001, Maharashtra\n\nOr use the **Contact page** to submit a detailed inquiry.",
};

function getBotResponse(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("onion") || q.includes("pyaz")) return knowledgeBase.onion;
  if (q.includes("tomato") || q.includes("tamatar")) return knowledgeBase.tomato;
  if (q.includes("potato") || q.includes("aloo")) return knowledgeBase.potato;
  if (q.includes("mango") || q.includes("aam") || q.includes("alphonso") || q.includes("hapus")) return knowledgeBase.mango;
  if (q.includes("apple") || q.includes("seb")) return knowledgeBase.apple;
  if (q.includes("banana") || q.includes("kela")) return knowledgeBase.banana;
  if (q.includes("grape") || q.includes("angur") || q.includes("nash")) return knowledgeBase.grape;
  if (q.includes("minimum") || q.includes("min order") || q.includes("moq")) return knowledgeBase.minimum;
  if (q.includes("deliver") || q.includes("city") || q.includes("ship") || q.includes("location")) return knowledgeBase.delivery;
  if (q.includes("export") || q.includes("international") || q.includes("abroad")) return knowledgeBase.export;
  if (q.includes("packag") || q.includes("box") || q.includes("bag")) return knowledgeBase.packaging;
  if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("₹")) return knowledgeBase.price;
  if (q.includes("order") || q.includes("buy") || q.includes("purchase") || q.includes("start")) return knowledgeBase.order;
  if (q.includes("hour") || q.includes("time") || q.includes("open") || q.includes("when")) return knowledgeBase.hours;
  if (q.includes("quality") || q.includes("certif") || q.includes("fssai") || q.includes("iso")) return knowledgeBase.quality;
  if (q.includes("cold") || q.includes("refriger") || q.includes("storage") || q.includes("warehouse")) return knowledgeBase.cold;
  if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("call")) return knowledgeBase.contact;
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("namaste")) return "Hello! 👋 I'm Harvy from Green Harvest Produce. I can help you with:\n- Product availability & pricing\n- Minimum order quantities\n- Delivery locations\n- Export services\n- Packaging options\n\nWhat can I help you with today?";
  return "I can help you with information about our products, delivery, packaging, pricing, and ordering process. Could you clarify your question, or you can also reach us directly at **+91 98765 43210** or visit our **Contact page** for a personalised quote.";
}

function formatMessage(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ChatWidget() {
  const t = useTranslations("chatbot");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      role: "assistant",
      content: knowledgeBase.default,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text?: string) => {
    const msgText = text || input.trim();
    if (!msgText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: msgText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));
    setIsTyping(false);

    const response = getBotResponse(msgText);
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 right-5 z-50 w-full max-w-sm shadow-2xl rounded-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: isMinimized ? "auto" : "540px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-700 to-green-600 p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Harvy</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                    <span className="text-green-200 text-xs">Online now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-white"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto bg-white p-4 space-y-3" style={{ minHeight: "300px", maxHeight: "360px" }}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bot className="w-4 h-4 text-green-600" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed chat-message ${
                          msg.role === "user"
                            ? "bg-green-600 text-white rounded-tr-sm"
                            : "bg-gray-100 text-gray-800 rounded-tl-sm"
                        }`}
                      >
                        {msg.content.split("\n").map((line, i) => (
                          <div key={i} className={i > 0 ? "mt-1" : ""}>
                            {msg.role === "assistant" ? formatMessage(line) : line}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2.5"
                    >
                      <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                        <div className="typing-dot" />
                        <div className="typing-dot" />
                        <div className="typing-dot" />
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                {messages.length <= 2 && (
                  <div className="bg-gray-50 border-t border-gray-100 px-3 py-2 flex gap-2 overflow-x-auto hide-scrollbar">
                    {(t.raw("suggestions") as string[]).slice(0, 3).map((s: string) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-xs bg-white border border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="bg-white border-t border-gray-100 p-3 flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder={t("placeholder")}
                    className="flex-1 border border-gray-200 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || isTyping}
                    className="w-9 h-9 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    aria-label={t("send")}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
