export function randomInt(max: number) { 
  return Math.floor(Math.random() * max) 
};

export function randomBool() {
  return Math.random() < 0.5;
}
