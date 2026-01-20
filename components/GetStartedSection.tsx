/* Get started / pull your team in section */

export function GetStartedSection() {
  return (
    <section
      id="get-started"
      aria-label="Get started"
      className="section-below-fold w-full flex justify-center px-4 py-20 md:py-28 bg-black shadow-lg shadow-black/20"
    >
      <div
        className="relative flex w-full max-w-[1520px] flex-col items-center gap-5 rounded-[2.5rem] md:rounded-[3rem] px-6 py-16 md:px-12 md:py-24"
        data-reveal
        style={
          {
            background:
              "radial-gradient(59% 60% at 50% 0%,rgb(115, 176, 131) 0%,rgb(0, 0, 0) 100%)",
            "--reveal-delay": "120ms",
          } as React.CSSProperties
        }
      >
        {/* Glow effect as soft blob, not border line */}
        <div className="pointer-events-none absolute inset-0  flex items-center justify-center">
          <div className="h-[55%] w-[55%] rounded-full bg-emerald-400/18 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex max-w-[803px] flex-col items-center gap-5 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Get started with PanelManage
          </h2>
          <p className="text-sm md:text-base text-white/80">
            Your team’s next big win starts here. Try PanelManage and experience
            simpler, smarter management system software built for growth.
          </p>

          <div className="mt-4">
            <a
              href="#pricing"
              className="inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-medium text-white shadow-lg shadow-black/20 transition hover:brightness-110"
              style={{
                background:
                  "linear-gradient(180deg,rgb(0, 0, 0) 0%, #262626 100%)",
              }}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
