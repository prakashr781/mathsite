# MathMaster - Premium Math Learning Platform

A modern, colorful, and playful mathematics learning website built with Next.js, Tailwind CSS, and Supabase.

## Features

- **Authentication**: Secure user authentication via Supabase Auth
- **Curriculum Management**: Complete Algebra 1 curriculum with 11 chapters and 62 lessons
- **Progress Tracking**: Real-time progress synchronization with Supabase
- **Split-Screen Learning**: Theory panel with book pages and interactive practice quizzes
- **Color-Coded Progress**: RED for incomplete, GREEN for completed sections
- **Certificate Generation**: Downloadable PDF certificates upon course completion
- **Premium Design**: Matte olive green color palette with smooth animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom premium color palette
- **Backend**: Supabase (Authentication & Database)
- **Icons**: Lucide React
- **PDF Generation**: jsPDF
- **Language**: TypeScript

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase Database

Run the SQL schema in your Supabase SQL Editor:

```sql
-- Copy the contents of supabase-schema.sql and run it in your Supabase SQL Editor
```

The schema includes:
- `user_progress` table for tracking lesson completion
- `user_stats` table for overall user statistics
- Row Level Security (RLS) policies for data protection

### 3. Environment Variables

The `.env.local` file is already configured with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mathsite/
├── app/
│   ├── certificate/page.tsx       # Certificate completion page
│   ├── curriculum/
│   │   └── algebra-1/page.tsx     # Chapter outline with sidebar
│   ├── dashboard/page.tsx         # Main dashboard with stats
│   ├── lesson/[subsectionId]/     # Split-screen lesson page
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Login page
│   └── globals.css                # Global styles
├── book_pages/                    # Book page images (page_001.jpg to page_631.jpg)
├── lib/
│   ├── curriculum.ts              # Curriculum configuration (11 chapters, 62 lessons)
│   ├── supabase.ts                # Supabase client initialization
│   └── utils.ts                   # Utility functions
├── supabase-schema.sql            # Database schema
├── tailwind.config.ts             # Tailwind configuration with olive green palette
└── package.json
```

## Curriculum Structure

The curriculum includes 11 chapters with 62 total subsections:

1. **Solving Linear Equations** (4 lessons)
2. **Solving Linear Inequalities** (6 lessons)
3. **Graphing Linear Functions** (7 lessons)
4. **Writing Linear Functions** (7 lessons)
5. **Solving Systems of Linear Equations** (6 lessons)
6. **Exponential Functions and Sequences** (7 lessons)
7. **Polynomial Equations and Factoring** (8 lessons)
8. **Graphing Quadratic Functions** (6 lessons)
9. **Solving Quadratic Equations** (6 lessons)
10. **Radical Functions and Equations** (4 lessons)
11. **Data Analysis and Displays** (5 lessons)

## Color Scheme

- **Primary**: Matte Olive Green (#807c65)
- **Completed**: Green (#22c55e)
- **Pending**: Red (#ef4444)
- **Accents**: Coral, Teal, Mustard, Lavender, Peach, Sky

## Database Schema

### user_progress Table
- Tracks completion status for each subsection
- Records time spent per lesson
- Timestamps for completion tracking

### user_stats Table
- Overall user statistics
- Total hours spent
- Total subsections completed

## Features Implementation Status

✅ Authentication & Login Page
✅ Main Dashboard with User Metrics
✅ Chapter Outline with Sidebar Navigation
✅ Split-Screen Workspace (Theory & Practice)
✅ Interactive Quiz Interface
✅ State Persistence (Supabase)
✅ Color Tracking (RED/GREEN)
✅ Certificate Generation (PDF Download)
✅ Responsive Design
✅ Premium Matte Olive Green Theme

## Next Steps

To complete the implementation:

1. **Connect Supabase Progress Tracking**: Update the TODO comments in the lesson page to fetch and save progress to Supabase
2. **Add Real Quiz Questions**: Replace placeholder quiz questions with actual math problems for each subsection
3. **Implement Time Tracking**: Add actual time tracking logic that syncs with Supabase
4. **Add Question Bank**: Create a comprehensive question bank for all 62 subsections

## License

This project is proprietary and confidential.
