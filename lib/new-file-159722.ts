// components/SignUpPage.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUpPage = () => {
  // code
};

export default SignUpPage;

// components/SignInPage.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

interface FormData {
  email: string;
  password: string;
}

const SignInPage = () => {
  // code
};

export default SignInPage;
