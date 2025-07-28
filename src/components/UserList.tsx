import { useEffect, useState } from "react";

interface Info {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserList = () => {
  const [users, setUsers] = useState<Info[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load users.");
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  if (loading) return <p className="text-xl text-center">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">User List</h2>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full border border-gray-300 text-sm text-left font-mono">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className={
                    user.id % 2 === 0
                      ? "bg-gray-100 text-center"
                      : "text-center"
                  }
                >
                  <td className="p-3 border">{user.id}</td>
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.username}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">{user.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
