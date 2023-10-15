// utils/authMiddleware.ts
import { NextApiRequest } from 'next';
import { Amplify, withSSRContext } from 'aws-amplify';
import awsExports from '@/aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

export const authMiddleware = async (req: NextApiRequest) => {
  const SSR = withSSRContext({ req });
  
  try {
    const user = await SSR.Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    throw new Error('Invalid token or session expired');
  }
};
