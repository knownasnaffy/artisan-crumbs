import { Metadata } from "next";
import ContactPage from "./page.client";

export const metadata: Metadata = {
  title: "Contact Us | Artisan Crumbs",
  description: "Get in touch with Artisan Crumbs for custom cake orders, wedding consultations, and general enquiries. We respond within 1–2 business days.",
};

export default function Page() {
  return <ContactPage />;
}
