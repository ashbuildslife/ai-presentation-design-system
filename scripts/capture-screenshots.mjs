import { chromium } from "playwright";
const BASE = process.env.SCREENSHOT_URL ?? "http://127.0.0.1:3112";
const OUT = "docs/screenshots";
async function capture(label, scrollY = 0, fullPage = false) {
  const b = await chromium.launch({ headless: true });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(BASE, { waitUntil: "networkidle" });
  if (scrollY > 0) { await p.evaluate(y => window.scrollTo(0, y), scrollY); await p.waitForTimeout(500); }
  await p.screenshot({ path: `${OUT}/${label}.png`, fullPage });
  console.log(`Captured: ${label}.png`);
  await b.close();
}
async function main() {
  await capture("00-full-page", 0, true);
  await capture("01-dashboard-hero");
  await capture("02-slide-previews", 700);
  await capture("03-narrative-analysis", 1400);
  await capture("04-content-review", 1400);
  await capture("05-design-tokens", 2000);
}
main().catch(e => { console.error(e); process.exit(1); });
