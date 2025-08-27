import { client } from '../ai/openAI';
import { conversationRepository } from '../conversations/conversation';

type ChatResponse = {
   id: string;
   message: string;
};

// Public Interface details
export const chatService = {
   async sendMessage(
      prompt: string,
      conversationId: string
   ): Promise<ChatResponse> {
      const response = await client.responses.create({
         model: 'gpt-4o-mini',
         input: prompt,
         temperature: 0.2,
         max_output_tokens: 100,
         previous_response_id:
            conversationRepository.getLastResponseId(conversationId), //getting last information or previous information
      });
      // lastResponseId = response.id;
      // set it into a map data
      conversationRepository.setLastResponseId(conversationId, response.id);
      return {
         id: response.id,
         message: response.output_text,
      };
   },
};
