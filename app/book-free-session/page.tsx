import { redirect } from "next/navigation";
import { contactDetails } from "@/lib/site-data";

export default function BookFreeSessionPage() {
  redirect(contactDetails.bookingLink);
}
