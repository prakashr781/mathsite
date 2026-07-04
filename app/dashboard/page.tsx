'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { BookOpen, Clock, CheckCircle, Circle, LogOut, Trophy, TrendingUp } from 'lucide-react';

interface UserStats {
  totalHours: number;
  completedPercentage: number;
  pendingPercentage: number;
}

interface Book {
  id: string;
  title: string;
  description: string;
  chapters: number;
  lessons: number;
  featured: boolean;
  color: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<UserStats>({
    totalHours: 0,
    completedPercentage: 0,
    pendingPercentage: 100,
  });
  const [loading, setLoading] = useState(true);

  const books: Book[] = [
    {
      id: 'algebra-1',
      title: 'Algebra 1',
      description: 'Master the fundamentals of algebra including linear equations, functions, and quadratic equations.',
      chapters: 11,
      lessons: 62,
      featured: true,
      color: 'from-olive-600 to-olive-800',
    },
    {
      id: 'geometry',
      title: 'Geometry',
      description: 'Coming Soon - Explore shapes, angles, and spatial reasoning.',
      chapters: 0,
      lessons: 0,
      featured: false,
      color: 'from-accent-teal to-accent-sky',
    },
    {
      id: 'algebra-2',
      title: 'Algebra 2',
      description: 'Coming Soon - Advanced algebraic concepts and applications.',
      chapters: 0,
      lessons: 0,
      featured: false,
      color: 'from-accent-coral to-accent-peach',
    },
  ];

  useEffect(() => {
    checkUser();
    fetchUserStats();
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

  const fetchUserStats = async () => {
    // TODO: Fetch actual stats from Supabase
    // For now, using placeholder data
    setStats({
      totalHours: 12.5,
      completedPercentage: 15,
      pendingPercentage: 85,
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const handleBookClick = (bookId: string) => {
    if (bookId === 'algebra-1') {
      router.push('/curriculum/algebra-1');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-olive-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-olive-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-accent-lavender/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-olive-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-800 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-display font-bold text-olive-900">
                MathMaster
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-olive-600 hidden sm:block">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-olive-600 hover:bg-olive-50 rounded-xl transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
          <div className="premium-card p-6 premium-card-hover">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-mustard to-orange-400 rounded-2xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-olive-600 font-medium">Total Hours</p>
                <p className="text-3xl font-bold text-olive-900">{stats.totalHours}h</p>
              </div>
            </div>
          </div>

          <div className="premium-card p-6 premium-card-hover">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-status-completed to-green-600 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-olive-600 font-medium">Completed</p>
                <p className="text-3xl font-bold text-olive-900">{stats.completedPercentage}%</p>
              </div>
            </div>
          </div>

          <div className="premium-card p-6 premium-card-hover">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-status-pending to-red-600 rounded-2xl flex items-center justify-center">
                <Circle className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-olive-600 font-medium">Pending</p>
                <p className="text-3xl font-bold text-olive-900">{stats.pendingPercentage}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="premium-card p-6 mb-8 animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-olive-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-olive-600" />
              Your Progress
            </h2>
            <span className="text-sm text-olive-600">
              {stats.completedPercentage}% Complete
            </span>
          </div>
          <div className="w-full bg-olive-200 rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-status-completed to-green-400 rounded-full transition-all duration-500"
              style={{ width: `${stats.completedPercentage}%` }}
            />
          </div>
        </div>

        {/* Books Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-olive-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-olive-600" />
            Available Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={book.id}
                onClick={() => handleBookClick(book.id)}
                className={`premium-card overflow-hidden cursor-pointer transition-all duration-300 ${
                  book.featured ? 'ring-2 ring-olive-400 ring-offset-2' : ''
                } premium-card-hover animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-32 bg-gradient-to-br ${book.color} flex items-center justify-center`}>
                  <BookOpen className="w-16 h-16 text-white/90" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-olive-900">{book.title}</h3>
                    {book.featured && (
                      <span className="px-2 py-1 bg-accent-mustard text-olive-900 text-xs font-bold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-olive-600 mb-4 line-clamp-2">
                    {book.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-olive-600">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {book.chapters} Chapters
                    </span>
                    <span className="flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      {book.lessons} Lessons
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
