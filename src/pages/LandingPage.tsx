import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Brain, Sparkles } from 'lucide-react';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-12 text-center">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-4xl font-bold mb-2">
            <Brain className="w-12 h-12 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Suma
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Add to your day.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              One question at a time.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover thought-provoking questions daily, expand your perspective, and track your
            intellectual journey.
          </p>
          <Button size="lg" onClick={() => navigate('/dashboard')}>
            <span className="flex items-center gap-2">
              Get Started <Sparkles className="w-5 h-5" />
            </span>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Daily Questions',
              description: 'A new thought-provoking question every day',
              icon: '🎯',
            },
            {
              title: 'Track Progress',
              description: 'Watch your knowledge tree grow over time',
              icon: '🌱',
            },
            {
              title: 'Learn & Reflect',
              description: 'Gain insights through careful consideration',
              icon: '💭',
            },
          ].map((feature) => (
            <GlassCard
              key={feature.title}
              className="p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};