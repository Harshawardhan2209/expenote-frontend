"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, LineChart, Award } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "10K+",
    label: "Active Users",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    value: "$50M+",
    label: "Money Tracked",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    value: "1M+",
    label: "Transactions",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "99.9%",
    label: "Customer Satisfaction",
    color: "from-green-500 to-green-600"
  }
];

const StatCard = ({ icon, value, label, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl 
                 transition-all duration-300 group overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 
                      group-hover:opacity-10 transition-opacity duration-300`} />
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} 
                      flex items-center justify-center text-white mb-4
                      group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent 
                     bg-gradient-to-r from-gray-900 to-gray-600">
        {value}
      </h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#e0f2fe,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#ddd6fe,_transparent_50%)]" />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-title">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of users worldwide
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
