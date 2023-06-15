// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { complain_text, member_id } = await request.json();
//   const supabase = createRouteHandlerClient({ cookies });
//   const { data, error } = await supabase
//     .from("Complain")
//     .insert([{ complain_text: complain_text, member_id: member_id }]);
//   return NextResponse.json(data);
// }
