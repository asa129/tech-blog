import Link from "next/link";
import React from "react";

export default function MoreButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <button className="btn btn-ghost" data-testid="moreButton">
        もっと見る→
      </button>
    </Link>
  );
}
