import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hi guys! My full name's Nguyen Chi Nam" },
    { name: "description", content: "Welcome to my Portfolio" },
  ];
}

export default function Login() {
  return <div>
hi
  </div>;
}
