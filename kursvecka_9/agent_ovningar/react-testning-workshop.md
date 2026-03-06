# Workshop: Testning i React med Jest och React Testing Library

## 1. Teori – Grunder och principer

### Varför testar vi?
- Fånga buggar tidigt och undvika regressioner.
- Tryggare kodbas och snabbare feedback.
- Tester är ett “kvalitetsbälte”, inte en “kvalitetsmaskin”.

### Testtyper
- **Enhetstester:** Testar komponenter och logik isolerat.
- **Integrationstester:** Testar flöden och samspel mellan flera delar.
- **Beteendetester:** Fokuserar på vad användaren ser och gör, inte implementation.

### Verktyg
- **Jest:** Test-runner och assertions.
- **React Testing Library (RTL):** Renderar komponenter och hittar element som en användare.
- **@testing-library/jest-dom:** Extra matchers för DOM.

### Viktiga principer
- Testa via roller, labels och text – inte via CSS-klasser eller interna variabler.
- Mocka API och Context för stabila tester.
- Återställ mocks mellan tester.
- Strukturera tester: Arrange – Act – Assert.

---

## 2. Praktik – Hands-on övningar

### Övning 1: Sätt upp testmiljön
1. Installera nödvändiga paket:
   ```bash
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```
2. Skapa en setup-fil:
   ```ts
   // src/test/setupTests.ts
   import "@testing-library/jest-dom";
   ```

### Övning 2: Skriv ett komponenttest
1. Skapa en enkel knappkomponent:
   ```tsx
   // Button.tsx
   export function Button({ children, disabled = false, onClick }) {
     return (
       <button type="button" disabled={disabled} onClick={onClick}>
         {children}
       </button>
     );
   }
   ```
2. Skriv tester:
   ```tsx
   // Button.test.tsx
   import { render, screen } from "@testing-library/react";
   import userEvent from "@testing-library/user-event";
   import { Button } from "./Button";

   test("renderar en knapp med rätt text", () => {
     render(<Button>Spara</Button>);
     expect(screen.getByRole("button", { name: /spara/i })).toBeInTheDocument();
   });

   test("är disabled när disabled=true", () => {
     render(<Button disabled>Spara</Button>);
     expect(screen.getByRole("button", { name: /spara/i })).toBeDisabled();
   });

   test("anropar onClick när vi klickar", async () => {
     const user = userEvent.setup();
     const onClick = jest.fn();
     render(<Button onClick={onClick}>Spara</Button>);
     await user.click(screen.getByRole("button", { name: /spara/i }));
     expect(onClick).toHaveBeenCalledTimes(1);
   });
   ```

### Övning 3: Testa ett formulär med validering
1. Skapa en login-komponent med validering.
2. Skriv tester som kontrollerar felmeddelanden och korrekt submit.

### Övning 4: Mocka API-anrop
1. Skapa en komponent som hämtar data från ett API.
2. Mocka API-funktionen i testet och kontrollera loading, success och error.

### Övning 5: Integrationstest med routing
1. Skapa en detaljvy som laddar data via URL-param.
2. Skriv ett test som renderar med MemoryRouter och mockar API.

### Övning 6: Mocka Context
1. Skapa en komponent som använder en useAuth-hook.
2. Mocka hooken i testet och kontrollera olika UI-lägen.

---

## 3. Reflektion och kodgranskning

- Läs igenom dina tester. Fokuserar de på beteende?
- Är testerna lätta att förstå och underhålla?
- Kan du refaktorera komponenten utan att testerna går sönder?
- Använder du semantisk HTML och tillgängliga element?

---

## 4. Fördjupning

- Läs vidare på [Jest docs](https://jestjs.io/docs/getting-started), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), och [Kent C. Dodds blogg](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library).
- Testa att mocka API med [MSW](https://mswjs.io/docs/).

---

Vill du ha kodexempel, färdiga filer eller hjälp att sätta upp ett projekt? Säg till så fixar jag det!
