import express from 'express'; //import express
import type { Request, Response } from 'express'; //types of express
import dotenv from 'dotenv';
import OpenAI from 'openai';
import z from 'zod';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

// openAI client
const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

// app
const app = express();

app.use(express.json()); //parse data in json

const port = process.env.PORT || 4000; //port

// api response
// let lastResponseId: string | null = null;
// store converstion history of chat
const conversations = new Map<string, string>();

// zod validations
const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt is required.')
      .max(1000, 'Prompt is too long (max 1000 characters).'),
   conversatioId: z.string().uuid(),
});

app.post('/api/chat', async (req: Request, res: Response) => {
   const parseResult = chatSchema.safeParse(req.body);
   if (!parseResult.success) {
      res.status(400).json(parseResult.error.format());
      return;
   }
   const { prompt, conversationId } = req.body;
   // use client to create with using model

   try {
      const response = await client.responses.create({
         model: 'gpt-4o-mini!',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id: conversations.get(conversationId), //getting last information or previous information
      });
      // lastResponseId = response.id;
      // set it into a map data
      conversations.set(conversationId, response.id);

      // response returns
      res.json({ message: response.output_text });
   } catch (error) {
      res.status(500).json({ error: 'Failed to geenrate a response.' });
   }
});

// server running on port 4000
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});

// api get response
// app.get('/', (req: Request, res: Response) => {
//    res.send('Hello! Gaurav11');
// });

// api create
// app.get('/api/hello', (req: Request, res: Response) => {
//    res.json({ message: 'Hello World! Gaurav' });
// });
