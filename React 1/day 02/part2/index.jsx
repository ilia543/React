import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Page() {
    return <h1>hi</h1>;
}

root.render(
    <Page />
);