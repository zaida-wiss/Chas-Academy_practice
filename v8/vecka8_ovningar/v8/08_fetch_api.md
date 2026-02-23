# Övning 1: Fetch API och felhantering

## Mål
Lär dig hämta data från ett API med Fetch, hantera loading/error-tillstånd och skapa en robust grund för serverdata.

## Uppgift
1. Skapa en React-komponent som hämtar en lista (t.ex. produkter) från ett API med Fetch.
2. Visa loading/error/data-tillstånd i UI.
3. Implementera en custom hook (`useFetch`) som kapslar logiken.
4. Lägg till felhantering: visa ett felmeddelande om något går fel.

**Exempel på produkt-API:** https://fakestoreapi.com/products

## Extra
- Lägg till en "Ladda om"-knapp som triggar en ny fetch.
- Testa att hantera olika HTTP-status och tom body.

---

# Övning 2: Axios och API-lager

## Mål
Skapa ett API-lager med Axios och hantera autentisering och fel.

## Uppgift
1. Skapa en Axios-instans med baseURL och Accept-header.
2. Lägg till en interceptor som lägger på Authorization-token från localStorage.
3. Skriv API-funktioner för GET och POST (t.ex. `getProducts`, `createProduct`).
4. Använd API-funktionerna i en komponent och visa loading/error/data.

## Extra
- Implementera en funktion som "narrowar" Axios errors till ett begripligt felmeddelande.

---

# Övning 3: CRUD i React

## Mål
Bygg en sida som kan skapa, läsa, uppdatera och ta bort data (CRUD).

## Uppgift
1. Skapa en komponent som visar en lista med produkter.
2. Lägg till formulär för att skapa nya produkter.
3. Lägg till funktion för att uppdatera och ta bort produkter.
4. Hantera loading/error-tillstånd.

## Extra
- Implementera optimistiska uppdateringar för toggle och create.
- Visa pending-indikator för nya todos.

---

# Övning 4: Caching och custom hooks

## Mål
Förstå och implementera enkel caching av serverdata.

## Uppgift
1. Skapa en in-memory cache med Map.
2. Bygg en custom hook (`useFetchCached`) som använder cachen.
3. Visa cached data direkt och refetcha i bakgrunden.

## Extra
- Lägg till funktion för att invalidiera cache vid mutation.
- Diskutera när data är "för gammal" och hur du kan hantera det.

---

# Övning 5: Routing + data

## Mål
Koppla ihop routing och datahämtning.

## Uppgift
1. Skapa en detaljsida som laddar data baserat på URL-parametrar (t.ex. `/products/:id`).
2. Hantera loading/error/data-tillstånd.
3. Visa produktens information i UI.

## Extra
- Lägg till skyddade routes som kräver auth-token.
- Diskutera hur du kan mocka API-funktioner för testning.

---

# Tips
- Använd länkarna i studiematerialet för att fördjupa dig.
- Testa att bygga egna varianter av hooks och API-lager.
- Reflektera över skillnaden mellan klientstate och serverdata.
