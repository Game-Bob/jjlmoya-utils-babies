import { describe, expect, it } from "vitest";
import { getCacheControl, LONG_LIVED_ASSET_CACHE, SITEMAP_CACHE } from "../worker";

describe("MFE cache contract", () => {
    it("caches versioned assets and manifests for one year", () => {
        expect(getCacheControl("/_utilities/babies/images/tool.webp")).toBe(LONG_LIVED_ASSET_CACHE);
        expect(getCacheControl("/_utilities/babies/styles/tool.css")).toBe(LONG_LIVED_ASSET_CACHE);
        expect(getCacheControl("/en/utilities/categories/babies/tool/manifest.json")).toBe(LONG_LIVED_ASSET_CACHE);
    });

    it("keeps sitemaps refreshable", () => {
        expect(getCacheControl("/_utilities/en/babies/sitemap.xml")).toBe(SITEMAP_CACHE);
    });
});
