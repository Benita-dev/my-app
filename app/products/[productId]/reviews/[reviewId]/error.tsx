"use client";

export default function ErroBoundary ({error}: {error: Error})
    {
    return <div>{error.message}</div>;
}