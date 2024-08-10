import { connecDb } from "@/app/db";
import Contact from "../../models/Contact.js";

connecDb();

export async function POST(req) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      message,
    });

    await newContact.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: `Thank you for your message, ${firstName}!`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error", error.message);

    // Return an error response
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
