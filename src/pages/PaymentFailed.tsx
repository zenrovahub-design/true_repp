import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  XCircle,
  RotateCcw,
  Home,
  HelpCircle,
  ShieldAlert,
} from "lucide-react";
import dashboardBg from "@/assets/bg.png";
import { getDodoCheckoutUrl } from "@/config/dodoPayments";
import SEO from "@/components/SEO";

export default function PaymentFailed() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") || "starter";

  const retryCheckoutUrl = getDodoCheckoutUrl(planParam);

  return (
    <>
      <SEO title="Payment Incomplete | TrueRepp" noindex />
      <div
        className="relative flex min-h-screen items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat px-4 py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.55), rgba(248, 250, 252, 0.72)), url(${dashboardBg})`,
      }}
    >
      <div className="w-full max-w-lg">
        {/* Failed Card */}
        <div className="overflow-hidden rounded-3xl border border-rose-200/90 bg-white/95 p-6 sm:p-8 shadow-xl backdrop-blur-md">
          {/* Top Status Header */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 border border-rose-200 shadow-sm text-rose-600">
              <XCircle className="h-9 w-9 text-rose-500" />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3 py-0.5 text-[11px] font-bold text-rose-800 uppercase tracking-wider mb-2 shadow-2xs">
              <ShieldAlert className="h-3 w-3 text-rose-600" />
              Transaction Incomplete
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Payment Not Completed
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              The checkout was canceled or the payment could not be processed. Don't worry, your card was not charged.
            </p>
          </div>

          {/* Help & Common Reasons */}
          <div className="mt-6 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 text-xs text-slate-600 space-y-2.5">
            <p className="font-bold text-slate-800">Possible reasons:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600">
              <li>The checkout session was canceled or timed out</li>
              <li>Test card details were entered incorrectly</li>
              <li>Bank or test gateway verification was interrupted</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <a href={retryCheckoutUrl} className="block w-full">
              <Button
                size="lg"
                className="w-full rounded-xl bg-teal-600 text-white hover:bg-teal-700 font-bold text-sm shadow-md transition-all hover:scale-[1.01]"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Try Checkout Again
              </Button>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link to="/#pricing" className="block w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl text-xs font-semibold border-slate-200"
                >
                  View All Plans
                </Button>
              </Link>

              <Link to="/" className="block w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl text-xs font-semibold border-slate-200"
                >
                  <Home className="mr-1.5 h-3.5 w-3.5" />
                  Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Need Help Footer */}
        <div className="mt-4 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <HelpCircle className="h-3.5 w-3.5 text-slate-400" />
          <span>Need assistance? Contact our team at support@truerepp.com</span>
        </div>
      </div>
    </div>
    </>
  );
}
