import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService'; // ✅ added fetchUserData

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);
    setPage(1);

    try {
      let data;

      // ✅ Use fetchUserData if only username is provided
      if (username && !location && !minRepos) {
        const user = await fetchUserData(username);
        setUsers([user]);
        setHasMore(false);
      } else {
        data = await searchUsers({ username, location, minRepos, page: 1 });
        if (data.total_count === 0) {
          setError('No users found.');
          setUsers([]);
          setHasMore(false);
        } else {
          setUsers(data.items);
          setHasMore(data.total_count > data.items.length);
        }
      }
    } catch {
      setError("Looks like we can't find users matching your criteria");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    setError('');

    try {
      const data = await searchUsers({ username, location, minRepos, page: nextPage });
      setUsers((prev) => [...prev, ...data.items]);
      setPage(nextPage);
      setHasMore(data.total_count > users.length + data.items.length);
    } catch {
      setError('Error loading more results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
          min="0"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center space-x-4 border p-4 rounded shadow">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <button
          onClick={loadMore}
          className="mt-6 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
