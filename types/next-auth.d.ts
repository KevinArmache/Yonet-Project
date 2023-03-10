import NextAuth, { DefaultSession } from "next-auth"
 
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      isAdmin: boolean,
      id: boolean,
    } & DefaultSession["user"]
  }
}


import { DefaultUser } from 'next-auth';
declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & { 
          id: string; 
          isAdmin: boolean;
      };
    }
    interface User extends DefaultUser {
        isAdmin: boolean;
      
    }
}