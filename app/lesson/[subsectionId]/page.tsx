'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { curriculum, getSubsectionById } from '@/lib/curriculum';
import { getQuestionsForSubsection, type QuizQuestion } from '@/lib/questionBank';
import MiniGraph from '@/components/MiniGraph';
import { BookOpen, ArrowLeft, CheckCircle, Circle, Play, CheckSquare, XCircle, Award } from 'lucide-react';
import Image from 'next/image';

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const subsectionId = params.subsectionId as string;
  
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [subsectionData, setSubsectionData] = useState<any>(null);
  const [completed, setCompleted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Map<number, number>>(new Map());
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [showTheory, setShowTheory] = useState(true);

  useEffect(() => {
    checkUser();
    loadSubsectionData();
    startTimer();
  }, [subsectionId]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/');
    } else {
      setUser(user);
    }
    setLoading(false);
  };

  const loadSubsectionData = () => {
    const data = getSubsectionById(subsectionId);
    if (!data) {
      router.push('/curriculum/algebra-1');
      return;
    }
    setSubsectionData(data);
    
    // Get specific questions for this subsection from the question bank
    const questions = getQuestionsForSubsection(subsectionId);
    setQuizQuestions(questions);
    
    // Check if already completed
    // TODO: Fetch from Supabase
    setCompleted(false);
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => new Map(prev).set(questionId, answerIndex));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers.get(q.id) === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const handleMarkComplete = async () => {
    // TODO: Update Supabase with completion status
    setCompleted(true);
    
    // Check if all 62 subsections are completed
    // If so, redirect to certificate page
    const allCompleted = true; // Placeholder
    if (allCompleted) {
      router.push('/certificate');
    } else {
      router.push('/curriculum/algebra-1');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-olive-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-olive-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!subsectionData) {
    return null;
  }

  const { subsection, chapter } = subsectionData;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-accent-lavender/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-olive-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push('/curriculum/algebra-1')}
                className="p-2 hover:bg-olive-100 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-olive-600" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-800 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-olive-900">{chapter.title}</h1>
                <p className="text-sm text-olive-600">{subsection.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-olive-600">
                <Play className="w-4 h-4" />
                <span>{formatTime(timeSpent)}</span>
              </div>
              {completed ? (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  Completed
                </div>
              ) : (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                  <Circle className="w-4 h-4" />
                  In Progress
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Toggle */}
      <div className="lg:hidden bg-white border-b border-olive-200 px-4 py-3">
        <div className="flex gap-2">
          <button
            onClick={() => setShowTheory(true)}
            className={`flex-1 py-2 px-4 rounded-xl font-semibold transition-colors ${
              showTheory
                ? 'bg-olive-600 text-white'
                : 'bg-olive-100 text-olive-600'
            }`}
          >
            Theory
          </button>
          <button
            onClick={() => setShowTheory(false)}
            className={`flex-1 py-2 px-4 rounded-xl font-semibold transition-colors ${
              !showTheory
                ? 'bg-olive-600 text-white'
                : 'bg-olive-100 text-olive-600'
            }`}
          >
            Practice
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Theory */}
          <div className={`${showTheory ? 'block' : 'hidden lg:block'}`}>
            <div className="premium-card p-6 animate-fade-in sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-teal to-accent-sky rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-olive-900">Theory</h2>
                  <p className="text-sm text-olive-600">Learn the concepts</p>
                </div>
              </div>

              {/* Book Page Images */}
              {subsection.pageRange && (
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold text-olive-900 mb-4">
                    Book Pages {subsection.pageRange[0]} - {subsection.pageRange[1]}
                  </h3>
                  {Array.from(
                    { length: subsection.pageRange[1] - subsection.pageRange[0] + 1 },
                    (_, i) => subsection.pageRange[0] + i
                  ).map((pageNum) => (
                    <div
                      key={pageNum}
                      className="relative bg-olive-100 rounded-xl overflow-hidden"
                      style={{ aspectRatio: '3/4' }}
                    >
                      <Image
                        src={`/book_pages/page_${pageNum.toString().padStart(3, '0')}.jpg`}
                        alt={`Page ${pageNum}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Theory Content */}
              <div className="prose prose-olive max-w-none">
                <h3 className="text-xl font-bold text-olive-900 mb-4">
                  Key Concepts
                </h3>
                <div className="bg-olive-50 rounded-xl p-4 mb-4">
                  <p className="text-olive-800 leading-relaxed">
                    This section covers the fundamental concepts of {subsection.title.toLowerCase()}.
                    Understanding these principles is essential for mastering algebraic problem-solving.
                  </p>
                </div>

                <h4 className="text-lg font-semibold text-olive-900 mb-3">
                  Step-by-Step Examples
                </h4>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-olive-200 rounded-xl p-4">
                    <p className="font-semibold text-olive-900 mb-2">Example 1:</p>
                    <p className="text-olive-700 text-sm">
                      Solve the equation step by step, applying the concepts learned.
                    </p>
                  </div>
                  <div className="bg-white border-2 border-olive-200 rounded-xl p-4">
                    <p className="font-semibold text-olive-900 mb-2">Example 2:</p>
                    <p className="text-olive-700 text-sm">
                      Practice with different scenarios to reinforce understanding.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-mustard/20 to-accent-coral/20 rounded-xl p-4 mt-6">
                  <p className="text-olive-800 font-semibold flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Pro Tip: Always verify your answers by substituting back into the original equation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Practice/Quiz */}
          <div className={`${!showTheory ? 'block' : 'hidden lg:block'}`}>
            <div className="premium-card p-6 animate-fade-in sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-coral to-accent-peach rounded-xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-olive-900">Practice</h2>
                  <p className="text-sm text-olive-600">Test your knowledge</p>
                </div>
              </div>

              {!showResults ? (
                <>
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-olive-700">
                        Question {currentQuestionIndex + 1} of {quizQuestions.length}
                      </span>
                      <span className="text-sm font-bold text-olive-900">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div className="w-full bg-olive-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-olive-600 to-olive-800 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  {currentQuestion && (
                    <div className="animate-scale-in">
                      <div className="bg-olive-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-olive-900 mb-4">
                          {currentQuestion.question}
                        </h3>
                      </div>

                      {/* Options */}
                      {currentQuestion.optionGraphs ? (
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {currentQuestion.optionGraphs.map((graph, index) => {
                            const isSelected = selectedAnswers.get(currentQuestion.id) === index;

                            return (
                              <button
                                key={index}
                                onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                                aria-label={currentQuestion.options[index]}
                                className={`relative rounded-xl border-2 overflow-hidden transition-all ${
                                  isSelected
                                    ? 'border-olive-600 bg-olive-50 shadow-md'
                                    : 'border-olive-200 hover:border-olive-400 hover:bg-olive-50/50'
                                }`}
                              >
                                <div className={`absolute top-2 left-2 w-6 h-6 rounded-full border-2 z-10 flex items-center justify-center bg-white ${
                                  isSelected
                                    ? 'border-olive-600 bg-olive-600'
                                    : 'border-olive-400'
                                }`}>
                                  {isSelected && (
                                    <CheckSquare className="w-4 h-4 text-white" />
                                  )}
                                </div>
                                <MiniGraph spec={graph} />
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="space-y-3 mb-6">
                          {currentQuestion.options.map((option, index) => {
                            const isSelected = selectedAnswers.get(currentQuestion.id) === index;

                            return (
                              <button
                                key={index}
                                onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                                className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                                  isSelected
                                    ? 'border-olive-600 bg-olive-50'
                                    : 'border-olive-200 hover:border-olive-400 hover:bg-olive-50/50'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                    isSelected
                                      ? 'border-olive-600 bg-olive-600'
                                      : 'border-olive-400'
                                  }`}>
                                    {isSelected && (
                                      <CheckSquare className="w-4 h-4 text-white" />
                                    )}
                                  </div>
                                  <span className="text-olive-900">{option}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Navigation */}
                      <div className="flex gap-3">
                        {currentQuestionIndex > 0 && (
                          <button
                            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                            className="flex-1 btn-secondary"
                          >
                            Previous
                          </button>
                        )}
                        {currentQuestionIndex < quizQuestions.length - 1 ? (
                          <button
                            onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                            disabled={!selectedAnswers.has(currentQuestion.id)}
                            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                          </button>
                        ) : (
                          <button
                            onClick={handleSubmitQuiz}
                            disabled={selectedAnswers.size < quizQuestions.length}
                            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Submit Quiz
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Results */
                <div className="animate-scale-in">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent-mustard to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-olive-900 mb-2">
                      Quiz Complete!
                    </h3>
                    <p className="text-olive-600">
                      You scored {score} out of {quizQuestions.length}
                    </p>
                  </div>

                  {/* Score Display */}
                  <div className="bg-gradient-to-r from-olive-600 to-olive-800 rounded-xl p-6 text-white mb-6">
                    <div className="text-center">
                      <p className="text-5xl font-bold mb-2">
                        {Math.round((score / quizQuestions.length) * 100)}%
                      </p>
                      <p className="text-olive-200">Accuracy</p>
                    </div>
                  </div>

                  {/* Answer Review */}
                  <div className="space-y-3 mb-6">
                    {quizQuestions.map((q, index) => {
                      const userAnswer = selectedAnswers.get(q.id);
                      const isCorrect = userAnswer === q.correctAnswer;
                      
                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border-2 ${
                            isCorrect
                              ? 'border-green-300 bg-green-50'
                              : 'border-red-300 bg-red-50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {isCorrect ? (
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="flex-1">
                              <p className="font-semibold text-olive-900 mb-1">
                                {q.question}
                              </p>
                              <p className="text-sm text-olive-700">
                                {q.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mark Complete Button */}
                  {!completed && (
                    <button
                      onClick={handleMarkComplete}
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Mark as Completed
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setShowResults(false);
                      setCurrentQuestionIndex(0);
                      setSelectedAnswers(new Map());
                    }}
                    className="w-full btn-secondary mt-3"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
