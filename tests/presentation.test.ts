import { describe, it, expect } from "vitest";
import { demoDeck, demoNarrativeAnalysis, demoContentReview, demoDesignTokens } from "@/lib/demo-data";

describe("deck", () => {
  it("has 8 slides", () => expect(demoDeck.slides).toHaveLength(8));
  it("starts with title slide", () => {
    expect(demoDeck.slides[0].contentType).toBe("title");
  });
  it("ends with CTA slide", () => {
    expect(demoDeck.slides[demoDeck.slides.length - 1].contentType).toBe("cta");
  });
});

describe("narrative analysis", () => {
  it("detects a narrative arc", () => {
    expect(demoNarrativeAnalysis?.hasArc).toBe(true);
  });
  it("has recommendations", () => {
    expect((demoNarrativeAnalysis?.recommendations.length ?? 0)).toBeGreaterThanOrEqual(1);
  });
});

describe("content review", () => {
  it("flags at least one issue", () => {
    expect((demoContentReview?.flags.length ?? 0)).toBeGreaterThanOrEqual(1);
  });
  it("overall score above 70", () => {
    expect(demoContentReview?.overallScore ?? 0).toBeGreaterThan(70);
  });
});

describe("design tokens", () => {
  it("has tokens across all categories", () => {
    const cats = new Set(demoDesignTokens.map(t => t.category));
    expect(cats.has("color")).toBe(true);
    expect(cats.has("typography")).toBe(true);
  });
});
