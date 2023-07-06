import dotenv from 'dotenv'
import { REST } from '@discordjs/rest'
import { WebSocketManager } from '@discordjs/ws'
import { Client, GatewayDispatchEvents, GatewayIntentBits } from '@discordjs/core'

dotenv.config()

const DISCORD_TOKEN = process.env.DISCORD_TOKEN!

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN)

const gateway = new WebSocketManager({
    token: DISCORD_TOKEN,
    intents: GatewayIntentBits.GuildMessages
        | GatewayIntentBits.MessageContent,
    rest,
})

const client = new Client({ gateway, rest })

client.once(GatewayDispatchEvents.Ready, () => console.log('ready'))

gateway.connect()
