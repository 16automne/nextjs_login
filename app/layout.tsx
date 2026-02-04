import "@fortawesome/fontawesome-free/css/all.min.css"; // 라이브러리 CSS
import "./css/common.css"; // 내 공통 CSS

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
