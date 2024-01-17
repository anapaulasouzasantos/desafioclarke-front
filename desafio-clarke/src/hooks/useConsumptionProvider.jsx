import { useState } from 'react';

const useConsumptionProvider = () => {
    const [consumption, setConsumption] = useState('');
    const [supplier, setSupplier] = useState([]);
    const [showTable, setShowTable] = useState(false);

    return {
        consumption,
        setConsumption,
        supplier,
        setSupplier,
        showTable,
        setShowTable
    }
}

export default useConsumptionProvider;