'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { curriculum } from '@/lib/curriculum';
import { getProgress, getProgressSummary } from '@/lib/progress';
import { Award, Download, Home, Trophy, Calendar, CheckCircle } from 'lucide-react';
import jsPDF from 'jspdf';

export default function CertificatePage() {
  const router = useRouter();
  const certificateRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [completionDate, setCompletionDate] = useState<string>('');
  const [stats, setStats] = useState({
    completed: 0,
    total: 0,
    percent: 0,
    avgScore: 0,
    hours: 0,
  });

  useEffect(() => {
    checkUser();
    setCompletionDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/');
    } else {
      setUser(user);
      const total = curriculum.reduce(
        (n, ch) => n + ch.subsections.length,
        0
      );
      const summary = getProgressSummary(getProgress(user.id));
      setStats({
        completed: summary.completed,
        total,
        percent: total > 0 ? Math.round((summary.completed / total) * 100) : 0,
        avgScore: summary.avgScore,
        hours: Math.round((summary.seconds / 3600) * 10) / 10,
      });
    }
    setLoading(false);
  };

  const downloadCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Certificate background
    doc.setFillColor(245, 245, 240);
    doc.rect(0, 0, 297, 210, 'F');

    // Border
    doc.setDrawColor(128, 124, 101);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);

    // Inner border
    doc.setDrawColor(101, 98, 82);
    doc.setLineWidth(1);
    doc.rect(15, 15, 267, 180);

    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(36);
    doc.setTextColor(61, 58, 46);
    doc.text('Certificate of Completion', 148.5, 45, { align: 'center' });

    // Subtitle
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(18);
    doc.setTextColor(128, 124, 101);
    doc.text('This is to certify that', 148.5, 65, { align: 'center' });

    // Student name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(61, 58, 46);
    const userName = user?.email?.split('@')[0] || 'Student';
    doc.text(userName, 148.5, 85, { align: 'center' });

    // Course name
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.setTextColor(128, 124, 101);
    doc.text('has successfully completed the', 148.5, 105, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(61, 58, 46);
    doc.text('Algebra 1 Course', 148.5, 120, { align: 'center' });

    // Stats
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    doc.setTextColor(128, 124, 101);
    doc.text(`Completed ${stats.completed} of ${stats.total} lessons • ${stats.avgScore}% average quiz score • ${stats.hours} hours of learning`, 148.5, 140, { align: 'center' });

    // Date
    doc.setFontSize(12);
    doc.text(`Date: ${completionDate}`, 148.5, 160, { align: 'center' });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(101, 98, 82);
    doc.text('MathMaster Learning Platform', 148.5, 180, { align: 'center' });

    // Save
    doc.save('algebra-1-certificate.pdf');
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
      <header className="bg-white/80 backdrop-blur-sm border-b border-olive-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-olive-600 to-olive-800 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-display font-bold text-olive-900">
                Certificate
              </h1>
            </div>
            <button
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-2 px-4 py-2 text-olive-600 hover:bg-olive-50 rounded-xl transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Certificate Display */}
          <div className="lg:col-span-2">
            {stats.percent < 100 && (
              <div className="premium-card p-4 mb-6 bg-accent-mustard/10 border-2 border-accent-mustard/40 animate-fade-in">
                <p className="text-olive-800 font-semibold text-center">
                  Course in progress — you have completed {stats.completed} of {stats.total} lessons ({stats.percent}%).
                  Finish all quizzes to earn your Certificate of Completion.
                </p>
              </div>
            )}
            <div
              ref={certificateRef}
              className="premium-card p-8 animate-fade-in bg-gradient-to-br from-olive-50 to-white"
              style={{
                border: '4px solid #807c65',
                background: 'linear-gradient(135deg, #f7f5f0 0%, #ffffff 100%)'
              }}
            >
              {/* Certificate Border */}
              <div className="border-2 border-olive-600 p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-mustard to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-4xl font-display font-bold text-olive-900 mb-2">
                    Certificate of Completion
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-accent-mustard to-accent-coral mx-auto rounded-full" />
                </div>

                {/* Content */}
                <div className="text-center space-y-4 mb-8">
                  <p className="text-lg text-olive-600">This is to certify that</p>
                  <h2 className="text-3xl font-bold text-olive-900">
                    {user?.email?.split('@')[0] || 'Student'}
                  </h2>
                  <p className="text-lg text-olive-600">
                    {stats.percent === 100
                      ? 'has successfully completed the'
                      : 'is progressing through the'}
                  </p>
                  <h3 className="text-2xl font-bold text-olive-900">
                    Algebra 1 Course
                  </h3>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 text-center border-2 border-olive-200">
                    <Trophy className="w-8 h-8 text-accent-mustard mx-auto mb-2" />
                    <p className="text-2xl font-bold text-olive-900">{stats.completed}/{stats.total}</p>
                    <p className="text-sm text-olive-600">Lessons</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border-2 border-olive-200">
                    <Award className="w-8 h-8 text-accent-coral mx-auto mb-2" />
                    <p className="text-2xl font-bold text-olive-900">{stats.percent}%</p>
                    <p className="text-sm text-olive-600">Complete</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border-2 border-olive-200">
                    <Calendar className="w-8 h-8 text-accent-teal mx-auto mb-2" />
                    <p className="text-2xl font-bold text-olive-900">{stats.hours}h</p>
                    <p className="text-sm text-olive-600">Learning</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-olive-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Completed on {completionDate}</span>
                  </div>
                  <p className="text-sm text-olive-500">MathMaster Learning Platform</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadCertificate}
              className="w-full mt-6 btn-primary flex items-center justify-center gap-2 text-lg"
            >
              <Download className="w-5 h-5" />
              Download Certificate (PDF)
            </button>
          </div>

          {/* Achievement Summary */}
          <div className="space-y-6">
            <div className="premium-card p-6 animate-slide-up">
              <h3 className="text-xl font-bold text-olive-900 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent-mustard" />
                Achievement Summary
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-status-completed" />
                  <span className="text-olive-700">Completed {stats.completed} of {stats.total} lessons</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-status-completed" />
                  <span className="text-olive-700">{stats.percent}% course completion</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-status-completed" />
                  <span className="text-olive-700">{stats.avgScore}% average quiz score</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-status-completed" />
                  <span className="text-olive-700">Dedicated {stats.hours} hours</span>
                </div>
              </div>
            </div>

            <div className="premium-card p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-bold text-olive-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-coral" />
                Skills Mastered
              </h3>
              <div className="space-y-2">
                {[
                  'Linear Equations',
                  'Linear Inequalities',
                  'Graphing Functions',
                  'Systems of Equations',
                  'Exponential Functions',
                  'Polynomials',
                  'Quadratic Functions',
                  'Radical Functions',
                  'Data Analysis',
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-olive-700"
                  >
                    <div className="w-2 h-2 bg-status-completed rounded-full" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold text-olive-900 mb-4">Next Steps</h3>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/dashboard')}
                  className="w-full btn-secondary"
                >
                  Explore Other Courses
                </button>
                <button
                  onClick={() => router.push('/curriculum/algebra-1')}
                  className="w-full btn-secondary"
                >
                  Review Course Content
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
