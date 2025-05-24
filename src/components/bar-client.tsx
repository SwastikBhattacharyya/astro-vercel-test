import { createSignal } from "solid-js";

export default function BarClient() {
    const [date] = createSignal(new Date().toLocaleString());

    return <p>{date()}</p>;
}