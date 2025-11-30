// import { clerkMiddleware } from '@clerk/nextjs/server';


// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };


// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // PUBLIC ROUTES (no login required)
// const isPublicRoute = createRouteMatcher([
//   "/signin(.*)",
//   "/signup(.*)",
// ]);

// // ADMIN ROUTES
// const isAdminRoute = createRouteMatcher([
//   "/admin(.*)",
// ]);

// export default clerkMiddleware(async (auth, req) => {

//   // 1. Public routes
//   if (isPublicRoute(req)) {
//     return;
//   }

//   // 2. Admin routes
//   if (isAdminRoute(req)) {
//     const { sessionClaims } = await auth();
//     const role = sessionClaims?.publicMetadata?.role;

//     if (role !== "admin") {
//       return new Response("You are not allowed", { status: 403 });
//     }
//     return;
//   }

//   // 3. All other routes must be protected
//   await auth.protect();
// });

// export const config = {
//   matcher: [
//     "/((?!_next|.*\\..*).*)",
//     "/(api|trpc)(.*)",
//   ],
// };



import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}