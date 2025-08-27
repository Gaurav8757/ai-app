// Implementation Details
const conversations = new Map<string, string>();

export const conversationRepository = {
   // get ID
   getLastResponseId(conversationId: string) {
      // STORING ID IN MAP
      return conversations.get(conversationId);
   },
   //    set response id with conversation id
   setLastResponseId(conversationId: string, responseId: string) {
      conversations.set(conversationId, responseId);
   },
};
console.log(conversations);

// Export pulic interface of model
// export function getLastResponseId(conversationId: string) {
//    return conversations.get(conversationId);
// }

// export function setLastResponseId(conversationId: string, responseId: string) {
//    conversations.set(conversationId, responseId);
// }
