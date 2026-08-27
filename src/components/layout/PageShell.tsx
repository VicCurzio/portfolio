import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="r-page">
      {children}
      {/* Las lineas de barrido van arriba de todo y no reciben clicks. */}
      <div className="r-crt" aria-hidden="true" />
    </div>
  );
}
