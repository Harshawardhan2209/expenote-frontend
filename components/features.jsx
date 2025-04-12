"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  LineChart, 
  Wallet, 
  BrainCircuit,
  PiggyBank,
  TrendingUp,
  Shield
} from "lucide-react";

const features = [
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Smart Analytics",
    description: "Get detailed insights into your spending patterns with AI-powered analytics"
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Expense Tracking",
    description: "Effortlessly track and categorize your expenses in real-time"
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Insights",
    description: "Receive personalized financial advice powered by advanced AI"
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Budget Planning",
    description: "Set and manage budgets with intelligent recommendations"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Investment Tracking",
    description: "Monitor your investments and get performance insights"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Platform",
    description: "Bank-grade security to protect your financial data"
  }
];

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300
                 border border-gray-100 hover:border-blue-100 group"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 
                    flex items-center justify-center text-white mb-4
                    group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 
                     transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#e0f2fe,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_#ddd6fe,_transparent_50%)]" />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-title">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your finances intelligently in one place
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
