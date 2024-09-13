import React from "react";
import { ChevronRight, BarChart2, Brain, Zap } from "lucide-react";
import FeatureCard from "../components/features/FeatureCard";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Optimisez vos décisions avec StrateIA
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          L'assistant d'aide à la décision alimenté par l'IA pour les leaders
          visionnaires
        </p>
        <div className="flex justify-center mb-12">
          <input
            type="email"
            placeholder="Entrez votre email"
            className="px-4 py-2 w-64 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition duration-300 flex items-center">
            Essayer <ChevronRight className="ml-2" />
          </button>
        </div>
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center">
            <BarChart2 className="w-4 h-4 mr-1" /> Analyse prédictive
          </span>
          <span className="flex items-center">
            <Brain className="w-4 h-4 mr-1" /> IA avancée
          </span>
          <span className="flex items-center">
            <Zap className="w-4 h-4 mr-1" /> Décisions rapides
          </span>
        </div>
      </section>

      <section id="features" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Fonctionnalités clés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={BarChart2}
            title="Analyse de données"
            description="Transformez vos données en insights actionnables grâce à notre IA avancée."
          />
          <FeatureCard
            icon={Brain}
            title="Prédictions intelligentes"
            description="Anticipez les tendances et prenez des décisions éclairées basées sur des modèles prédictifs."
          />
          <FeatureCard
            icon={Zap}
            title="Recommandations en temps réel"
            description="Obtenez des suggestions stratégiques instantanées pour optimiser vos performances."
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
