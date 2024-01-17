import './styles.css';
import Header from '../components/Header';
import ReportConsumption from '../components/ReportConsumption';
import SupplierCompanies from '../components/SupplierCompanies';
import { ConsumptionProvider } from '../contexts/ConsumptionContext';

function Main() {
  return (
    <ConsumptionProvider>
      <div className="container">
        <Header />
        <main className='container-main'>
          <div className='container-left' >
            <ReportConsumption
            />
          </div>
          <div className='container-right' >
            <SupplierCompanies
            />
          </div>
        </main>
      </div>
    </ConsumptionProvider>
  );
}

export default Main;
