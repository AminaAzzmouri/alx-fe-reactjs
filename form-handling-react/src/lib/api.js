// Simple mock API to simulate registration POST
export function registerUser(payload) {
  return new Promise((resolve, reject) => {
    // pretend network latency
    setTimeout(() => {
      // naive check to simulate API side validation
      const { username, email, password } = payload;
      if (!username || !email || !password) {
        reject({ message: "All fields are required." });
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        reject({ message: "Email format is invalid." });
        return;
      }

      // 10% chance to simulate server failure
      if (Math.random() < 0.1) {
        reject({ message: "Server error. Please try again." });
        return;
      }

      resolve({
        id: crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        username,
        email,
      });
    }, 700);
  });
}