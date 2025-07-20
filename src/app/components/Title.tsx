import Link from "next/link";
import React from "react";

export default function Title() {
  return (
    <>
      <Link href="/">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="btn btn-ghost text-xl" data-testid="title">
            My Tech Blog
          </div>
        </div>
      </Link>
    </>
  );
}
