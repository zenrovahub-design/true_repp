import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Home,
  Check,
} from "lucide-react";
import dashboardBg from "@/assets/bg.png";
import SEO from "@/components/SEO";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") || "starter";
  const [planName, setPlanName] = useState("Starter Plan");
  const [price, setPrice] = useState("$25");

  useEffect(() => {
    const p = planParam.toLowerCase();
    if (p === "professional") {
      setPlanName("Professional Plan");
      setPrice("$40");
    } else if (p === "enterprise") {
      setPlanName("Enterprise Plan");
      setPrice("$90");
    } else {
      setPlanName("Starter Plan");
      setPrice("$25");
    }
  }, [planParam]);

  return (
    <>
      <SEO title="Payment Successful | TrueRepp" noindex />
      <div
        className="relative flex min-h-screen items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat px-4 py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.55), rgba(248, 250, 252, 0.72)), url(${dashboardBg})`,
      }}
    >
      <div className="w-full max-w-lg">
        {/* Success Card */}
        <div className="overflow-hidden rounded-3xl border border-emerald-200/90 bg-white/95 p-6 sm:p-8 shadow-xl backdrop-blur-md">
          {/* Top Status Header */}
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 shadow-sm text-emerald-600 animate-bounce-short">
              <CheckCircle2 className="h-9 w-9 text-emerald-500" />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2 shadow-2xs">
              <Sparkles className="h-3 w-3 text-emerald-600" />
              Payment Confirmed
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Welcome to True Repp!
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              Your test subscription was completed successfully. Your account is ready to start collecting 5-star Google reviews.
            </p>
          </div>

          {/* Subscription Summary Box */}
          <div className="mt-6 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-teal-700">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Selected Tier</p>
                  <p className="text-sm font-bold text-slate-900">{planName}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-base font-black text-slate-900">{price}</span>
                <span className="text-[11px] text-slate-500 block">/ month</span>
              </div>
            </div>

            <div className="pt-3 space-y-2 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span>Billing Status</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Active (Test Mode)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Next Renewal</span>
                <span className="font-medium text-slate-800">30 days from today</span>
              </div>
            </div>
          </div>

          {/* Quick Perks Checklist */}
          <div className="mt-5 space-y-2 text-xs text-slate-700 px-1">
            <div className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>Smart QR codes ready to customize & print</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>Google review auto-routing & private complaint filter enabled</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span>Full dashboard & review analytics unlocked</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            <Link to="/dashboard" className="block w-full">
              <Button
                size="lg"
                className="w-full rounded-xl bg-slate-900 text-white hover:bg-black font-bold text-sm shadow-md transition-all hover:scale-[1.01]"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link to="/" className="block w-full text-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                <Home className="mr-1.5 h-3.5 w-3.5" />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>

        {/* Security Reassurance Footer */}
        <div className="mt-4 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-teal-600" />
          <span>Payment verified securely via Dodo Payments</span>
        </div>
      </div>
    </div>
    </>
  );
}
