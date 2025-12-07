import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateActionPlan } from '../services/aiService';
import type { Benefit } from '../services/benefitsService';
import { ArrowLeft, CheckCircle2, Loader2, Download } from 'lucide-react';

const ActionPlanScreen: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const benefit = location.state?.benefit as Benefit;
    const [plan, setPlan] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!benefit) {
            navigate('/');
            return;
        }

        const createPlan = async () => {
            const steps = await generateActionPlan(benefit);
            setPlan(steps);
            setLoading(false);
        };

        createPlan();
    }, [benefit, navigate]);

    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
                <Loader2 size={32} className="spin" style={{ color: 'var(--primary)', animation: 'spin 1s linear infinite' }} />
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>Generating your action plan...</p>
                <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <button
                onClick={() => navigate(-1)}
                className="btn btn-outline"
                style={{ padding: '0.5rem', marginBottom: '1rem', border: 'none', paddingLeft: 0 }}
            >
                <ArrowLeft size={18} /> Back
            </button>

            <div className="card" style={{ marginBottom: '2rem', background: '#f8fafc', border: 'none' }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{benefit.title}</h2>
                <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)' }}>{benefit.provider}</p>
            </div>

            <h3 style={{ marginBottom: '1.5rem' }}>Your Action Plan</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {plan.map((step, index) => (
                    <div key={index} style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{
                            minWidth: '2rem',
                            height: '2rem',
                            background: 'var(--primary)',
                            color: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        }}>
                            {index + 1}
                        </div>
                        <div style={{ paddingTop: '0.25rem' }}>
                            <p style={{ margin: 0, lineHeight: '1.5' }}>{step}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '8px', display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                    <CheckCircle2 size={20} color="#059669" style={{ marginTop: '2px' }} />
                    <div>
                        <h4 style={{ margin: '0 0 0.25rem', color: '#065f46' }}>You're covered!</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#047857' }}>
                            {benefit.coverage}
                        </p>
                    </div>
                </div>
            </div>

            <button className="btn btn-outline" style={{ width: '100%', marginTop: '1.5rem' }}>
                <Download size={18} /> Save Plan
            </button>
        </div>
    );
};

export default ActionPlanScreen;
