import createMiddleware from "next-intl/middleware";

const locales = ["de", "en"];
const defaultLocale = "de";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
