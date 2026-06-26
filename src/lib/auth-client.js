import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL // .env ফাইল থেকে URL নিন
})

// কনফিগারেশনসহ authClient থেকে ফাংশনগুলো ডি-স্ট্রাকচার করুন
export const { signIn, signUp, useSession, signOut } = authClient;