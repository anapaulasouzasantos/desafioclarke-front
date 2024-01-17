import { useContext } from 'react';
import { ConsumptionContext } from '../contexts/ConsumptionContext';

function useConsumption() {
    return useContext(ConsumptionContext);
}

export default useConsumption;