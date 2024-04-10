import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <p>not found page</p>
        <Link
          href=" /">
          Go back home
        </Link>
    </main>
  );
}
