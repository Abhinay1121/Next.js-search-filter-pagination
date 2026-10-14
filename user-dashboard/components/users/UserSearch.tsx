// Define the props accepted by this component
type UserSearchProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function UserSearch({
  search,
  onSearchChange,
}: UserSearchProps) {
  return (
    <input
      type="search"
      aria-label="Search users"
      placeholder="Search by name or email"

      // Controlled input value
      value={search}

      // Notify parent when input changes
      onChange={(e) => onSearchChange(e.target.value)}

      // Tailwind styling
      className="w-full rounded-lg border p-3 sm:w-72 outline-none"
    />
  );
}