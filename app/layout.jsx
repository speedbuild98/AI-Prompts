import "@/styles/globals.css";
import { Nav, Provider } from "@/components";

export const metadata = {
  title: "AI Prompts",
  description: "Discorver & Share AI Prompts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
