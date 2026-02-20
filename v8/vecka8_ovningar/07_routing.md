# Vecka 12 – Routing, Layout & Typning

## Övning 1: Routing med React Router

**Teori:**
- React Router används för att skapa navigering mellan sidor i en SPA.
- Routes och Route bestämmer vilka komponenter som visas på olika paths.
- NavLink används för att skapa länkar med aktiv markering.

**Uppgift:**
Skapa en app med tre sidor: Home, About och Contact. Varje sida ska ha en rubrik och en kort beskrivning.

- Skapa tre komponenter: HomePage.tsx, AboutPage.tsx, ContactPage.tsx
- Skapa en AppLayout.tsx med en horisontell navbar (NavLink)
- Koppla ihop allt i App.tsx med Routes och Route
- Lägg till en 404-sida

---

## Övning 2: Layout-komponenter och children

**Teori:**
- Layout-komponenter används för att skapa gemensam struktur (t.ex. navbar, footer) runt alla sidor.
- children-propen gör att du kan "wrappa" andra komponenter.

**Uppgift:**
- Lägg till en footer i AppLayout.tsx med texten "Vecka 12 – Routing"
- Se till att children renderas i main-delen av layouten

---

## Övning 3: Typning med TypeScript i React

**Teori:**
- TypeScript ger typkontroll och bättre utvecklarstöd.
- Typa props och children med t.ex. React.ReactNode.

**Uppgift:**
- Skapa en types.ts och typdeklarera props för AppLayout
- Använd typen i AppLayout.tsx

---

## Övning 4: Dynamiska routes och params

**Teori:**
- Dynamiska routes används för att visa olika innehåll beroende på t.ex. id eller slug.
- useParams hook används för att läsa ut parametervärden.

**Uppgift:**
- Skapa en ny sida: ProfilePage.tsx
- Lägg till en route: /profile/:username
- Visa username på sidan med useParams

---

## Övning 5: Routing och PDF-innehåll

**Teori:**
- Routing kan användas för att visa olika resurser, t.ex. PDF-dokument.

**Uppgift:**
- Skapa en sida som heter PdfPage.tsx
- Lägg till en route: /pdf
- Visa en länk eller embedded PDF (t.ex. React- Routing.pdf) på sidan

---

## Tips
- Använd webbläsarens inspektör för att se aktiv länk
- Testa att navigera mellan sidor och se att layouten är gemensam
- Lägg till typning på props där det behövs

---

Lycka till! Fråga om du vill ha kodstarter eller lösningar till någon övning.
