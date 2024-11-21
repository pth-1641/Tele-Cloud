import TelegramBot from "node-telegram-bot-api";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "@/constants";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { botToken } = await request.json();
    await new TelegramBot(botToken).getMe();
    const expireTime = 10 * 24 * 60 * 60; //10 days
    const accessToken = await jwt.sign(
      {
        botToken,
      },
      SECRET_KEY,
      {
        expiresIn: expireTime,
      }
    );
    cookies().set("access-token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: true,
      maxAge: expireTime,
    });
    return Response.json({
      ok: true,
      message: "Valid bot token",
    });
  } catch {
    return Response.json(
      {
        ok: false,
        message: "Invalid bot token",
      },
      {
        status: 400,
      }
    );
  }
}
