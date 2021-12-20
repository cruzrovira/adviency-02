import {
  e as c,
  r as l,
  j as r,
  F as d,
  a as u,
  V as f,
  H as m,
  U as g,
  L as p,
  R as h,
  b as y,
  C as b,
} from "./vendor.59480588.js";
const v = function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const a of t.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
};
v();
var x = "./assets/bg.6808d548.jpg",
  L = c({
    styles: {
      global: {
        body: {
          bg: `url(${x})`,
          bgSize: "cover",
          bgRepeat: "no-repeat",
          fontSize: "16px",
        },
      },
    },
  });
const R = [
  { id: 1, name: "Medias " },
  { id: 2, name: "caramelos" },
  { id: 3, name: "Vitel Tone" },
];
function S() {
  const [s, o] = l.exports.useState(void 0);
  return (
    l.exports.useEffect(() => {
      o(R);
    }, []),
    r(d, {
      alignItems: "center",
      justifyContent: "center",
      minH: "100vh",
      w: "100%",
      children: u(f, {
        alignItems: "flex-start",
        bg: "white",
        p: 4,
        shadow: "md",
        w: "40%",
        children: [
          r(m, {
            fontFamily: "'Mountains of Christmas', cursive;",
            textAlign: "center",
            w: "100%",
            children: "Regalos:",
          }),
          r(g, {
            listStyleType: "none",
            children: s
              ? s.map(({ id: i, name: n }) => r(p, { children: n }, i))
              : "",
          }),
        ],
      }),
    })
  );
}
h.render(
  r(y.StrictMode, { children: r(b, { theme: L, children: r(S, {}) }) }),
  document.getElementById("root")
);
