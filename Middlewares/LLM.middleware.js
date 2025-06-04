const { GoogleGenerativeAI } = require("@google/generative-ai");
const { pretify } = require("../Common/pretify");
const dotenv = require("dotenv");
dotenv.config();

const genAImodel = async (prompt) => {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You will be given a user query. Just reply to the query in a helpful and polite manner. Do not return JSON. Just return the plain text answer.",
  });

  const result = await model.generateContent([prompt]);
  return result.response.text(); // plain string
};

module.exports = genAImodel;
