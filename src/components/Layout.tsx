import * as React from 'react';
import { HeartPulse } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container">
            <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '8px', color: 'white', display: 'flex' }}>
                    <HeartPulse size={24} />
                </div>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Plum Benefits AI</h1>
            </header>
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <footer style={{ marginTop: 'auto', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <p>© 2024 Plum Benefits. Powered by AI.</p>
            </footer>
        </div>
    );
};

export default Layout;
