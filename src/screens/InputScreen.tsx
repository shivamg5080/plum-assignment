import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const InputScreen: React.FC = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        navigate('/processing', { state: { query: input } });
    };

    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
                How can we help you today?
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Describe your health concern, and our AI will find the best benefits for you.
            </p>

            <form onSubmit={handleSubmit}>
                <textarea
                    className="input-area"
                    placeholder="e.g., I have a severe toothache and need to see a dentist..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!input.trim()}
                        style={{ opacity: input.trim() ? 1 : 0.7 }}
                    >
                        <Sparkles size={18} />
                        Find Benefits
                    </button>
                </div>
            </form>

            <div style={{ marginTop: '3rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Try asking about:
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Tooth pain', 'Need new glasses', 'Feeling stressed', 'High fever'].map((suggestion) => (
                        <button
                            key={suggestion}
                            type="button"
                            className="btn btn-outline"
                            style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                            onClick={() => setInput(suggestion)}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InputScreen;
