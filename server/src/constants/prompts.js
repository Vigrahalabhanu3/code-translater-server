// Write your code here
export const TRANSLATE_PROMPT = (code, sourceLang, targetLang) => `
You are an expert code translator. Translate the following ${sourceLang} code to ${targetLang}.

Rules:
1. Only return the translated code, no explanations.
2. Preserve the logic and functionality exactly.
3. Use idiomatic patterns of the target language.
4. Include necessary imports/headers for the target language.
5. Do NOT wrap the code in markdown code blocks.

Source code (${sourceLang}):
${code}

Translated code (${targetLang}):
`;

export const ANALYZE_COMPLEXITY_PROMPT = (code, language) => `
You are an expert algorithm analyst. Analyze the time and space complexity of the following ${language} code.

Rules:
1. Respond with ONLY a JSON object in this exact format:
{
  "timeComplexity": "O(...)",
  "spaceComplexity": "O(...)",
  "explanation": "Brief explanation of why"
}
2. Be precise with Big-O notation.
3. Consider worst-case complexity.
4. Keep the explanation under 200 words.
5. Do NOT include any other text or markdown formatting.

Code (${language}):
${code}
`;
export const OPTIMIZE_PROMPT = (code, language) => `
You are an expert ${language} developer. Optimize the following code for better performance and readability.

Rules:
1. Respond with ONLY a JSON object in this exact format:
{
  "optimizedCode": "the optimized code here",
  "suggestions": "bullet-point list of what you improved and why"
}
2. Keep the same functionality.
3. Use best practices and idiomatic patterns.
4. Focus on performance, readability, and maintainability.
5. Do NOT include markdown code blocks inside the JSON.

Code (${language}):
${code}
`;

export const EXPLAIN_PROMPT = (code, language) => `
You are an expert software architect and technical lead. Provide an advanced, deep-dive explanation of the following ${language} code for a senior engineer.

Rules:
1. Respond with ONLY a JSON object in this exact format:
{
  "explanation": "your advanced technical architectural breakdown"
}
2. Analyze the architectural patterns, design principles (e.g., SOLID, DRY), and idiomatic nuances of the implementation.
3. Discuss memory management, performance considerations (temporal and spatial), and potential side effects.
4. Highlight specific language features, syntax sugar, or low-level details that are critical to the code's operation.
5. Identify potential edge cases, scalability concerns, or optimization opportunities that a senior developer should be aware of.
6. Maintain a professional, high-level technical tone.
7. Do NOT include markdown code blocks inside the JSON.

Code (${language}):
${code}
`;