import { Auth } from 'aws-amplify';

export const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user.attributes.email;
    } catch (error) {
      console.error("Error getting user", error);
      return null;
    }
  }

