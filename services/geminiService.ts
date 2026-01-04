
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const suggestTemplate = async (type: string): Promise<string> => {
  if (!process.env.API_KEY) return "لطفاً برای استفاده از هوش مصنوعی، کلید API را تنظیم کنید.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, professional Persian banking SMS template for a ${type} transaction using placeholders like {amount}, {currencyDescription}, and {accountNumber}. Return only the template text.`,
      config: {
        systemInstruction: "You are a professional UX writer for major banks in Iran.",
      }
    });
    return response.text || "خطا در دریافت پیشنهاد.";
  } catch (error) {
    console.error("Gemini Suggestion Error:", error);
    return "متاسفم، مشکلی در ارتباط با هوش مصنوعی پیش آمد.";
  }
};
