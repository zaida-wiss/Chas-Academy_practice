# TypeScript & React Testning – Workshop

## Översikt
Den här workshopen är uppdelad i små övningar som bygger på varandra. Du börjar med TypeScript-grunder och slutar med testning av React-komponenter. Varje övning har en tydlig lärandepunkt och korta instruktioner.

---

## Sektion 1: TypeScript-grunder

### Övning 1: Variabler och typer
Deklarera en variabel med typen `string` och en med typen `number`.

**Instruktion:**
```ts
let namn: string = "Ada";
let ålder: number = 25;
```
**Fundera:** Vad händer om du försöker sätta `ålder = "tjugofem"`?

---

### Övning 2: Funktioner med typade argument
Skapa en funktion som tar två `number` och returnerar deras summa.

**Instruktion:**
```ts
function addera(a: number, b: number): number {
  return a + b;
}
```
**Fundera:** Vad händer om du skickar in en `string`?

---

### Övning 3: Interface
Skapa ett interface för en person med `namn` och `ålder`.

**Instruktion:**
```ts
interface Person {
  namn: string;
  ålder: number;
}
```
Skapa en variabel av typen `Person`.

---

## Sektion 2: React-komponenter med TypeScript

### Övning 4: Enkel komponent
Skapa en komponent som tar emot en prop `namn` (string) och visar den.

**Instruktion:**
```tsx
import React from "react";
type Props = { namn: string };
export function Hälsning({ namn }: Props) {
  return <p>Hej, {namn}!</p>;
}
```

---

### Övning 5: Props med interface
Skapa en knapp-komponent med props: `children` (ReactNode), `disabled` (boolean), `onClick` (funktion).

**Instruktion:**
```tsx
import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};
export function Button({ children, disabled = false, onClick }: ButtonProps) {
  return (
    <button type="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
```

---

## Sektion 3: Testning med Jest & React Testing Library

### Övning 6: Första testet
Skriv ett test som kontrollerar att knappen renderas med rätt text.

**Instruktion:**
```ts
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
test("renderar en knapp med rätt text", () => {
  render(<Button>Spara</Button>);
  expect(screen.getByRole("button", { name: /spara/i })).toBeInTheDocument();
});
```

---

### Övning 7: Disabled-state
Skriv ett test som kontrollerar att knappen är disabled när prop `disabled` är true.

---

### Övning 8: Callback
Skriv ett test som kontrollerar att `onClick` anropas när du klickar på knappen.

---

## Sektion 4: Mocking och asynkrona tester

### Övning 9: Mocka en API-funktion
Skapa en API-funktion och mocka den i ett test.

---

### Övning 10: Testa asynkron rendering
Skriv ett test som väntar på att data ska visas efter ett mockat API-anrop.

---

## Sektion 5: Integrationstester

### Övning 11: Testa ett flöde
Skriv ett integrationstest där du fyller i ett formulär och ser att rätt data skickas.

---

## Reflektion
- Vad har du lärt dig?
- Vilka delar var svårast?
- Hur kan du använda detta i ett större projekt?

---

## Tips & länkar
- [Jest docs](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Kent C. Dodds – Common mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

---

Börja med första övningen och gå vidare steg för steg. Stanna upp och fundera på frågorna – det hjälper dig att förstå och minnas bättre!
