import Header from "@/app/components/landing-page/header";
import Button from "@/app/components/ui/button";

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha seu plano</h2>
      <div className="flex gap-4">
        <Button>R$ 9,90</Button>
        <Button>R$ 29,90 Vitalício</Button>
      </div>
    </div>
  )
}