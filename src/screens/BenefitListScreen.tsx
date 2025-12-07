import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getBenefitsByCategory, type Benefit } from '../services/benefitsService';
import { ArrowLeft, ShieldCheck, ChevronRight } from 'lucide-react';

const BenefitListScreen: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { category, query } = location.state || {};
    const [benefits, setBenefits] = useState<Benefit[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!category) {
            navigate('/');
            return;
        }

        const fetchBenefits = async () => {
            const data = await getBenefitsByCategory(category);
            setBenefits(data);
            setLoading(false);
        };

        fetchBenefits();
    }, [category, navigate]);

    if (loading) return null; // Or a smaller loader

    return (
        <div className="fade-in">
            <button
                onClick={() => navigate('/')}
                className="btn btn-outline"
                style={{ padding: '0.5rem', marginBottom: '1rem', border: 'none', paddingLeft: 0 }}
            >
                <ArrowLeft size={18} /> Back
            </button>

            <div style={{ marginBottom: '2rem' }}>
                <span style={{
                    background: '#e0e7ff',
                    color: 'var(--primary)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    {category}
                </span>
                <h2 style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>Recommended Benefits</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Based on "{query}"
                </p>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {benefits.length > 0 ? (
                    benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="card"
                            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                            onClick={() => navigate('/plan', { state: { benefit } })}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{benefit.title}</h3>
                                <ShieldCheck size={20} color="var(--primary)" />
                            </div>
                            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                {benefit.description}
                            </p>
                            <div style={{
                                marginTop: '0.5rem',
                                paddingTop: '0.75rem',
                                borderTop: '1px solid var(--border)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}>
                                <span>{benefit.provider}</span>
                                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)' }}>
                                    View Plan <ChevronRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                        No specific benefits found for this category.
                        <br />
                        <button onClick={() => navigate('/')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            Try another search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BenefitListScreen;
