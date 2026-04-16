import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="mesh-bg relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,rgba(45,212,191,0.07),transparent_55%)]" />
      {children}
    </div>
  );
}
