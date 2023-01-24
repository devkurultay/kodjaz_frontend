import jwtDecode from 'jwt-decode';
import NextAuth, { NextAuthOptions, Awaitable } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { User } from '../../../types/userTypes';

async function getUser(
  credentials: Record<'email' | 'password', string> | undefined,
) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  const response = await fetch(baseUrl + 'token/obtain/', {
    method: 'POST',
    body: JSON.stringify({
      email: credentials?.email ?? '',
      password: credentials?.password ?? '',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { access } = await response.json();
  const decoded: User = jwtDecode(access);
  if (response.ok) {
    return {
      email: decoded?.email,
      name: decoded?.name,
      user_id: decoded?.user_id,
      username: decoded?.username,
    };
  }
  return null;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      // This is were you can put your own external API call to validate Email and Password
      authorize: async (credentials) => {
        try {
          const user = await getUser(credentials);
          if (user) {
            return user as any;
          }
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  theme: {
    colorScheme: 'light',
  },
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
