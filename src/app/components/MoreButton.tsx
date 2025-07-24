import Link from "next/link";
import React from "react";

export default function MoreButton({ href }: { href: string }) {
  return (
    <Link href={href} data-testid="moreButton">
      <button className="btn btn-ghost">もっと見る→</button>
    </Link>
  );
}
