# Välkomna till Flag-Utmaningen! 🐺

Kolla in design för hur projektet ska se ut:
[Ljus-Tema](./design/Desktop-light.png)
[Mörkt-Tema](./design/Desktop-dark.png)

## Utmaningen

Din utmaning är att integrera med [REST-ländernas API](https://restcountries.com)för att hämta landsdata och visa dem som i designerna.

Dina användare ska kunna:

- Se alla länder från API:et på startsidan
- Söka efter ett land med hjälp av ett input-fält
- Filtrera länder efter region
- Klicka på ett land för att se mer detaljerad information på en separat sida
- Klicka igenom till grannländerna på detaljsidan
- Växla färgschemat mellan ljus och mörk läge.

**⚠️ OBS ⚠️: Ibland kan REST-ländernas API vara nere. Vi har lagt till en `data.json?`-fil med allt landsdata som du kan använda dig av ist för API:et. Du kan behandla data.json precis som en Endpoint. För att göra api anrop mot den kan du följa denna guide**: https://www.medium.com/frontendweb/how-to-read-local-json-file-in-react-js-564125235fc7

## Navigera genom projektet

Din uppgift är att bygga projektet enligt designerna i mappen `/design`.

I den här utmaningen hittar du mobil- och desktop-designer i ljusa och mörka färgscheman för båda sidorna.

Det finns också en fil `style-guide.md` som innehåller den information du behöver, såsom färgpalett och typsnitt.

## Uppstarts Guide 🌟

1. Titta igenom designerna för att börja planera hur du ska ta itu med projektet. Detta steg är avgörande för att hjälpa dig tänka framåt för styling och att skapa återanvändbara stilar.

2. Skapa en komponent för dina kort som flaggorna och informationen om landet ska vara satta på.

3. Använd dig av props för att stoppa in information som invånare, huvudstad osv i kort-komponenten.

4. När du hämtar datan om länderna så kan du använda dig av Fetch API eller axios i en kombination med React hooken - useEffect.

5. Skapa funktionalitet för att visa land informationen när användaren klickar på ett land från listan. Du kan använda Reacts state-funktionalitet för att hantera vilket land som är valt.

**Stort Lycka till** 🐺

# Front-end Style Guide

## Layout

Designerna skapades för följande bredder:

- Mobile: 375px
- Desktop: 1440px

## Colors

- [Mörk blå](#2B3844)
- [Mörkare Blå](#202C36)
- [Vit](#F2F2F2)

[Se färgerna här](./assets/colors.png)

### Body Copy

- Homepage Items: 14px
- Detail Page: 16px

### Fonts

- Family: [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Weights: 300, 600, 800