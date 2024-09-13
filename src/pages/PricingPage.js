import React from "react";
import { Check } from "lucide-react";

const PricingTier = ({ name, price, features, isPopular }) => (
  <div
    className={`bg-white rounded-lg shadow-lg overflow-hidden ${
      isPopular ? "border-2 border-blue-500" : ""
    }`}
  >
    {isPopular && (
      <div className="bg-blue-500 text-white text-center py-1 px-4">
        Plus populaire
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-4xl font-bold mb-6">
        {price}
        <span className="text-xl font-normal text-gray-500">/mois</span>
      </p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 px-4 rounded ${
          isPopular ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        } hover:bg-blue-600 hover:text-white transition duration-300`}
      >
        Choisir ce plan
      </button>
    </div>
  </div>
);

const PricingPage = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "Gratuit",
      features: [
        "Accès aux analyses de base",
        "1 projet actif",
        "Mises à jour mensuelles",
        "Support par email"
      ]
    },
    {
      name: "Pro",
      price: "99€",
      features: [
        "Toutes les fonctionnalités Basic",
        "Analyses avancées",
        "5 projets actifs",
        "Mises à jour hebdomadaires",
        "Support prioritaire"
      ],
      isPopular: true
    },
    {
      name: "Entreprise",
      price: "Sur devis",
      features: [
        "Toutes les fonctionnalités Pro",
        "Projets illimités",
        "Analyses personnalisées",
        "Intégration API",
        "Support dédié 24/7"
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Nos Tarifs</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Choisissez le plan qui correspond le mieux à vos besoins
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
        <p className="text-center mt-12 text-gray-600">
          Besoin d'un plan personnalisé ?{" "}
          <a href="#contact" className="text-blue-500 hover:underline">
            Contactez-nous
          </a>
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
