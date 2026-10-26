export interface Subsection {
  id: string;
  title: string;
  completed: boolean;
  pageRange?: [number, number]; // Optional page range for book pages
}

export interface Chapter {
  id: string;
  title: string;
  subsections: Subsection[];
}

export const curriculum: Chapter[] = [
  {
    id: "chapter-1",
    title: "Chapter 1: Solving Linear Equations",
    subsections: [
      { id: "1-1", title: "1.1 Solving Simple Equations", completed: false, pageRange: [4, 11] },
      { id: "1-2", title: "1.2 Solving Multi-Step Equations", completed: false, pageRange: [12, 19] },
      { id: "1-3", title: "1.3 Solving Equations with Variables on Both Sides", completed: false, pageRange: [20, 27] },
      { id: "1-4", title: "1.4 Rewriting Equations and Formulas", completed: false, pageRange: [36, 43] },
    ],
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Solving Linear Inequalities",
    subsections: [
      { id: "2-1", title: "2.1 Writing and Graphing Inequalities", completed: false, pageRange: [54, 61] },
      { id: "2-2", title: "2.2 Solving Inequalities Using Addition or Subtraction", completed: false, pageRange: [62, 67] },
      { id: "2-3", title: "2.3 Solving Inequalities Using Multiplication or Division", completed: false, pageRange: [68, 73] },
      { id: "2-4", title: "2.4 Solving Multi-Step Inequalities", completed: false, pageRange: [74, 79] },
      { id: "2-5", title: "2.5 Solving Compound Inequalities", completed: false, pageRange: [82, 87] },
      { id: "2-6", title: "2.6 Solving Absolute Value Inequalities", completed: false, pageRange: [88, 93] },
    ],
  },
  {
    id: "chapter-3",
    title: "Chapter 3: Graphing Linear Functions",
    subsections: [
      { id: "3-1", title: "3.1 Functions", completed: false, pageRange: [104, 111] },
      { id: "3-2", title: "3.2 Linear Functions", completed: false, pageRange: [112, 121] },
      { id: "3-3", title: "3.3 Function Notation", completed: false, pageRange: [122, 127] },
      { id: "3-4", title: "3.4 Graphing Linear Equations in Standard Form", completed: false, pageRange: [130, 135] },
      { id: "3-5", title: "3.5 Graphing Linear Equations in Slope-Intercept Form", completed: false, pageRange: [136, 145] },
      { id: "3-6", title: "3.6 Transformations of Graphs of Linear Functions", completed: false, pageRange: [146, 155] },
      { id: "3-7", title: "3.7 Graphing Absolute Value Functions", completed: false, pageRange: [156, 163] },
    ],
  },
  {
    id: "chapter-4",
    title: "Chapter 4: Writing Linear Functions",
    subsections: [
      { id: "4-1", title: "4.1 Writing Equations in Slope-Intercept Form", completed: false, pageRange: [176, 181] },
      { id: "4-2", title: "4.2 Writing Equations in Point-Slope Form", completed: false, pageRange: [182, 187] },
      { id: "4-3", title: "4.3 Writing Equations of Parallel and Perpendicular Lines", completed: false, pageRange: [188, 193] },
      { id: "4-4", title: "4.4 Scatter Plots and Lines of Fit", completed: false, pageRange: [196, 201] },
      { id: "4-5", title: "4.5 Analyzing Lines of Fit", completed: false, pageRange: [202, 209] },
      { id: "4-6", title: "4.6 Arithmetic Sequences", completed: false, pageRange: [210, 217] },
      { id: "4-7", title: "4.7 Piecewise Functions", completed: false, pageRange: [218, 224] },
    ],
  },
  {
    id: "chapter-5",
    title: "Chapter 5: Solving Systems of Linear Equations",
    subsections: [
      { id: "5-1", title: "5.1 Solving Systems of Linear Equations by Graphing", completed: false, pageRange: [236, 241] },
      { id: "5-2", title: "5.2 Solving Systems of Linear Equations by Substitution", completed: false, pageRange: [242, 247] },
      { id: "5-3", title: "5.3 Solving Systems of Linear Equations by Elimination", completed: false, pageRange: [248, 253] },
      { id: "5-4", title: "5.4 Solving Special Systems of Linear Equations", completed: false, pageRange: [254, 259] },
      { id: "5-5", title: "5.5 Solving Linear Inequalities in Two Variables", completed: false, pageRange: [268, 273] },
      { id: "5-6", title: "5.6 Solving Systems of Linear Inequalities", completed: false, pageRange: [274, 281] },
    ],
  },
  {
    id: "chapter-6",
    title: "Chapter 6: Exponential Functions and Sequences",
    subsections: [
      { id: "6-1", title: "6.1 Properties of Exponents", completed: false, pageRange: [292, 299] },
      { id: "6-2", title: "6.2 Radicals and Rational Exponents", completed: false, pageRange: [300, 305] },
      { id: "6-3", title: "6.3 Exponential Functions", completed: false, pageRange: [306, 313] },
      { id: "6-4", title: "6.4 Exponential Growth and Decay", completed: false, pageRange: [314, 323] },
      { id: "6-5", title: "6.5 Solving Exponential Equations", completed: false, pageRange: [326, 331] },
      { id: "6-6", title: "6.6 Geometric Sequences", completed: false, pageRange: [332, 339] },
      { id: "6-7", title: "6.7 Recursively Defined Sequences", completed: false, pageRange: [340, 347] },
    ],
  },
  {
    id: "chapter-7",
    title: "Chapter 7: Polynomial Equations and Factoring",
    subsections: [
      { id: "7-1", title: "7.1 Adding and Subtracting Polynomials", completed: false, pageRange: [358, 365] },
      { id: "7-2", title: "7.2 Multiplying Polynomials", completed: false, pageRange: [366, 371] },
      { id: "7-3", title: "7.3 Special Products of Polynomials", completed: false, pageRange: [372, 377] },
      { id: "7-4", title: "7.4 Solving Polynomial Equations in Factored Form", completed: false, pageRange: [378, 383] },
      { id: "7-5", title: "7.5 Factoring x^2 + bx + c", completed: false, pageRange: [386, 391] },
      { id: "7-6", title: "7.6 Factoring ax^2 + bx + c", completed: false, pageRange: [392, 397] },
      { id: "7-7", title: "7.7 Factoring Special Products", completed: false, pageRange: [398, 403] },
      { id: "7-8", title: "7.8 Factoring Polynomials by Grouping", completed: false, pageRange: [404, 409] },
    ],
  },
  {
    id: "chapter-8",
    title: "Chapter 8: Graphing Quadratic Functions",
    subsections: [
      { id: "8-1", title: "8.1 Graphing f(x) = ax^2", completed: false, pageRange: [420, 425] },
      { id: "8-2", title: "8.2 Graphing f(x) = ax^2 + c", completed: false, pageRange: [426, 431] },
      { id: "8-3", title: "8.3 Graphing f(x) = ax^2 + bx + c", completed: false, pageRange: [432, 439] },
      { id: "8-4", title: "8.4 Graphing f(x) = a(x - h)^2 + k", completed: false, pageRange: [442, 449] },
      { id: "8-5", title: "8.5 Using Intercept Form", completed: false, pageRange: [450, 459] },
      { id: "8-6", title: "8.6 Comparing Linear, Exponential, and Quadratic Functions", completed: false, pageRange: [460, 469] },
    ],
  },
  {
    id: "chapter-9",
    title: "Chapter 9: Solving Quadratic Equations",
    subsections: [
      { id: "9-1", title: "9.1 Properties of Radicals", completed: false, pageRange: [480, 489] },
      { id: "9-2", title: "9.2 Solving Quadratic Equations by Graphing", completed: false, pageRange: [490, 497] },
      { id: "9-3", title: "9.3 Solving Quadratic Equations Using Square Roots", completed: false, pageRange: [498, 503] },
      { id: "9-4", title: "9.4 Solving Quadratic Equations by Completing the Square", completed: false, pageRange: [506, 515] },
      { id: "9-5", title: "9.5 Solving Quadratic Equations Using the Quadratic Formula", completed: false, pageRange: [516, 525] },
      { id: "9-6", title: "9.6 Solving Nonlinear Systems of Equations", completed: false, pageRange: [526, 533] },
    ],
  },
  {
    id: "chapter-10",
    title: "Chapter 10: Radical Functions and Equations",
    subsections: [
      { id: "10-1", title: "10.1 Graphing Square Root Functions", completed: false, pageRange: [544, 551] },
      { id: "10-2", title: "10.2 Graphing Cube Root Functions", completed: false, pageRange: [552, 557] },
      { id: "10-3", title: "10.3 Solving Radical Equations", completed: false, pageRange: [560, 567] },
      { id: "10-4", title: "10.4 Inverse Functions", completed: false, pageRange: [568, 575] },
    ],
  },
  {
    id: "chapter-11",
    title: "Chapter 11: Data Analysis and Displays",
    subsections: [
      { id: "11-1", title: "11.1 Measures of Center and Variation", completed: false, pageRange: [586, 593] },
      { id: "11-2", title: "11.2 Box-and-Whisker Plots", completed: false, pageRange: [594, 599] },
      { id: "11-3", title: "11.3 Shapes of Distributions", completed: false, pageRange: [600, 607] },
      { id: "11-4", title: "11.4 Two-Way Tables", completed: false, pageRange: [610, 617] },
      { id: "11-5", title: "11.5 Choose a Data Display", completed: false, pageRange: [618, 623] },
    ],
  },
];

export const getTotalSubsections = () => {
  return curriculum.reduce((total, chapter) => total + chapter.subsections.length, 0);
};

export const getSubsectionById = (id: string) => {
  for (const chapter of curriculum) {
    const subsection = chapter.subsections.find(s => s.id === id);
    if (subsection) return { subsection, chapter };
  }
  return null;
};
