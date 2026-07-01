import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    //console.log(session, "session");
    if (!session) {
        return NextResponse.redirect(new URL("/logIn", request.url));
    }
}

export const config = {
    matcher: ["/add-pet", "/all-pets/:id", "/my-listing", "/my-rquest"],
};
