import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InputScreen from './screens/InputScreen';
import ProcessingScreen from './screens/ProcessingScreen';
import BenefitListScreen from './screens/BenefitListScreen';
import ActionPlanScreen from './screens/ActionPlanScreen';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<InputScreen />} />
          <Route path="/processing" element={<ProcessingScreen />} />
          <Route path="/benefits" element={<BenefitListScreen />} />
          <Route path="/plan" element={<ActionPlanScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
