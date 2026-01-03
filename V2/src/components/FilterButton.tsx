interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full border transition-all ${
        active
          ? 'bg-primary text-dark border-primary font-semibold'
          : 'bg-transparent text-white border-primary/30 hover:border-primary/60'
      }`}
    >
      {label}
    </button>
  );
}
