import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Calendar, CheckCircle, LogOut, Settings, TrendingUp, Timer } from 'lucide-react';
import { cn } from '../utils/cn';

interface DashboardProps {
  onSignOut: () => void;
}

export const Dashboard = ({ onSignOut }: DashboardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const todayQuestion = {
    id: 1,
    question: "What's the most impactful decision you've made this quarter?",
    options: [
      "Strategic pivot in approach",
      "Team restructuring",
      "Process optimization",
      "Resource reallocation",
    ],
  };

  const recentAnswers = [
    {
      date: '2024-03-20',
      question: 'Key factors influencing project success?',
      answer: 'Clear communication channels',
    },
    {
      date: '2024-03-19',
      question: 'Biggest challenge faced this week?',
      answer: 'Resource allocation optimization',
    },
    {
      date: '2024-03-18',
      question: 'Most valuable team insight?',
      answer: 'Cross-functional collaboration',
    },
  ];

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-semibold text-xl">Suma</div>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="sm" onClick={onSignOut}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Daily Question */}
          <div className="lg:col-span-2 space-y-8">
            <div
              className={cn(
                'bg-slate-900/50 border rounded-lg p-6 transition-all duration-500',
                isAnimating ? 'opacity-0 transform translate-x-full' : 'opacity-100 transform translate-x-0',
                !isSubmitted ? 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-slate-800'
              )}
            >
              {!isSubmitted ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium">Today's Question</h2>
                    <span className="text-sm text-slate-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> March 21, 2024
                    </span>
                  </div>
                  <p className="text-xl font-medium mb-6">{todayQuestion.question}</p>
                  <div className="space-y-3">
                    {todayQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        className={cn(
                          'w-full p-4 text-left rounded-lg border transition-all duration-200',
                          selectedAnswer === index
                            ? 'bg-blue-500/10 border-blue-500/50 text-blue-400'
                            : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {selectedAnswer === index && (
                            <CheckCircle className="w-5 h-5 text-blue-400" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      className="w-full"
                      disabled={selectedAnswer === null}
                      onClick={handleSubmit}
                    >
                      Submit Answer
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <Timer className="w-12 h-12 text-slate-400" />
                  <h3 className="text-xl font-medium">Come back tomorrow!</h3>
                  <p className="text-slate-400">
                    Your next question will be available in 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Progress Overview */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Progress Overview</h2>
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'Current Streak', value: '7 days' },
                  { label: 'Completion Rate', value: '92%' },
                  { label: 'Total Responses', value: '124' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-800/50 rounded-lg p-4"
                  >
                    <div className="text-2xl font-semibold text-slate-100">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Answers */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
            <h2 className="text-lg font-medium mb-6">Recent Answers</h2>
            <div className="space-y-4">
              {isSubmitted && (
                <div
                  className="p-4 bg-slate-800/50 rounded-lg space-y-2 animate-slide-in"
                >
                  <div className="text-sm text-slate-400">March 21, 2024</div>
                  <div className="text-sm font-medium">{todayQuestion.question}</div>
                  <div className="text-slate-300">
                    {todayQuestion.options[selectedAnswer!]}
                  </div>
                </div>
              )}
              {recentAnswers.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 rounded-lg space-y-2"
                >
                  <div className="text-sm text-slate-400">{item.date}</div>
                  <div className="text-sm font-medium">{item.question}</div>
                  <div className="text-slate-300">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};