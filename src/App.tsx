import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { MakeApayment } from './components/make-apayment/make-apayment';
import { PayDetails } from './components/pay-details/pay-details';
import { ReviewandVerify } from './components/reviewand-verify/reviewand-verify';
import { ReviewDetails } from './components/review-details/review-details';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<MakeApayment />} />
          <Route path="/paydetails" element={<PayDetails />} />
          <Route path="/reviewandverify" element={<ReviewandVerify />} />
          <Route path="/reviewdetails" element={<ReviewDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
