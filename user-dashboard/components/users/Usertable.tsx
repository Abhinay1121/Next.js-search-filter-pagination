import type { User } from "@/types/user";

type UserTableProps = {
  users: User[];
};

export default function UserTable({
  users,
}: UserTableProps) {
  return (
    // Allow horizontal scrolling on small screens
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse text-left">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th scope="col" className="p-3">Name</th>
            <th scope="col" className="p-3">Email</th>
            <th scope="col" className="p-3">City</th>
            <th scope="col" className="p-3">Company</th>
          </tr>
        </thead>

        <tbody>
          {/* Render one row for each user */}
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.address.city}</td>
              <td className="p-3">{user.company.name}</td>
            </tr>
          ))}

          {/* Handle empty results */}
          {users.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="p-6 text-center"
              >
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}