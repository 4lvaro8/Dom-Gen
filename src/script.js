let inicio = ['www.'];
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.es', '.com', '.net', '.us'];

for( let i = 0; i < inicio.length; i++) {
  for( let p = 0; p < pronoun.length; p++) {
    for( let a = 0; a < adj.length; a++) {
      for( let n = 0; n < noun.length; n++) {
        for( let e = 0; e < extension.length; e++) {
        
          // eslint-disable-next-line no-console
          console.log(`${inicio}${pronoun[p]}${adj[a]}${noun[n]}${extension[e]}`);
        }
      }
    }
  }
}