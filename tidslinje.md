# Tidslinje: rita vad som händer

Välj snutt 5 och snutt 10. Fyll i tabellerna steg för steg. Skriv vad som ligger i varje del **efter** varje steg.

Förklaring:

- **Anropsstacken** är den kod som körs just nu.
- **Microtask-kön** är promise-callbacks som väntar på att få köra.
- **Task-kön** är timer-callbacks och liknande som väntar på att få köra.
- Regel: när stacken är tom körs först ALLA microtasks, sedan EN task, sedan tomma microtasks igen, och så vidare.

## Snutt 5

| Steg | Vad händer                          | Stacken | Microtask-kön | Task-kön | Utskrift hittills       |
| ---- | ----------------------------------- | ------- | ------------- | -------- | ----------------------- |
| 1    | setTimeout anropas                  |         |               | X        | Inget                   |
| 2    | Promise.resolve().then(...) anropas |         | X             |          | Inget                   |
| 3    | console.log("sync")                 | X       |               |          | sync                    |
| 4    | Stacken tom: vad körs först?        |         | X             |          | sync, promise           |
| 5    | Nästa                               |         |               | X        | sync, promise , timeout |

## Snutt 10

| Steg | Vad händer                       | Stacken | Microtask-kön | Task-kön | Utskrift hittills |
| ---- | -------------------------------- | ------- | ------------- | -------- | ----------------- |
| 1    | console.log("1")                 | X       |               |          | 1                 |
| 2    | första setTimeout                |         |               | x        | 1                 |
| 3    | Promise.resolve().then(3)        |         | x             |          | 1                 |
| 4    | andra setTimeout                 |         |               | x        | 1                 |
| 5    | console.log("6")                 | x       |               |          | 1,6               |
| 6    | stacken tom, microtask-kön först |         | x             |          | 1,6,3             |
| 7    | första tasken                    |         | x             |          | 1,6,3,2           |
| 8    | andra tasken                     |         |               | x        | 1,6,3,2,4         |
| 9    | microtask 5                      |         |               | x        | 1,6,3,2,4,5       |

## Min förklaring i en mening

Utgå alltid att stacken töms först. Synkron kod ligger här.
Sedan töms microtasks-kön (denna töms helt på en gång)
och sist macrotaskkön(taskkön som du kallar den, töms en task åt gången).

Observera att det är datastruktruen queue/kö som används här.

Varför kommer en promise-callback före en timer med 0 ms?
