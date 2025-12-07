import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { classifyNeed } from '../services/aiService';
import { Loader2 } from 'lucide-react';

const ProcessingScreen: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = location.state?.query;
    const [status, setStatus] = useState('Analyzing your request...');

    useEffect(() => {
        if (!query) {
            navigate('/');
            return;
        }

        const processRequest = async () => {
            // Simulate steps for better UX
            setTimeout(() => setStatus('Identifying category...'), 600);
            setTimeout(() => setStatus('Matching benefits...'), 1200);

            try {
                const category = await classifyNeed(query);
                navigate('/benefits', { state: { category, query } });
            } catch (error) {
                console.error("Error classifying:", error);
                // Handle error gracefully (could navigate back or show error)
                navigate('/');
            }
        };

        processRequest();
    }, [query, navigate]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            textAlign: 'center'
        }} className="fade-in">
            <div style={{
                color: 'var(--primary)',
                marginBottom: '1.5rem',
                animation: 'spin 2s linear infinite'
            }}>
                <Loader2 size={48} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {status}
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>
                Powered by Plum AI
            </p>
            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default ProcessingScreen;
