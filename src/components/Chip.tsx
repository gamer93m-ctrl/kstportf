export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-line rounded-full border bg-white px-3.5 py-1.5 text-xs font-medium whitespace-nowrap">
      {children}
    </span>
  )
}

export function MetricChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-line rounded-full border bg-white px-3 py-1 text-xs font-semibold whitespace-nowrap">
      {children}
    </span>
  )
}
