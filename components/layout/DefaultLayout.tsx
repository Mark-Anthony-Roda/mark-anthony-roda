import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <main className="container mx-auto ">{children}</main>;
}
