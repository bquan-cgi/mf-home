import { lazy, Suspense } from "react";

const MicroFrontendOneLazy = lazy(() => import("app1/App1Layout"));
//const MicroFrontendOneLazy = lazy(() => import("app1/App1Home"));

export default function MicroFrontendOnePage() {
  return (
    <div className="App">
      <p>app 1 loading</p>
      <Suspense fallback="Loading app1 ...">
        <MicroFrontendOneLazy /> 
      </Suspense>
    </div>
  );
} 
