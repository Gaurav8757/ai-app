import express from 'express'; //import express
import type { Request, Response } from 'express'; //types of express
import { validationsInput } from '../validations/validations';
import { chatService } from '../services/chat-service';

const chatController = async (req: Request, res: Response) => {
   const parseResult = validationsInput.safeParse(req.body);
   if (!parseResult.success) {
      res.status(400).json(parseResult.error.format());
      return;
   }
   const { prompt, conversationId } = req.body;
   const response = await chatService.sendMessage(prompt, conversationId);

   try {
      // response returns
      res.json({ message: response.message });
      // response.message is promise from
      // async sendMessage(prompt:string, conversationId:string): Promise<ChatResponse>{}
   } catch (error) {
      res.status(500).json({
         error: `Failed to geenrate a response: ${error} `,
      });
   }
};

export default chatController;
