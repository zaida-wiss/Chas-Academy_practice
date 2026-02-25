# Instruktioner för projektet

1. Bygg en "Projektvy" i stil med ProFlow.

Du ska skapa följande:

1.
Definiera en TypeScript-typ Project med fälten: id (string), name (string), status
("active" | "paused" | "completed"), och hoursLogged (number).

2.
Skapa en hårdkodad array med minst 5 projekt som har blandade statusar.

3.
Skapa ProjectsPage som visar alla projekt som en lista. Varje projekt ska vara en
Link som leder till /projects/:projectId.

4.
Skapa ProjectDetailsPage som använder useParams för att hämta projektets
ID, hittar projektet i arrayen, och visar all information. Hantera fallet att projektet
inte hittas (visa ett felmeddelande och en länk tillbaka).

5.
Lägg till filtrering via useSearchParams: tre knappar som filtrerar på status (Aktiva,
Pausade, Avklarade) och en knapp "Alla" som tar bort filtret. URL:en ska
uppdateras till t.ex. /projects?status=active.

6.
Lägg till routes för ProjectsPage och ProjectDetailsPage i din App.tsx, samt en länk
i navigationen.

💡 Ledtråd: Kombinera det du lärde dig om generatePath, useParams och
useSearchParams i code-along:en. Tänk på att filtrera arrayen baserat på
searchParams.get("status").
