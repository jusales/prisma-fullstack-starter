import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import { Context } from "../../utils"

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password }
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    }
  },

  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error("Invalid password")
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user
    }
  },

  async createBusiness(parent, args, ctx: Context, info) {
    const business = await ctx.db.mutation.createBusiness(
      {
        data: {
          zomatoID: args.zomatoID,
          name: args.name,
          url: args.url,
          address: args.address,
          locality: args.locality,
          city: args.city,
          latitude: args.latitude,
          longitude: args.longitude,
          price: args.price,
          cuisine: {
            set: args.cuisine
          },
          hours: args.hours,
          tags: {
            set: args.tags
          },
          type: args.type
        }
      },
      info
    )

    return business
  }
}
