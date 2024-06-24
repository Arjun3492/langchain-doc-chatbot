import { Pinecone } from '@pinecone-database/pinecone';

export async function initPinecone(apiKey: string, environment: string) {
  try {

    const pinecone = new Pinecone({
      apiKey
    });

    return pinecone;
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}
