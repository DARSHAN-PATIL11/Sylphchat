import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: { kindeAuth: string } }
) {
  const { params } = context; // Ensure params is awaited properly
  if (!params || !params.kindeAuth) {
    return new Response("Invalid request", { status: 400 });
  }
  return handleAuth(request, params.kindeAuth);
}

// import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
// import { NextRequest } from 'next/server'

// export async function GET(
//   request: NextRequest,
//   { params }: any
// ) {
//   const endpoint = params.kindeAuth
//   return handleAuth(request, endpoint)
// }