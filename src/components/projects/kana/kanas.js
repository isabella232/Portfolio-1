const A = ["A", "I", "U", "E", "O"];
const K = ["KA", "KI", "KU", "KE", "KO"];
const S = ["SA", "SHI", "SU", "SE", "SO"];
const T = ["TA", "CHI", "TSU", "TE", "TO"];
const N = ["NA", "NI", "NU", "NE", "NO"];
const H = ["HA", "HI", "HU", "HE", "HO"];
const M = ["MA", "MI", "MU", "ME", "MO"];
const R = ["RA", "RI", "RU", "RE", "RO"];
const Y = ["YA", "YU", "YO"];
const W = ["WA", "WO"];
const X = ["N"];
const Full = A.concat(K, S, T, N, H, M, R, Y, W, X);
const Kanas = {
  A: A,
  K: K,
  S: S,
  T: T,
  N: N,
  H: H,
  M: M,
  R: R,
  Y: Y,
  W: W,
  X: X,
  Full: Full,
};
export default Kanas;
