// If/else statements (outside JSX)
function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <div>Welcome back!</div>;
    }
    return <div>Please log in.</div>;
}

// Ternary operator (inside JSX)
function ToggleButton({ isActive }) {
    return (
        <button>
            {isActive ? 'Active' : 'Inactive'}
        </button>
    );
}

// Logical && operator (inside JSX, for rendering nothing when condition is false)
function AdminPanel({ isAdmin }) {
    return (
        <div>
            <h1>User Dashboard</h1>
            {isAdmin && <button>Manage Users</button>}
        </div>
    );
}