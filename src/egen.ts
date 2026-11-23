// Fördjupning (frivillig): skriv din egen vänta-funktion med en promise.
//
// vanta(ms) ska returnera en promise som blir klar (resolve) efter ms millisekunder.
//
// Testa den i Console på sidan, till exempel:
//   const { vanta } = await import("/src/egen.ts");
//   vanta(500).then(() => console.log("500 ms har gått"));

export function vanta(ms: number): Promise<void> {
  // TODO
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
