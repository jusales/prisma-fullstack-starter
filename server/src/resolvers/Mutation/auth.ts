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

  async createFood(parent, args, ctx: Context, info) {
    const food = await ctx.db.mutation.createFood(
      {
        data: {
          name: args.name,
          location: args.location,
          cuisine: args.cuisine,
          hours: args.hours,
          tags: {
            set: args.tags
          }
        }
      },
      info
    )

    return food
  },

  async createDrink(parent, args, ctx: Context, info) {
    const drink = await ctx.db.mutation.createDrink(
      {
        data: {
          name: args.name,
          location: args.location,
          hours: args.hours,
          tags: {
            set: args.tags
          }
        }
      },
      info
    )

    return drink
  }
}
