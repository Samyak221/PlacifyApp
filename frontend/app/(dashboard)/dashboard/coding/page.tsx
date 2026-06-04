'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, Play, Copy, ChevronDown } from 'lucide-react'

const problems = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptance: '48%',
    solved: true,
    tags: ['Array', 'Hash Table'],
    description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
    ],
    testCases: [
      { input: '[2,7,11,15], 9', expected: '[0,1]', status: 'Passed' },
      { input: '[3,2,4], 6', expected: '[1,2]', status: 'Passed' },
      { input: '[3,3], 6', expected: '[0,1]', status: 'Passed' },
    ]
  },
  {
    id: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    acceptance: '32%',
    solved: false,
    tags: ['Linked List', 'Math'],
    description: 'You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.',
  },
  {
    id: 3,
    title: 'Longest Substring',
    difficulty: 'Medium',
    acceptance: '33%',
    solved: false,
    tags: ['Hash Table', 'String', 'Sliding Window'],
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptance: '27%',
    solved: false,
    tags: ['Array', 'Binary Search'],
    description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
  },
]

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case 'Easy': return 'bg-green-500/20 text-green-400 border-green-500/30'
    case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    case 'Hard': return 'bg-red-500/20 text-red-400 border-red-500/30'
    default: return 'bg-muted'
  }
}

export default function CodingPage() {
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null)
  const [solvingId, setSolvingId] = useState<number | null>(null)

  if (solvingId) {
    const problem = problems.find(p => p.id === solvingId)!
    return <CodeEditor problem={problem} onBack={() => setSolvingId(null)} />
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Coding Arena</h1>
        <p className="text-muted-foreground">Master data structures and algorithms</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Problems Solved', value: '34', color: 'text-green-400' },
          { label: 'Easy', value: '20', color: 'text-green-400' },
          { label: 'Medium', value: '10', color: 'text-yellow-400' },
          { label: 'Hard', value: '4', color: 'text-red-400' },
        ].map((stat, i) => (
          <div key={i} className="rounded-lg bg-card/50 border border-border/30 p-4 space-y-2">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Problems List */}
      <div className="space-y-3">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="rounded-lg bg-card/50 border border-border/30 hover:border-primary/50 transition overflow-hidden"
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => setSelectedProblem(selectedProblem === problem.id ? null : problem.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    {problem.solved && <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>}
                    <h3 className="font-semibold text-lg">{problem.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs border font-medium ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {problem.acceptance} acceptance
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {problem.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-border/50 text-muted-foreground px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronRight className={`transition-transform ${selectedProblem === problem.id ? 'rotate-90' : ''}`} />
              </div>
            </div>

            {/* Expanded Details */}
            {selectedProblem === problem.id && (
              <div className="border-t border-border/30 p-4 space-y-4 bg-card/30">
                {problem.description && <p className="text-muted-foreground">{problem.description}</p>}

                {problem.examples && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Examples:</h4>
                    {problem.examples.map((ex, i) => (
                      <div key={i} className="bg-background/50 p-3 rounded text-sm font-mono text-xs space-y-1">
                        <p>Input: {ex.input}</p>
                        <p>Output: {ex.output}</p>
                      </div>
                    ))}
                  </div>
                )}

                {problem.testCases && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Test Cases:</h4>
                    <div className="space-y-2">
                      {problem.testCases.map((tc, i) => (
                        <div key={i} className="flex items-center justify-between text-sm p-2 rounded bg-background/50">
                          <span className="font-mono text-xs truncate">{tc.input}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">→ {tc.expected}</span>
                            <span className={`text-xs px-2 py-1 rounded ${tc.status === 'Passed' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                              {tc.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setSolvingId(problem.id)}
                  className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium flex items-center justify-center gap-2"
                >
                  <Play size={18} />
                  Solve Problem
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function CodeEditor({ problem, onBack }: { problem: typeof problems[0]; onBack: () => void }) {
  const [language, setLanguage] = useState('python')
  const [code, setCode] = useState('def twoSum(nums, target):\n    # Write your solution here\n    pass')
  const [output, setOutput] = useState('')
  const [showResults, setShowResults] = useState(false)

  const languages = ['python', 'javascript', 'java', 'cpp', 'golang']

  const handleRun = () => {
    // Mock execution
    setShowResults(true)
    setOutput('✓ All test cases passed!\nTime: 45ms | Memory: 12.3MB')
  }

  return (
    <div className="p-6 space-y-6">
      <button onClick={onBack} className="text-primary hover:underline text-sm font-medium">
        ← Back to Problems
      </button>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Problem Description */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{problem.title}</h1>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded text-xs border font-medium ${getDifficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
              <span className="text-sm text-muted-foreground">{problem.acceptance} acceptance</span>
            </div>
          </div>

          <div className="rounded-lg bg-card/50 border border-border/30 p-4 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>

            {problem.examples && (
              <div>
                <h3 className="font-semibold mb-2">Examples</h3>
                <div className="space-y-2">
                  {problem.examples.map((ex, i) => (
                    <div key={i} className="bg-background/50 p-3 rounded text-xs font-mono space-y-1">
                      <p>Input: {ex.input}</p>
                      <p>Output: {ex.output}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-semibold mb-2">Constraints</h3>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>2 &lt;= nums.length &lt;= 10^4</li>
                <li>-10^9 &lt;= nums[i] &lt;= 10^9</li>
                <li>-10^9 &lt;= target &lt;= 10^9</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Editor */}
        <div className="space-y-4 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded text-sm transition ${
                    language === lang
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card/50 border border-border/30 hover:border-primary/30'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button className="text-muted-foreground hover:text-foreground transition" title="Copy">
              <Copy size={18} />
            </button>
          </div>

          <div className="rounded-lg bg-background border border-border/30 overflow-hidden font-mono text-sm flex-1 flex flex-col">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 p-4 bg-transparent text-foreground resize-none outline-none"
              spellCheck="false"
            />
          </div>

          {/* Output */}
          {showResults && (
            <div className="rounded-lg bg-card/50 border border-border/30 p-4 space-y-2">
              <h3 className="font-semibold text-sm">Output</h3>
              <div className="bg-background/50 p-3 rounded font-mono text-xs text-muted-foreground whitespace-pre-wrap">
                {output}
              </div>
            </div>
          )}

          <button
            onClick={handleRun}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Run Code
          </button>
        </div>
      </div>
    </div>
  )
}
