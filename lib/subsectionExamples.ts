export interface WorkedExample {
  title: string;
  steps: string[];
}

export const subsectionExamples: Record<string, WorkedExample[]> = {
  // Chapter 1: Solving Linear Equations
  "1-1": [
    {
      title: "Solve x - 7 = 12",
      steps: [
        "Add 7 to both sides to isolate x: x - 7 + 7 = 12 + 7",
        "Simplify: x = 19",
        "Check: 19 - 7 = 12 ✓",
      ],
    },
    {
      title: "Solve -4x = 36",
      steps: [
        "Divide both sides by -4: -4x / -4 = 36 / -4",
        "Simplify: x = -9",
        "Check: -4(-9) = 36 ✓",
      ],
    },
  ],
  "1-2": [
    {
      title: "Solve 3x + 5 = 20",
      steps: [
        "Subtract 5 from both sides: 3x = 15",
        "Divide both sides by 3: x = 5",
        "Check: 3(5) + 5 = 20 ✓",
      ],
    },
    {
      title: "Solve 2(x - 4) = 10",
      steps: [
        "Distribute: 2x - 8 = 10",
        "Add 8 to both sides: 2x = 18",
        "Divide by 2: x = 9",
        "Check: 2(9 - 4) = 2(5) = 10 ✓",
      ],
    },
  ],
  "1-3": [
    {
      title: "Solve 5x - 4 = 3x + 8",
      steps: [
        "Subtract 3x from both sides: 2x - 4 = 8",
        "Add 4 to both sides: 2x = 12",
        "Divide by 2: x = 6",
        "Check: 5(6) - 4 = 26 and 3(6) + 8 = 26 ✓",
      ],
    },
    {
      title: "Solve 7 - 2x = 5x + 21",
      steps: [
        "Add 2x to both sides: 7 = 7x + 21",
        "Subtract 21: -14 = 7x",
        "Divide by 7: x = -2",
        "Check: 7 - 2(-2) = 11 and 5(-2) + 21 = 11 ✓",
      ],
    },
  ],
  "1-4": [
    {
      title: "Solve 2x + 3y = 12 for y",
      steps: [
        "Subtract 2x from both sides: 3y = 12 - 2x",
        "Divide everything by 3: y = (12 - 2x) / 3",
        "Simplify: y = 4 - (2/3)x",
      ],
    },
    {
      title: "Solve V = (1/3)Bh for h",
      steps: [
        "Multiply both sides by 3: 3V = Bh",
        "Divide both sides by B: h = 3V / B",
      ],
    },
  ],
  // Chapter 2: Solving Linear Inequalities
  "2-1": [
    {
      title: "Write and graph: 'a number n is at least 10'",
      steps: [
        "'At least' means greater than or equal to: n ≥ 10",
        "Graph: closed (filled) circle at 10",
        "Shade to the right (larger values)",
      ],
    },
    {
      title: "Write and graph: 'temperature t is below -5'",
      steps: [
        "'Below' means less than: t < -5",
        "Graph: open circle at -5",
        "Shade to the left (smaller values)",
      ],
    },
  ],
  "2-2": [
    {
      title: "Solve x - 6 > 4",
      steps: [
        "Add 6 to both sides: x > 4 + 6",
        "Simplify: x > 10",
        "The inequality direction stays the same",
      ],
    },
    {
      title: "Solve x + 3 ≤ -2",
      steps: [
        "Subtract 3 from both sides: x ≤ -2 - 3",
        "Simplify: x ≤ -5",
        "The inequality direction stays the same",
      ],
    },
  ],
  "2-3": [
    {
      title: "Solve -3x > 15",
      steps: [
        "Divide both sides by -3",
        "Flip the inequality sign (negative divisor): x < -5",
        "Check: -3(-6) = 18 > 15 ✓",
      ],
    },
    {
      title: "Solve x/4 ≤ 8",
      steps: [
        "Multiply both sides by 4 (positive, keep the sign)",
        "Simplify: x ≤ 32",
      ],
    },
  ],
  "2-4": [
    {
      title: "Solve 2x + 7 < 19",
      steps: [
        "Subtract 7 from both sides: 2x < 12",
        "Divide by 2: x < 6",
        "Check: 2(0) + 7 = 7 < 19 ✓",
      ],
    },
    {
      title: "Solve -5x - 3 ≥ 12",
      steps: [
        "Add 3 to both sides: -5x ≥ 15",
        "Divide by -5 and flip: x ≤ -3",
        "Check: -5(-4) - 3 = 17 ≥ 12 ✓",
      ],
    },
  ],
  "2-5": [
    {
      title: "Solve -3 < x + 2 < 7",
      steps: [
        "Subtract 2 from all three parts: -5 < x < 5",
        "Solution: all x between -5 and 5",
      ],
    },
    {
      title: "Solve 2x - 1 > 5 OR x + 4 ≤ 1",
      steps: [
        "First: 2x > 6, so x > 3",
        "Second: x ≤ -3",
        "Solution: x > 3 or x ≤ -3 (two separate rays)",
      ],
    },
  ],
  "2-6": [
    {
      title: "Solve |x - 3| < 5",
      steps: [
        "Rewrite as a compound inequality: -5 < x - 3 < 5",
        "Add 3 to all parts: -2 < x < 8",
        "Check: |0 - 3| = 3 < 5 ✓",
      ],
    },
    {
      title: "Solve |2x + 1| ≥ 7",
      steps: [
        "Split into two cases: 2x + 1 ≥ 7 or 2x + 1 ≤ -7",
        "First: 2x ≥ 6, so x ≥ 3",
        "Second: 2x ≤ -8, so x ≤ -4",
        "Solution: x ≥ 3 or x ≤ -4",
      ],
    },
  ],
  // Chapter 3: Graphing Linear Functions
  "3-1": [
    {
      title: "Is {(1,3), (2,5), (3,7)} a function?",
      steps: [
        "Check every input x: 1, 2, 3",
        "Each input has exactly one output",
        "Yes — it is a function",
      ],
    },
    {
      title: "Is {(2,4), (3,1), (2,6)} a function?",
      steps: [
        "Check the inputs: 2 appears twice",
        "Input 2 gives two outputs (4 and 6)",
        "No — it is NOT a function",
      ],
    },
  ],
  "3-2": [
    {
      title: "Find the slope through (2, 5) and (6, 13)",
      steps: [
        "Formula: m = (y₂ - y₁) / (x₂ - x₁)",
        "Substitute: m = (13 - 5) / (6 - 2)",
        "Simplify: m = 8/4 = 2",
      ],
    },
    {
      title: "Find the slope through (-1, 4) and (3, -4)",
      steps: [
        "Formula: m = (y₂ - y₁) / (x₂ - x₁)",
        "Substitute: m = (-4 - 4) / (3 - (-1))",
        "Simplify: m = -8/4 = -2",
      ],
    },
  ],
  "3-3": [
    {
      title: "Find f(4) when f(x) = 2x - 3",
      steps: [
        "Replace x with 4: f(4) = 2(4) - 3",
        "Evaluate: f(4) = 8 - 3",
        "Answer: f(4) = 5",
      ],
    },
    {
      title: "Find f(-2) when f(x) = x² + 1",
      steps: [
        "Replace x with -2: f(-2) = (-2)² + 1",
        "Evaluate: f(-2) = 4 + 1",
        "Answer: f(-2) = 5",
      ],
    },
  ],
  "3-4": [
    {
      title: "Graph 2x + y = 6 using intercepts",
      steps: [
        "x-intercept: set y = 0, so 2x = 6, x = 3 → point (3, 0)",
        "y-intercept: set x = 0, so y = 6 → point (0, 6)",
        "Plot both intercepts and draw the line through them",
      ],
    },
    {
      title: "Graph x - 2y = 4 using intercepts",
      steps: [
        "x-intercept: set y = 0, so x = 4 → point (4, 0)",
        "y-intercept: set x = 0, so -2y = 4, y = -2 → point (0, -2)",
        "Plot both intercepts and draw the line",
      ],
    },
  ],
  "3-5": [
    {
      title: "Graph y = (1/2)x - 3",
      steps: [
        "Plot the y-intercept: (0, -3)",
        "Use slope 1/2: rise 1, run 2 → next point (2, -2)",
        "Draw the line through the points",
      ],
    },
    {
      title: "Graph y = -x + 4",
      steps: [
        "Plot the y-intercept: (0, 4)",
        "Use slope -1: down 1, right 1 → next point (1, 3)",
        "Draw the line through the points",
      ],
    },
  ],
  "3-6": [
    {
      title: "Compare g(x) = 2x to f(x) = x",
      steps: [
        "Every y-value is multiplied by 2",
        "The line is twice as steep (vertical stretch by 2)",
        "Both lines pass through the origin",
      ],
    },
    {
      title: "Compare g(x) = x - 3 to f(x) = x",
      steps: [
        "Subtracting 3 shifts the graph down 3 units",
        "Slope stays 1; y-intercept moves to -3",
        "This is a vertical translation",
      ],
    },
  ],
  "3-7": [
    {
      title: "Graph y = |x - 2|",
      steps: [
        "Find the vertex: |x - 2| = 0 when x = 2, so vertex is (2, 0)",
        "Right side has slope +1; left side has slope -1",
        "Draw a V opening upward from (2, 0)",
      ],
    },
    {
      title: "Graph y = -|x + 1| + 3",
      steps: [
        "Vertex: (h, k) = (-1, 3)",
        "The negative sign opens the V downward",
        "Draw an upside-down V with vertex (-1, 3)",
      ],
    },
  ],
  // Chapter 4: Writing Linear Functions
  "4-1": [
    {
      title: "Write the equation with slope 3 and y-intercept -2",
      steps: [
        "Use y = mx + b",
        "Substitute m = 3 and b = -2",
        "Answer: y = 3x - 2",
      ],
    },
    {
      title: "Write the equation with slope -1/2 through (4, 1)",
      steps: [
        "Start with y = mx + b and plug in the point: 1 = -1/2(4) + b",
        "Solve: 1 = -2 + b, so b = 3",
        "Answer: y = -1/2 x + 3",
      ],
    },
  ],
  "4-2": [
    {
      title: "Write the equation through (3, 5) with slope 2",
      steps: [
        "Point-slope form: y - y₁ = m(x - x₁)",
        "Substitute: y - 5 = 2(x - 3)",
        "Simplify: y = 2x - 1",
      ],
    },
    {
      title: "Write the equation through (-2, 4) with slope -3",
      steps: [
        "Point-slope form: y - y₁ = m(x - x₁)",
        "Substitute: y - 4 = -3(x + 2)",
        "Simplify: y = -3x - 2",
      ],
    },
  ],
  "4-3": [
    {
      title: "Write a line parallel to y = 2x + 1 through (0, 5)",
      steps: [
        "Parallel lines have the same slope: m = 2",
        "Use the point (0, 5): b = 5",
        "Answer: y = 2x + 5",
      ],
    },
    {
      title: "Write a line perpendicular to y = 2x + 1 through (0, 5)",
      steps: [
        "Perpendicular slope is the negative reciprocal: m = -1/2",
        "Use the point (0, 5): b = 5",
        "Answer: y = -1/2 x + 5",
      ],
    },
  ],
  "4-4": [
    {
      title: "Describe the correlation of a scatter plot rising left to right",
      steps: [
        "As x increases, y also increases",
        "The points show a positive correlation",
        "If they fell left to right, it would be negative",
      ],
    },
    {
      title: "Find a line of fit through (1, 3) and (4, 9)",
      steps: [
        "Slope: m = (9 - 3)/(4 - 1) = 2",
        "Use (1, 3): 3 = 2(1) + b, so b = 1",
        "Line of fit: y = 2x + 1",
      ],
    },
  ],
  "4-5": [
    {
      title: "Use y = 2x + 1 to predict y when x = 5",
      steps: [
        "Substitute x = 5: y = 2(5) + 1",
        "Predicted value: y = 11",
        "Since x = 5 is inside the data range, this is interpolation",
      ],
    },
    {
      title: "Find the residual when actual y = 12 and predicted y = 11",
      steps: [
        "Residual = actual - predicted",
        "Residual = 12 - 11 = 1",
        "The model underpredicts by 1 unit",
      ],
    },
  ],
  "4-6": [
    {
      title: "Write a rule for 3, 7, 11, 15, ...",
      steps: [
        "Common difference: d = 7 - 3 = 4",
        "nth term: aₙ = a₁ + (n - 1)d = 3 + 4(n - 1)",
        "Check a₁₀ = 3 + 4(9) = 39 ✓",
      ],
    },
    {
      title: "Write a rule for 20, 15, 10, 5, ...",
      steps: [
        "Common difference: d = 15 - 20 = -5",
        "nth term: aₙ = 20 + (n - 1)(-5)",
        "Simplify: aₙ = 25 - 5n",
      ],
    },
  ],
  "4-7": [
    {
      title: "Evaluate f(x) = { x + 2 if x < 0; 2x if x ≥ 0 } at x = -3 and x = 4",
      steps: [
        "For x = -3 (< 0): use the top rule, f(-3) = -3 + 2 = -1",
        "For x = 4 (≥ 0): use the bottom rule, f(4) = 2(4) = 8",
      ],
    },
    {
      title: "Graph y = { 2 if x ≤ 1; x + 1 if x > 1 }",
      steps: [
        "For x ≤ 1: draw a horizontal ray at y = 2, closed dot at (1, 2)",
        "For x > 1: draw the ray y = x + 1, open dot at (1, 2)",
        "The two pieces meet at the boundary x = 1",
      ],
    },
  ],
  // Chapter 5: Systems of Linear Equations
  "5-1": [
    {
      title: "Solve by graphing: y = x + 1 and y = -x + 5",
      steps: [
        "Graph both lines on the same axes",
        "They intersect at (2, 3)",
        "Check: 2 + 1 = 3 and -2 + 5 = 3 ✓",
      ],
    },
    {
      title: "Solve by graphing: y = 2x - 1 and y = x + 2",
      steps: [
        "Graph both lines",
        "They intersect at (3, 5)",
        "Check: 2(3) - 1 = 5 and 3 + 2 = 5 ✓",
      ],
    },
  ],
  "5-2": [
    {
      title: "Solve by substitution: y = 2x and 3x + y = 10",
      steps: [
        "Substitute y = 2x into the second equation: 3x + 2x = 10",
        "Combine: 5x = 10, so x = 2",
        "Then y = 2(2) = 4 → solution (2, 4)",
      ],
    },
    {
      title: "Solve by substitution: x = y - 1 and x + 2y = 8",
      steps: [
        "Substitute x = y - 1: (y - 1) + 2y = 8",
        "Combine: 3y - 1 = 8, so y = 3",
        "Then x = 3 - 1 = 2 → solution (2, 3)",
      ],
    },
  ],
  "5-3": [
    {
      title: "Solve by elimination: x + y = 6 and x - y = 2",
      steps: [
        "Add the equations: 2x = 8, so x = 4",
        "Substitute back: 4 + y = 6, so y = 2",
        "Solution: (4, 2)",
      ],
    },
    {
      title: "Solve by elimination: 2x + 3y = 12 and 4x - 3y = 6",
      steps: [
        "Add the equations (y's cancel): 6x = 18, so x = 3",
        "Substitute back: 2(3) + 3y = 12, so 3y = 6, y = 2",
        "Solution: (3, 2)",
      ],
    },
  ],
  "5-4": [
    {
      title: "Classify: y = 2x + 1 and y = 2x - 3",
      steps: [
        "Both lines have slope 2 but different intercepts",
        "Parallel lines never intersect",
        "The system has no solution",
      ],
    },
    {
      title: "Classify: x + y = 3 and 2x + 2y = 6",
      steps: [
        "The second equation is 2× the first",
        "Both equations describe the same line",
        "The system has infinitely many solutions",
      ],
    },
  ],
  "5-5": [
    {
      title: "Graph y > x + 1",
      steps: [
        "Graph the boundary line y = x + 1 with a dashed line (not included)",
        "Test (0, 0): 0 > 1 is false — shade the opposite side",
        "Shade the region above the line",
      ],
    },
    {
      title: "Is (0, 0) a solution of 2x + y ≤ 3?",
      steps: [
        "Substitute (0, 0): 2(0) + 0 ≤ 3",
        "Simplify: 0 ≤ 3 — true",
        "Yes, (0, 0) is in the solution region",
      ],
    },
  ],
  "5-6": [
    {
      title: "Solve the system: y > x and y < -x + 4",
      steps: [
        "Graph y = x (dashed) and shade above it",
        "Graph y = -x + 4 (dashed) and shade below it",
        "The overlapping region is the solution set",
      ],
    },
    {
      title: "Solve the system: y ≥ 2x - 1 and y ≤ -x + 5",
      steps: [
        "Graph both lines with solid lines (included)",
        "Shade above the first and below the second",
        "Solutions lie in the overlapping wedge, including boundary points",
      ],
    },
  ],
  // Chapter 6: Exponential Functions
  "6-1": [
    {
      title: "Simplify x³ · x⁵",
      steps: [
        "Same base: add the exponents",
        "x³ · x⁵ = x^(3+5) = x⁸",
      ],
    },
    {
      title: "Simplify (2x²)³ ÷ (4x)",
      steps: [
        "Power the numerator: (2x²)³ = 8x⁶",
        "Divide: 8x⁶ / 4x = (8/4)·x^(6-1)",
        "Simplify: 2x⁵",
      ],
    },
  ],
  "6-2": [
    {
      title: "Evaluate 27^(2/3)",
      steps: [
        "The denominator 3 means cube root: 27^(2/3) = (³√27)²",
        "³√27 = 3",
        "Square it: 3² = 9",
      ],
    },
    {
      title: "Write x^(3/5) in radical form",
      steps: [
        "Denominator 5 becomes the index; numerator 3 becomes the power",
        "x^(3/5) = ⁵√(x³)",
      ],
    },
  ],
  "6-3": [
    {
      title: "Evaluate y = 2ˣ at x = -1, 0, 1, 2",
      steps: [
        "x = -1: y = 2⁻¹ = 1/2",
        "x = 0: y = 2⁰ = 1",
        "x = 1: y = 2, x = 2: y = 4 — the values double each step",
      ],
    },
    {
      title: "Evaluate y = 3(1/2)ˣ at x = 0, 1, 2",
      steps: [
        "x = 0: y = 3(1) = 3",
        "x = 1: y = 3(1/2) = 1.5",
        "x = 2: y = 3(1/4) = 0.75 — each value is half the previous (decay)",
      ],
    },
  ],
  "6-4": [
    {
      title: "A town of 500 people grows 4% per year",
      steps: [
        "Model: P(t) = 500(1.04)ᵗ (growth factor 1 + 0.04)",
        "After 2 years: P(2) = 500(1.04)²",
        "P(2) = 500(1.0816) ≈ 541 people",
      ],
    },
    {
      title: "A $20,000 car loses 15% of its value each year",
      steps: [
        "Model: V(t) = 20000(0.85)ᵗ (decay factor 1 - 0.15)",
        "After 1 year: V(1) = 20000(0.85)",
        "V(1) = $17,000",
      ],
    },
  ],
  "6-5": [
    {
      title: "Solve 3ˣ = 81",
      steps: [
        "Rewrite 81 as a power of 3: 81 = 3⁴",
        "So 3ˣ = 3⁴",
        "Equal bases means equal exponents: x = 4",
      ],
    },
    {
      title: "Solve 4ˣ = 8",
      steps: [
        "Rewrite both sides with base 2: (2²)ˣ = 2³",
        "Simplify: 2^(2x) = 2³",
        "Set exponents equal: 2x = 3, so x = 3/2",
      ],
    },
  ],
  "6-6": [
    {
      title: "Write a rule for 5, 15, 45, 135, ...",
      steps: [
        "Common ratio: r = 15/5 = 3",
        "nth term: aₙ = a₁ · r^(n-1) = 5 · 3^(n-1)",
        "Check a₄ = 5 · 27 = 135 ✓",
      ],
    },
    {
      title: "Find the 6th term of 64, 32, 16, 8, ...",
      steps: [
        "Common ratio: r = 32/64 = 1/2",
        "Rule: aₙ = 64 · (1/2)^(n-1)",
        "a₆ = 64 · (1/2)⁵ = 64/32 = 2",
      ],
    },
  ],
  "6-7": [
    {
      title: "List terms of a₁ = 3, aₙ = aₙ₋₁ + 5",
      steps: [
        "a₂ = a₁ + 5 = 8",
        "a₃ = 13, a₄ = 18",
        "The sequence 3, 8, 13, 18 is arithmetic with d = 5",
      ],
    },
    {
      title: "List terms of a₁ = 2, aₙ = 2·aₙ₋₁",
      steps: [
        "a₂ = 2(2) = 4",
        "a₃ = 8, a₄ = 16",
        "The sequence 2, 4, 8, 16 is geometric with r = 2",
      ],
    },
  ],
  // Chapter 7: Polynomials and Factoring
  "7-1": [
    {
      title: "Add (3x² + 2x - 5) + (x² - 4x + 1)",
      steps: [
        "Group like terms: (3x² + x²) + (2x - 4x) + (-5 + 1)",
        "Combine: 4x² - 2x - 4",
      ],
    },
    {
      title: "Subtract (5x² - 3x + 7) - (2x² + x - 4)",
      steps: [
        "Distribute the negative: 5x² - 3x + 7 - 2x² - x + 4",
        "Combine like terms: 3x² - 4x + 11",
      ],
    },
  ],
  "7-2": [
    {
      title: "Multiply (x + 3)(x + 5)",
      steps: [
        "FOIL: x·x + x·5 + 3·x + 3·5",
        "Expand: x² + 5x + 3x + 15",
        "Combine: x² + 8x + 15",
      ],
    },
    {
      title: "Multiply (x + 2)(x² - 3x + 1)",
      steps: [
        "Distribute x: x³ - 3x² + x",
        "Distribute 2: 2x² - 6x + 2",
        "Combine: x³ - x² - 5x + 2",
      ],
    },
  ],
  "7-3": [
    {
      title: "Expand (x + 4)²",
      steps: [
        "Square of a sum: (a + b)² = a² + 2ab + b²",
        "Apply: x² + 2(x)(4) + 16",
        "Simplify: x² + 8x + 16",
      ],
    },
    {
      title: "Expand (x + 6)(x - 6)",
      steps: [
        "Difference of squares: (a + b)(a - b) = a² - b²",
        "Apply: x² - 36",
        "The middle terms cancel",
      ],
    },
  ],
  "7-4": [
    {
      title: "Solve (x - 2)(x + 5) = 0",
      steps: [
        "Zero-product property: x - 2 = 0 or x + 5 = 0",
        "Solve each: x = 2 or x = -5",
      ],
    },
    {
      title: "Solve x(x - 3) = 0",
      steps: [
        "Zero-product property: x = 0 or x - 3 = 0",
        "Solutions: x = 0 or x = 3",
      ],
    },
  ],
  "7-5": [
    {
      title: "Factor x² + 7x + 12",
      steps: [
        "Need two numbers that multiply to 12 and add to 7: 3 and 4",
        "Write the factors: (x + 3)(x + 4)",
        "Check by FOIL: x² + 4x + 3x + 12 ✓",
      ],
    },
    {
      title: "Factor x² - 5x + 6",
      steps: [
        "Need two numbers that multiply to 6 and add to -5: -2 and -3",
        "Write the factors: (x - 2)(x - 3)",
        "Check: -2x + -3x = -5x ✓",
      ],
    },
  ],
  "7-6": [
    {
      title: "Factor 2x² + 7x + 3",
      steps: [
        "Try factors of 2x² and 3: (2x + 1)(x + 3)",
        "Check the middle: 6x + x = 7x ✓",
        "Answer: (2x + 1)(x + 3)",
      ],
    },
    {
      title: "Factor 3x² - 8x + 4",
      steps: [
        "Try: (3x - 2)(x - 2)",
        "Check the middle: -6x - 2x = -8x ✓",
        "Answer: (3x - 2)(x - 2)",
      ],
    },
  ],
  "7-7": [
    {
      title: "Factor x² - 25",
      steps: [
        "Recognize a difference of squares: a² - b²",
        "Here a = x, b = 5",
        "Answer: (x + 5)(x - 5)",
      ],
    },
    {
      title: "Factor x² - 10x + 25",
      steps: [
        "Perfect square trinomial: a² - 2ab + b²",
        "Here a = x, b = 5 (check: 2·x·5 = 10x ✓)",
        "Answer: (x - 5)²",
      ],
    },
  ],
  "7-8": [
    {
      title: "Factor x³ + 2x² + 3x + 6 by grouping",
      steps: [
        "Group pairs: (x³ + 2x²) + (3x + 6)",
        "Factor each: x²(x + 2) + 3(x + 2)",
        "Factor out (x + 2): (x + 2)(x² + 3)",
      ],
    },
    {
      title: "Factor 2x³ - 8x² + x - 4 by grouping",
      steps: [
        "Group pairs: (2x³ - 8x²) + (x - 4)",
        "Factor each: 2x²(x - 4) + 1(x - 4)",
        "Factor out (x - 4): (x - 4)(2x² + 1)",
      ],
    },
  ],
  // Chapter 8: Graphing Quadratics
  "8-1": [
    {
      title: "Compare y = 2x² to y = x²",
      steps: [
        "Both have vertex (0, 0) and open upward",
        "The factor 2 is a vertical stretch",
        "y = 2x² is narrower than y = x²",
      ],
    },
    {
      title: "Compare y = (1/2)x² to y = x²",
      steps: [
        "Same vertex (0, 0), opens upward",
        "The factor 1/2 is a vertical compression",
        "y = (1/2)x² is wider than y = x²",
      ],
    },
  ],
  "8-2": [
    {
      title: "Find the vertex of y = x² - 3",
      steps: [
        "c = -3 shifts the parabola down 3 units",
        "Vertex: (0, -3), opens upward",
        "Range: y ≥ -3",
      ],
    },
    {
      title: "Find the vertex of y = -x² + 4",
      steps: [
        "a = -1 opens the parabola downward",
        "c = 4 puts the vertex at (0, 4)",
        "Maximum value: 4",
      ],
    },
  ],
  "8-3": [
    {
      title: "Find the vertex of y = x² - 4x + 3",
      steps: [
        "Axis of symmetry: x = -b/(2a) = 4/2 = 2",
        "Plug in: y = (2)² - 4(2) + 3 = -1",
        "Vertex: (2, -1), opens upward",
      ],
    },
    {
      title: "Find the vertex of y = -x² + 2x + 3",
      steps: [
        "Axis of symmetry: x = -2/(2·-1) = 1",
        "Plug in: y = -(1)² + 2(1) + 3 = 4",
        "Vertex: (1, 4), opens downward — a maximum",
      ],
    },
  ],
  "8-4": [
    {
      title: "Identify the vertex of y = (x - 2)² + 1",
      steps: [
        "Vertex form is y = a(x - h)² + k",
        "Here h = 2 and k = 1",
        "Vertex: (2, 1), opens upward",
      ],
    },
    {
      title: "Identify the vertex of y = -2(x + 3)² - 4",
      steps: [
        "Rewrite as a(x - h)² + k: h = -3, k = -4",
        "Vertex: (-3, -4)",
        "a = -2 means it opens downward and is narrow",
      ],
    },
  ],
  "8-5": [
    {
      title: "Find the vertex of y = (x - 1)(x - 5)",
      steps: [
        "x-intercepts: 1 and 5",
        "Axis of symmetry is the midpoint: x = (1 + 5)/2 = 3",
        "Vertex y-value: (3 - 1)(3 - 5) = (2)(-2) = -4 → vertex (3, -4)",
      ],
    },
    {
      title: "Find the vertex of y = -(x + 2)(x - 4)",
      steps: [
        "x-intercepts: -2 and 4; axis: x = 1",
        "Vertex y-value: -(1 + 2)(1 - 4) = -(3)(-3) = 9",
        "Vertex (1, 9), opening downward",
      ],
    },
  ],
  "8-6": [
    {
      title: "Classify the data y: 2, 4, 8, 16 for x: 0, 1, 2, 3",
      steps: [
        "Check ratios: 4/2 = 8/4 = 16/8 = 2",
        "A constant ratio means exponential",
        "Model: y = 2 · 2ˣ",
      ],
    },
    {
      title: "Classify the data y: 1, 4, 9, 16 for x: 1, 2, 3, 4",
      steps: [
        "First differences: 3, 5, 7",
        "Second differences: 2, 2 — constant",
        "Constant second differences means quadratic",
      ],
    },
  ],
  // Chapter 9: Solving Quadratics
  "9-1": [
    {
      title: "Simplify √50",
      steps: [
        "Factor out the perfect square: 50 = 25 · 2",
        "√50 = √25 · √2 = 5√2",
      ],
    },
    {
      title: "Simplify √(20/49)",
      steps: [
        "Quotient property: √20 / √49 = √20 / 7",
        "Simplify the top: √20 = 2√5",
        "Answer: 2√5 / 7",
      ],
    },
  ],
  "9-2": [
    {
      title: "Solve x² - 4 = 0 by graphing",
      steps: [
        "Graph y = x² - 4 (vertex (0, -4))",
        "The parabola crosses the x-axis at -2 and 2",
        "Solutions: x = -2 and x = 2",
      ],
    },
    {
      title: "Solve x² + 1 = 0 by graphing",
      steps: [
        "Graph y = x² + 1 (vertex (0, 1))",
        "The parabola never touches the x-axis",
        "No real solutions",
      ],
    },
  ],
  "9-3": [
    {
      title: "Solve x² = 49",
      steps: [
        "Take the square root of both sides",
        "Remember ±: x = ±√49",
        "Solutions: x = 7 or x = -7",
      ],
    },
    {
      title: "Solve (x - 3)² = 16",
      steps: [
        "Take the square root: x - 3 = ±4",
        "Case 1: x - 3 = 4 gives x = 7",
        "Case 2: x - 3 = -4 gives x = -1",
      ],
    },
  ],
  "9-4": [
    {
      title: "Solve x² + 6x + 5 = 0 by completing the square",
      steps: [
        "Move the constant: x² + 6x = -5",
        "Add (6/2)² = 9 to both sides: x² + 6x + 9 = 4",
        "Factor: (x + 3)² = 4, so x + 3 = ±2",
        "Solutions: x = -1 or x = -5",
      ],
    },
    {
      title: "Solve x² - 8x = 4 by completing the square",
      steps: [
        "Add (8/2)² = 16 to both sides: x² - 8x + 16 = 20",
        "Factor: (x - 4)² = 20",
        "Take the root: x = 4 ± √20 = 4 ± 2√5",
      ],
    },
  ],
  "9-5": [
    {
      title: "Solve x² - 5x + 6 = 0 with the quadratic formula",
      steps: [
        "a = 1, b = -5, c = 6",
        "x = (5 ± √(25 - 24)) / 2 = (5 ± 1) / 2",
        "Solutions: x = 3 or x = 2",
      ],
    },
    {
      title: "Solve 2x² + 3x - 2 = 0 with the quadratic formula",
      steps: [
        "a = 2, b = 3, c = -2",
        "x = (-3 ± √(9 + 16)) / 4 = (-3 ± 5) / 4",
        "Solutions: x = 1/2 or x = -2",
      ],
    },
  ],
  "9-6": [
    {
      title: "Solve y = x² and y = x + 2",
      steps: [
        "Set equal: x² = x + 2",
        "Rearrange: x² - x - 2 = 0, factor (x - 2)(x + 1) = 0",
        "x = 2 → y = 4; x = -1 → y = 1",
        "Solutions: (2, 4) and (-1, 1)",
      ],
    },
    {
      title: "Solve y = x² - 1 and y = 2",
      steps: [
        "Set equal: x² - 1 = 2, so x² = 3",
        "Take the root: x = ±√3",
        "Solutions: (√3, 2) and (-√3, 2)",
      ],
    },
  ],
  // Chapter 10: Radical Functions
  "10-1": [
    {
      title: "Find the endpoint and domain of y = √(x - 2)",
      steps: [
        "Inside must be ≥ 0: x - 2 ≥ 0, so x ≥ 2",
        "Endpoint: (2, 0)",
        "The curve rises to the right from (2, 0)",
      ],
    },
    {
      title: "Find the endpoint and range of y = √(x + 1) + 3",
      steps: [
        "Endpoint: (h, k) = (-1, 3)",
        "Domain: x ≥ -1",
        "Range: y ≥ 3 (starts at 3 and rises)",
      ],
    },
  ],
  "10-2": [
    {
      title: "Find the inflection point of y = ³√(x - 1)",
      steps: [
        "The S-curve centers at (h, k)",
        "Center: (1, 0)",
        "It rises through all real x values",
      ],
    },
    {
      title: "Describe y = -³√x + 2",
      steps: [
        "The negative reflects the curve (falls instead of rises)",
        "Center shifts to (0, 2)",
        "Falling S-curve through (0, 2)",
      ],
    },
  ],
  "10-3": [
    {
      title: "Solve √(x + 5) = 3",
      steps: [
        "Square both sides: x + 5 = 9",
        "Solve: x = 4",
        "Check: √(4 + 5) = √9 = 3 ✓",
      ],
    },
    {
      title: "Solve √(x + 7) = x + 1",
      steps: [
        "Square both sides: x + 7 = x² + 2x + 1",
        "Rearrange: x² + x - 6 = 0 → (x + 3)(x - 2) = 0",
        "Candidates: x = -3 and x = 2",
        "Check x = -3: √4 = 2 ≠ -2 (extraneous). Only x = 2 works",
      ],
    },
  ],
  "10-4": [
    {
      title: "Find the inverse of f(x) = 2x - 6",
      steps: [
        "Write y = 2x - 6 and swap x and y: x = 2y - 6",
        "Solve for y: x + 6 = 2y, so y = (x + 6)/2",
        "f⁻¹(x) = (x + 6)/2",
      ],
    },
    {
      title: "Find the inverse of f(x) = x³ + 1",
      steps: [
        "Swap variables: x = y³ + 1",
        "Solve: y³ = x - 1, so y = ³√(x - 1)",
        "f⁻¹(x) = ³√(x - 1)",
      ],
    },
  ],
  // Chapter 11: Data Analysis
  "11-1": [
    {
      title: "Find the mean, median, and range of 4, 7, 9, 10, 15",
      steps: [
        "Mean: (4 + 7 + 9 + 10 + 15)/5 = 45/5 = 9",
        "Median (middle value): 9",
        "Range: 15 - 4 = 11",
      ],
    },
    {
      title: "Find Q1, Q3, and IQR of 2, 4, 6, 8, 10, 12",
      steps: [
        "Median splits data at 7: lower half {2,4,6}, upper half {8,10,12}",
        "Q1 = 4, Q3 = 10",
        "IQR = 10 - 4 = 6",
      ],
    },
  ],
  "11-2": [
    {
      title: "Make a box plot for min 3, Q1 5, median 8, Q3 12, max 18",
      steps: [
        "Draw whiskers from 3 to 5 and from 12 to 18",
        "Draw the box from Q1 = 5 to Q3 = 12",
        "Mark the median line inside the box at 8",
      ],
    },
    {
      title: "Find the outlier fences when Q1 = 4 and Q3 = 10",
      steps: [
        "IQR = 10 - 4 = 6",
        "Lower fence: 4 - 1.5(6) = -5",
        "Upper fence: 10 + 1.5(6) = 19 — any data beyond these is an outlier",
      ],
    },
  ],
  "11-3": [
    {
      title: "The mean is greater than the median — what is the shape?",
      steps: [
        "A high mean pulled above the median indicates a tail on the right",
        "The distribution is skewed right (positively skewed)",
      ],
    },
    {
      title: "Which measures should summarize a skewed distribution?",
      steps: [
        "Outliers distort the mean",
        "Use the median for center and the IQR for spread",
        "Symmetric data uses mean and standard deviation instead",
      ],
    },
  ],
  "11-4": [
    {
      title: "30 of 60 students play a sport — find the relative frequency",
      steps: [
        "Relative frequency = part / total",
        "30/60 = 0.5",
        "50% of students play a sport",
      ],
    },
    {
      title: "Of 40 girls, 10 play a sport — find the conditional relative frequency",
      steps: [
        "Condition on the row: only girls count, total = 40",
        "10/40 = 0.25",
        "25% of girls play a sport",
      ],
    },
  ],
  "11-5": [
    {
      title: "Best display to compare test scores across three classes?",
      steps: [
        "The goal is comparing medians and spread between groups",
        "Use side-by-side box-and-whisker plots",
      ],
    },
    {
      title: "Best display for monthly sales over a year?",
      steps: [
        "The goal is a trend over time",
        "Use a line graph with months on the x-axis",
      ],
    },
  ],
};

export function getExamplesForSubsection(subsectionId: string): WorkedExample[] {
  return subsectionExamples[subsectionId] ?? [];
}
