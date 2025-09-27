import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hi guys! My full name's Nguyen Chi Nam" },
    { name: "description", content: "Welcome to my Portfolio" },
  ];
}

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          No blogs have been added yet.
        </h1>
      </div>
    </div>
  );
}