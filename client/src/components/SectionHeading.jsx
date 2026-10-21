import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  onAction,
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            {eyebrow}
          </span>
        )}

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            {description}
          </p>
        )}
      </div>

      {action && (
        <button
          type="button"
          className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
          onClick={onAction}
        >
          {action}
          <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
            ↗
          </span>
        </button>
      )}
    </div>
  );
}