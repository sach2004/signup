// app/api/auth/signin.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { errorHandler } from '../error-handler';
import { signIn } from 'next-auth/react';

export default async function signin(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await signIn('credentials', {
      redirect: false,
      email: req.body.email,
      password: req.body.password,
    });

    if (result.error) {
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.json({ message: 'Signed in successfully' });
    }
  } catch (error) {
    errorHandler(req, res, error);
  }
}
