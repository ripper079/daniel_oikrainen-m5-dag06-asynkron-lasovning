# Förutsägelser: asynkron kod

Regler:

1. Titta på snutten i `snuttar/sNN.js` (eller på sidan `index.html`). **Kör den inte än.**
2. Skriv din gissning i tabellen: utskrifterna i den ordning du tror att de kommer, separerade med `|`.
3. Kör snutten (knappen _Kör_). Skriv vad som faktiskt skrevs ut.
4. Hade du rätt? Skriv en regel med egna ord för varje snutt du gissade fel på.

| Snutt | Min gissning (i ordning)               | Faktisk utskrift                       | Rätt?  | Min regel om jag hade fel     |
| ----- | -------------------------------------- | -------------------------------------- | ------ | ----------------------------- |
| 1     | 1 - 2 - 3                              | 1 - 2 - 3                              | YES 😁 |
| 2     | a - c - b                              | a - c - b                              | YES 😁 |
| 3     | start - noll - kort - lång             | start - noll - kort - lång             | YES 😁 |
| 4     | inuti promise - efter - then           | inuti promise - efter - then           | YES 😁 |
| 5     | sync - promise - timeout               | sync - promise - timeout               | YES 😁 | microtasks kö före macrotask  |
| 6     | först - 6 - 7                          | först? - 6 - 7                         | YES 😁 |                               |
| 7     | fel: slut mjölk - städar               | fel: slut på mjölk - städar            | YES 😁 |                               |
| 8     | beställer - sätter mig - bulle - kaffe | beställer - sätter mig - bulle - kaffe | YES 😁 |                               |
| 9     | väntar på båda - kaffe - bulle         | väntar på båda - ["kaffe" , "bulle"]   | NJA    | Ordning bevaras för .all(MDN) |
| 10    | 1-6 - 3 -2 - 4 -5                      | 1-6 - 3 -2 - 4 -5                      | YES 😁 |                               |
| 11    | c - ab                                 | c - ab                                 | YES 😁 |                               |

## Tre meningar med egna ord

Kollade upp innan testarna utfördes att
Event loopen tömmer alla microtasks efter varje körd task, innan den går vidare till nästa macrotask
och utgick från detta!
DVS

- Promise.resolve().then(...) → microtask-kön
- setTimeout(..., 0) → macrotask-kön (task-kön)

1. Synkroniserad kod går först
2. Sedan microtask-kön dvs alla promise har företräde
3. Sedan mactrotask-kön (setTimeout)
4. Sedan chainade promise object
   Gäller hålla tungan rätt i mun här!

5. JavaScript väntar inte på `setTimeout`, utan ...
6. En promise har tre tillstånd: ...
7. `then` körs alltid ...
