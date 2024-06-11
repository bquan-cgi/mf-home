import { lazy, Suspense } from "react";

const MicroFrontendOneLazy = lazy(() => import("app1/App1Layout"));

export default function MicroFrontendOnePage() {
  return (
    <div className="App">
      <Suspense fallback="Loading app1 ...">
        <MicroFrontendOneLazy /> 
      </Suspense>
    </div>
  );
} 
