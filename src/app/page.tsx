import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold tracking-tight">Coin</h1>

      <p className="text-muted-foreground">
        Money, with purpose.
      </p>

      <Button>Let's Build Coin 🚀</Button>
    </main>
  );
}