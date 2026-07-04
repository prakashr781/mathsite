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
      { id: "1-1", title: "1.1 Solving Simple Equations", completed: false, pageRange: [1, 10] },
      { id: "1-2", title: "1.2 Solving Multi-Step Equations", completed: false, pageRange: [11, 20] },
      { id: "1-3", title: "1.3 Solving Equations with Variables on Both Sides", completed: false, pageRange: [21, 30] },
      { id: "1-4", title: "1.4 Rewriting Equations and Formulas", completed: false, pageRange: [31, 40] },
    ],
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Solving Linear Inequalities",
    subsections: [
      { id: "2-1", title: "2.1 Writing and Graphing Inequalities", completed: false, pageRange: [41, 50] },
      { id: "2-2", title: "2.2 Solving Inequalities Using Addition or Subtraction", completed: false, pageRange: [51, 60] },
      { id: "2-3", title: "2.3 Solving Inequalities Using Multiplication or Division", completed: false, pageRange: [61, 70] },
      { id: "2-4", title: "2.4 Solving Multi-Step Inequalities", completed: false, pageRange: [71, 80] },
      { id: "2-5", title: "2.5 Solving Compound Inequalities", completed: false, pageRange: [81, 90] },
      { id: "2-6", title: "2.6 Solving Absolute Value Inequalities", completed: false, pageRange: [91, 100] },
    ],
  },
  {
    id: "chapter-3",
    title: "Chapter 3: Graphing Linear Functions",
    subsections: [
      { id: "3-1", title: "3.1 Functions", completed: false, pageRange: [101, 110] },
      { id: "3-2", title: "3.2 Linear Functions", completed: false, pageRange: [111, 120] },
      { id: "3-3", title: "3.3 Function Notation", completed: false, pageRange: [121, 130] },
      { id: "3-4", title: "3.4 Graphing Linear Equations in Standard Form", completed: false, pageRange: [131, 140] },
      { id: "3-5", title: "3.5 Graphing Linear Equations in Slope-Intercept Form", completed: false, pageRange: [141, 150] },
      { id: "3-6", title: "3.6 Transformations of Graphs of Linear Functions", completed: false, pageRange: [151, 160] },
      { id: "3-7", title: "3.7 Graphing Absolute Value Functions", completed: false, pageRange: [161, 170] },
    ],
  },
  {
    id: "chapter-4",
    title: "Chapter 4: Writing Linear Functions",
    subsections: [
      { id: "4-1", title: "4.1 Writing Equations in Slope-Intercept Form", completed: false, pageRange: [171, 180] },
      { id: "4-2", title: "4.2 Writing Equations in Point-Slope Form", completed: false, pageRange: [181, 190] },
      { id: "4-3", title: "4.3 Writing Equations of Parallel and Perpendicular Lines", completed: false, pageRange: [191, 200] },
      { id: "4-4", title: "4.4 Scatter Plots and Lines of Fit", completed: false, pageRange: [201, 210] },
      { id: "4-5", title: "4.5 Analyzing Lines of Fit", completed: false, pageRange: [211, 220] },
      { id: "4-6", title: "4.6 Arithmetic Sequences", completed: false, pageRange: [221, 230] },
      { id: "4-7", title: "4.7 Piecewise Functions", completed: false, pageRange: [231, 240] },
    ],
  },
  {
    id: "chapter-5",
    title: "Chapter 5: Solving Systems of Linear Equations",
    subsections: [
      { id: "5-1", title: "5.1 Solving Systems of Linear Equations by Graphing", completed: false, pageRange: [241, 250] },
      { id: "5-2", title: "5.2 Solving Systems of Linear Equations by Substitution", completed: false, pageRange: [251, 260] },
      { id: "5-3", title: "5.3 Solving Systems of Linear Equations by Elimination", completed: false, pageRange: [261, 270] },
      { id: "5-4", title: "5.4 Solving Special Systems of Linear Equations", completed: false, pageRange: [271, 280] },
      { id: "5-5", title: "5.5 Solving Linear Inequalities in Two Variables", completed: false, pageRange: [281, 290] },
      { id: "5-6", title: "5.6 Solving Systems of Linear Inequalities", completed: false, pageRange: [291, 300] },
    ],
  },
  {
    id: "chapter-6",
    title: "Chapter 6: Exponential Functions and Sequences",
    subsections: [
      { id: "6-1", title: "6.1 Properties of Exponents", completed: false, pageRange: [301, 310] },
      { id: "6-2", title: "6.2 Radicals and Rational Exponents", completed: false, pageRange: [311, 320] },
      { id: "6-3", title: "6.3 Exponential Functions", completed: false, pageRange: [321, 330] },
      { id: "6-4", title: "6.4 Exponential Growth and Decay", completed: false, pageRange: [331, 340] },
      { id: "6-5", title: "6.5 Solving Exponential Equations", completed: false, pageRange: [341, 350] },
      { id: "6-6", title: "6.6 Geometric Sequences", completed: false, pageRange: [351, 360] },
      { id: "6-7", title: "6.7 Recursively Defined Sequences", completed: false, pageRange: [361, 370] },
    ],
  },
  {
    id: "chapter-7",
    title: "Chapter 7: Polynomial Equations and Factoring",
    subsections: [
      { id: "7-1", title: "7.1 Adding and Subtracting Polynomials", completed: false, pageRange: [371, 380] },
      { id: "7-2", title: "7.2 Multiplying Polynomials", completed: false, pageRange: [381, 390] },
      { id: "7-3", title: "7.3 Special Products of Polynomials", completed: false, pageRange: [391, 400] },
      { id: "7-4", title: "7.4 Solving Polynomial Equations in Factored Form", completed: false, pageRange: [401, 410] },
      { id: "7-5", title: "7.5 Factoring x^2 + bx + c", completed: false, pageRange: [411, 420] },
      { id: "7-6", title: "7.6 Factoring ax^2 + bx + c", completed: false, pageRange: [421, 430] },
      { id: "7-7", title: "7.7 Factoring Special Products", completed: false, pageRange: [431, 440] },
      { id: "7-8", title: "7.8 Factoring Polynomials by Grouping", completed: false, pageRange: [441, 450] },
    ],
  },
  {
    id: "chapter-8",
    title: "Chapter 8: Graphing Quadratic Functions",
    subsections: [
      { id: "8-1", title: "8.1 Graphing f(x) = ax^2", completed: false, pageRange: [451, 460] },
      { id: "8-2", title: "8.2 Graphing f(x) = ax^2 + c", completed: false, pageRange: [461, 470] },
      { id: "8-3", title: "8.3 Graphing f(x) = ax^2 + bx + c", completed: false, pageRange: [471, 480] },
      { id: "8-4", title: "8.4 Graphing f(x) = a(x - h)^2 + k", completed: false, pageRange: [481, 490] },
      { id: "8-5", title: "8.5 Using Intercept Form", completed: false, pageRange: [491, 500] },
      { id: "8-6", title: "8.6 Comparing Linear, Exponential, and Quadratic Functions", completed: false, pageRange: [501, 510] },
    ],
  },
  {
    id: "chapter-9",
    title: "Chapter 9: Solving Quadratic Equations",
    subsections: [
      { id: "9-1", title: "9.1 Properties of Radicals", completed: false, pageRange: [511, 520] },
      { id: "9-2", title: "9.2 Solving Quadratic Equations by Graphing", completed: false, pageRange: [521, 530] },
      { id: "9-3", title: "9.3 Solving Quadratic Equations Using Square Roots", completed: false, pageRange: [531, 540] },
      { id: "9-4", title: "9.4 Solving Quadratic Equations by Completing the Square", completed: false, pageRange: [541, 550] },
      { id: "9-5", title: "9.5 Solving Quadratic Equations Using the Quadratic Formula", completed: false, pageRange: [551, 560] },
      { id: "9-6", title: "9.6 Solving Nonlinear Systems of Equations", completed: false, pageRange: [561, 570] },
    ],
  },
  {
    id: "chapter-10",
    title: "Chapter 10: Radical Functions and Equations",
    subsections: [
      { id: "10-1", title: "10.1 Graphing Square Root Functions", completed: false, pageRange: [571, 580] },
      { id: "10-2", title: "10.2 Graphing Cube Root Functions", completed: false, pageRange: [581, 590] },
      { id: "10-3", title: "10.3 Solving Radical Equations", completed: false, pageRange: [591, 600] },
      { id: "10-4", title: "10.4 Inverse Functions", completed: false, pageRange: [601, 610] },
    ],
  },
  {
    id: "chapter-11",
    title: "Chapter 11: Data Analysis and Displays",
    subsections: [
      { id: "11-1", title: "11.1 Measures of Center and Variation", completed: false, pageRange: [611, 620] },
      { id: "11-2", title: "11.2 Box-and-Whisker Plots", completed: false, pageRange: [621, 630] },
      { id: "11-3", title: "11.3 Shapes of Distributions", completed: false, pageRange: [631, 640] },
      { id: "11-4", title: "11.4 Two-Way Tables", completed: false, pageRange: [641, 650] },
      { id: "11-5", title: "11.5 Choose a Data Display", completed: false, pageRange: [651, 660] },
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
