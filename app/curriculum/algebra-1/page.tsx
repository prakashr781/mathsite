'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { curriculum, Chapter, Subsection } from '@/lib/curriculum';
import { BookOpen, ChevronRight, CheckCircle, Circle, ArrowLeft, Menu, X } from 'lucide-react';

export default function Algebra1Curriculum() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set(['chapter-1']));
  const [completedSubsections, setCompletedSubsections] = useState<Set<string>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    checkUser();
    fetchProgress();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/');
    } else {
      setUser(user);
    }
    setLoading(false);
  };

  const fetchProgress = async () => {
    // TODO: Fetch actual progress from Supabase
    // For now, using placeholder data
    setCompletedSubsections(new Set(['1-1', '1-2']));
  };

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId);
      } else {
        newSet.add(chapterId);
      }
      return newSet;
    });
  };

  const handleSubsectionClick = (subsection: Subsection, chapter: Chapter) => {
    router.push(`/lesson/${subsection.id}`);
  };

  const isSubsectionCompleted = (subsectionId: string) => {
    return completedSubsections.has(subsectionId);
  };

  const calculateChapterProgress = (chapter: Chapter) => {
    const completed = chapter.subsections.filter(s => completedSubsections.has(s.id)).length;
    return Math.round((completed / chapter.subsections.length) * 100);
  };

  const calculateOverallProgress = () => {
    let total = 0;
    let completed = 0;
    curriculum.forEach(chapter => {
      total += chapter.subsections.length;
      completed += chapter.subsections.filter(s => completedSubsections.has(s.id)).length;
    });
    return Math.round((completed / total) * 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-olive-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-olive-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const overallProgress = calculateOverallProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-accent-lavender/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-olive-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push('/dashboard')}
                className="p-2 hover:bg-olive-100 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-olive-600" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-800 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-olive-900">Algebra 1</h1>
                <p className="text-sm text-olive-600">Complete Curriculum</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-olive-100 rounded-xl transition-colors lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-olive-600" />
              ) : (
                <Menu className="w-6 h-6 text-olive-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-olive-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-olive-700">Overall Progress</span>
            <span className="text-sm font-bold text-olive-900">{overallProgress}%</span>
          </div>
          <div className="w-full bg-olive-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-status-completed to-green-400 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Chapter Navigation */}
          <div className={`lg:col-span-1 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-2">
              {curriculum.map((chapter, index) => {
                const progress = calculateChapterProgress(chapter);
                const isExpanded = expandedChapters.has(chapter.id);
                
                return (
                  <div
                    key={chapter.id}
                    className="premium-card overflow-hidden animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full p-4 flex items-center justify-between hover:bg-olive-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {chapter.id.replace('chapter-', '')}
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="font-semibold text-olive-900 text-sm line-clamp-1">
                            {chapter.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 bg-olive-200 rounded-full h-1.5">
                              <div
                                className="h-full bg-gradient-to-r from-status-completed to-green-400 rounded-full"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-olive-600">{progress}%</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-olive-600 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="border-t border-olive-200 bg-olive-50/50">
                        {chapter.subsections.map((subsection) => {
                          const isCompleted = isSubsectionCompleted(subsection.id);
                          
                          return (
                            <button
                              key={subsection.id}
                              onClick={() => handleSubsectionClick(subsection, chapter)}
                              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-olive-100 transition-colors border-b border-olive-200 last:border-b-0"
                            >
                              {isCompleted ? (
                                <CheckCircle className="w-5 h-5 text-status-completed flex-shrink-0" />
                              ) : (
                                <Circle className="w-5 h-5 text-status-pending flex-shrink-0" />
                              )}
                              <span
                                className={`text-sm flex-1 text-left ${
                                  isCompleted ? 'status-completed' : 'status-pending'
                                }`}
                              >
                                {subsection.title}
                              </span>
                              <ChevronRight className="w-4 h-4 text-olive-400 flex-shrink-0" />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="premium-card p-8 animate-fade-in">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-olive-600 to-olive-800 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-olive-900 mb-2">
                  Algebra 1 Curriculum
                </h2>
                <p className="text-olive-600 text-lg">
                  Master algebraic concepts through 11 comprehensive chapters
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-olive-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-olive-900">11</p>
                  <p className="text-sm text-olive-600">Chapters</p>
                </div>
                <div className="bg-olive-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-olive-900">62</p>
                  <p className="text-sm text-olive-600">Lessons</p>
                </div>
                <div className="bg-olive-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-olive-900">{overallProgress}%</p>
                  <p className="text-sm text-olive-600">Complete</p>
                </div>
                <div className="bg-olive-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-olive-900">
                    {62 - Math.round((overallProgress / 100) * 62)}
                  </p>
                  <p className="text-sm text-olive-600">Remaining</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-olive-600 to-olive-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Ready to Learn?</h3>
                <p className="text-olive-100 mb-4">
                  Select a chapter from the sidebar to begin your learning journey. Each lesson includes theory explanations and interactive practice problems.
                </p>
                <div className="flex items-center gap-2 text-sm text-olive-200">
                  <CheckCircle className="w-4 h-4" />
                  <span>Completed sections appear in green</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-olive-200 mt-1">
                  <Circle className="w-4 h-4" />
                  <span>Pending sections appear in red</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
