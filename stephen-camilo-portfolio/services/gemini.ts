
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a friendly AI assistant representing Stephen Camilo, a Senior PHP Developer. 
Your goal is to answer questions about Stephen's professional experience, skills, and projects.

Context about Stephen:
- Over 10 years of experience.
- Expert in PHP, Drupal (8-11), WordPress, and Laravel.
- Background in Marketing and Data Science.
- Specializes in healthcare platforms, marketplaces, and enterprise systems.
- Key Projects: Healthcare Enterprise Platform (Drupal 10), B2B2C Restaurant Marketplace, WooCommerce Payment Gateway Integrations.
- Location: Based in Brazil, works internationally.

Grounding: 
You have access to Google Search to verify current technical details about the stacks Stephen uses (e.g., Drupal 11 release notes, PHP 8.3 features) to provide the most accurate advice possible.

Keep responses professional, concise, and helpful.
`;

export async function chatWithStephen(userMessage: string, history: {role: string, parts: {text: string}[]}[] = []) {
  try {
    // Fix: Initialize GoogleGenAI using the process.env.API_KEY directly as a named parameter
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Using gemini-3-flash-preview with search grounding
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      }
    });

    let text = response.text || "";
    
    // Fix: Extract and append grounding URLs from groundingChunks to comply with Google Search grounding requirements
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks && groundingChunks.length > 0) {
      const sources = groundingChunks
        .map(chunk => {
          if (chunk.web) {
            return `${chunk.web.title}: ${chunk.web.uri}`;
          }
          return null;
        })
        .filter((s): s is string => s !== null);
      
      if (sources.length > 0) {
        text += "\n\nSources:\n" + sources.join("\n");
      }
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to Stephen's knowledge base right now. Please try again later or contact him directly via email.";
  }
}
