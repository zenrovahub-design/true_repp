/**
 * Dodo Payments Configuration & Helpers
 */

const DEFAULT_TEST_LINKS: Record<string, string> = {
  starter: "https://test.checkout.dodopayments.com/buy/pdt_0Nq5zd9D6UMIN0T4kNMqV",
  professional: "https://test.checkout.dodopayments.com/buy/pdt_0Nq5ztRuOpbMqmKgNFGgJ",
  enterprise: "https://test.checkout.dodopayments.com/buy/pdt_0Nq60Aqurt1I5dhCXUOaV",
};

export const DODO_PAYMENT_LINKS: Record<string, string> = {
  starter: import.meta.env.VITE_DODO_STARTER_URL || DEFAULT_TEST_LINKS.starter,
  professional: import.meta.env.VITE_DODO_PROFESSIONAL_URL || DEFAULT_TEST_LINKS.professional,
  enterprise: import.meta.env.VITE_DODO_ENTERPRISE_URL || DEFAULT_TEST_LINKS.enterprise,
};

/**
 * Returns dynamic Dodo checkout URL with current domain redirect to /payment/success
 */
export const getDodoCheckoutUrl = (
  planId: string = "starter",
  customerEmail?: string
): string => {
  const normalizedPlan = (planId || "starter").toLowerCase();
  const baseCheckoutUrl =
    DODO_PAYMENT_LINKS[normalizedPlan] ||
    DEFAULT_TEST_LINKS[normalizedPlan] ||
    DEFAULT_TEST_LINKS.starter;

  try {
    const url = new URL(baseCheckoutUrl);
    url.searchParams.set("quantity", "1");

    // Dynamic redirect URL based on current domain (localhost, vercel, or custom domain)
    const origin =
      typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : "https://truerepp.com";

    const returnUrl = `${origin}/payment/success?plan=${normalizedPlan}`;
    url.searchParams.set("redirect_url", returnUrl);

    if (customerEmail) {
      url.searchParams.set("email", customerEmail);
    }

    return url.toString();
  } catch (err) {
    console.error("Error formatting Dodo checkout URL:", err);
    return baseCheckoutUrl || DEFAULT_TEST_LINKS.starter;
  }
};

