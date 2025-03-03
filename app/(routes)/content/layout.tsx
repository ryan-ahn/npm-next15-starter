import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan Ahn - content page",
  description: "content page",
};

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
