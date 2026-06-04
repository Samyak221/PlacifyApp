'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, Clock, Award, BookOpen } from 'lucide-react'

const topics = [
  {
    id: 1,
    category: 'Quantitative Aptitude',
    color: 'from-violet-500/15 to-fuchsia-500/10',
    icon: '🔢',
    tests: [
      { id: 1, name: 'Number System', difficulty: 'Easy', questions: 20, completed: 15 },
      { id: 2, name: 'Percentages & Ratios', difficulty: 'Medium', questions: 25, completed: 18 },
      { id: 3, name: 'Algebra', difficulty: 'Hard', questions: 30, completed: 12 },
      { id: 4, name: 'Geometry', difficulty: 'Medium', questions: 25, completed: 8 },
      { id: 5, name: 'Time & Work', difficulty: 'Medium', questions: 20, completed: 20 },
    ]
  },
  {
    id: 2,
    category: 'Logical Reasoning',
    color: 'from-cyan-500/15 to-sky-500/10',
    icon: '🧩',
    tests: [
      { id: 6, name: 'Analogies', difficulty: 'Easy', questions: 15, completed: 15 },
      { id: 7, name: 'Series & Patterns', difficulty: 'Medium', questions: 20, completed: 14 },
      { id: 8, name: 'Coding-Decoding', difficulty: 'Medium', questions: 18, completed: 10 },
      { id: 9, name: 'Syllogisms', difficulty: 'Hard', questions: 25, completed: 5 },
    ]
  },
  {
    id: 3,
    category: 'Verbal Ability',
    color: 'from-indigo-500/15 to-blue-500/10',
    icon: '📚',
    tests: [
      { id: 10, name: 'Reading Comprehension', difficulty: 'Medium', questions: 20, completed: 18 },
      { id: 11, name: 'Vocabulary', difficulty: 'Easy', questions: 25, completed: 25 },
      { id: 12, name: 'Grammar', difficulty: 'Medium', questions: 20, completed: 16 },
      { id: 13, name: 'Sentence Correction', difficulty: 'Hard', questions: 25, completed: 8 },
    ]
  },
]

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case 'Easy': return 'bg-green-500/20 text-green-400 border-green-500/30'
    case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    case 'Hard': return 'bg-red-500/20 text-red-400 border-red-500/30'
    default: return 'bg-muted text-muted-foreground'
  }
}

