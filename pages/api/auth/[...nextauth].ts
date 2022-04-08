import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { fauna } from "../../../src/services/fauna"
import { query as q } from "faunadb"

export default NextAuth({
  providers: [

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index("users_by_email"),
                  q.Casefold(user.email)
                )
              )
            ),

            q.Create(q.Collection("users"), {
              data: { email }
            }),
            q.Get(
              q.Match(
                q.Index("users_by_email"),
                q.Casefold(user.email)
              )
            )
          )
        )
        return true
      } catch(err) {
        console.error(err)
        return false
      }

    }
  }
})