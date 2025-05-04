"use client";

import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="px-6 py-12">
      <Text variant="h1" className="text-center">
        Generador de Nombres
      </Text>
      <Text variant="p" className="mt-4 text-center">
        Encuentra nombres únicos y originales para cualquier propósito.
      </Text>
      <div className="flex justify-center mt-8">
        <Button
          variant="primary"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Generar Nombre
        </Button>
      </div>
    </main>
  );
}