export default function AptitudePage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [attemptingTest, setAttemptingTest] = useState<number | null>(null)

  if (attemptingTest) {
    return <QuizInterface testId={attemptingTest} onBack={() => setAttemptingTest(null)} />
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Aptitude Tests</h1>
        <p className="text-muted-foreground">Master quantitative, logical, and verbal reasoning</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Tests Completed', value: '8', color: 'text-[var(--brand-start)]' },
          { label: 'Average Score', value: '78%', color: 'text-[var(--brand-end)]' },
          { label: 'Accuracy', value: '82%', color: 'text-green-400' },
        ].map((stat, i) => (
          <div key={i} className="glass-panel space-y-2 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Topics */}
      <div className="space-y-6">
        {topics.map((topic) => (
          <div key={topic.id} className="space-y-4">
            <div 
              onClick={() => setSelectedCategory(selectedCategory === topic.id ? null : topic.id)}
              className={`cursor-pointer rounded-lg border border-border/50 bg-gradient-to-r ${topic.color} p-6 transition hover:border-primary/50`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{topic.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold">{topic.category}</h2>
                    <p className="text-sm text-muted-foreground">{topic.tests.length} topics</p>
                  </div>
                </div>
                <ChevronRight className={`transition-transform ${selectedCategory === topic.id ? 'rotate-90' : ''}`} />
              </div>
            </div>

            {/* Tests List */}
            {selectedCategory === topic.id && (
              <div className="grid gap-3 pl-2">
                {topic.tests.map((test) => {
                  const progress = Math.round((test.completed / test.questions) * 100)
                  return (
                    <div
                      key={test.id}
                      className="glass-panel group cursor-pointer space-y-3 rounded-lg p-4 transition hover:border-primary/50"
                      onClick={() => setAttemptingTest(test.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1 flex-1">
                          <h3 className="font-semibold group-hover:text-primary transition">{test.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className={`px-2 py-1 rounded border ${getDifficultyColor(test.difficulty)}`}>
                              {test.difficulty}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} /> {test.questions} questions
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="text-muted-foreground group-hover:text-primary transition" />
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">{progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-border/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] transition-all"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">{test.completed} of {test.questions} completed</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Quiz Interface Component
function QuizInterface({ testId, onBack }: { testId: number; onBack: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: 'If x + y = 10 and x - y = 4, what is the value of x?',
      options: ['5', '7', '3', '6'],
      correct: 1,
      explanation: 'Adding both equations: 2x = 14, so x = 7'
    },
    {
      id: 2,
      question: 'What is 25% of 200?',
      options: ['25', '50', '75', '100'],
      correct: 1,
      explanation: '25% of 200 = 0.25 × 200 = 50'
    },
    {
      id: 3,
      question: 'Find the next number in the sequence: 2, 6, 12, 20, ?',
      options: ['28', '30', '32', '36'],
      correct: 2,
      explanation: 'The pattern is n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30'
    },
  ]

  const handleSelectAnswer = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex.toString()
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const correctAnswers = questions.filter((q, i) => 
    parseInt(selectedAnswers[i] || '-1') === q.correct
  ).length

  if (showResults) {
    return (
      <div className="p-6 space-y-8">
        <button
          onClick={onBack}
          className="text-primary hover:underline text-sm font-medium"
        >
          ← Back to Aptitude
        </button>

        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4 rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/15 to-cyan-500/10 p-8 text-center">
            <Award className="w-16 h-16 text-green-400 mx-auto" />
            <h1 className="text-3xl font-bold">Test Completed!</h1>
            <div className="bg-gradient-to-r from-green-400 to-[var(--brand-end)] bg-clip-text text-5xl font-bold text-transparent">
              {Math.round((correctAnswers / questions.length) * 100)}%
            </div>
            <p className="text-lg text-muted-foreground">You got {correctAnswers} out of {questions.length} questions correct</p>
          </div>

          <div className="space-y-3">
            {questions.map((q, i) => (
              <div key={i} className={`p-4 rounded-lg border ${
                parseInt(selectedAnswers[i] || '-1') === q.correct
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}>
                <p className="font-semibold mb-2">{q.question}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Your answer: {q.options[parseInt(selectedAnswers[i] || '0')]}
                  {parseInt(selectedAnswers[i] || '-1') !== q.correct && ` (Correct: ${q.options[q.correct]})`}
                </p>
                <p className="text-xs text-muted-foreground italic">{q.explanation}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button onClick={onBack} className="flex-1 bg-primary text-primary-foreground">
              Back to Tests
            </Button>
            <Button className="flex-1 border border-border/50 hover:bg-card/50">
              Retake Test
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestion]

  return (
    <div className="p-6 space-y-6">
      <button
        onClick={onBack}
        className="text-primary hover:underline text-sm font-medium"
      >
        ← Back to Aptitude
      </button>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-muted-foreground">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-border/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[var(--brand-start)] to-[var(--brand-end)] transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="glass-panel space-y-6 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-balance">{question.question}</h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelectAnswer(i)}
                className={`w-full p-4 rounded-lg border transition text-left ${
                  selectedAnswer === i.toString()
                    ? 'bg-primary/20 border-primary/50'
                    : 'bg-card/50 border-border/30 hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded border flex items-center justify-center ${
                    selectedAnswer === i.toString() ? 'bg-primary border-primary' : 'border-border/50'
                  }`}>
                    {selectedAnswer === i.toString() && <div className="w-2 h-2 bg-primary rounded-full" />}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="px-6 py-2 border border-border/50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-card/50 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={selectedAnswer === undefined}
            className="flex-1 px-6 py-2 bg-primary text-primary-foreground rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition font-medium"
          >
            {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
