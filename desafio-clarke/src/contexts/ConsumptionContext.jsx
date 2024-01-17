import { createContext } from "react";
import useConsumptionProvider from '../hooks/useConsumptionProvider';

export const ConsumptionContext = createContext({});

export const ConsumptionProvider = (props) => {
    const valuesProvider = useConsumptionProvider();
    return (
        <ConsumptionContext.Provider value={valuesProvider}>
            {props.children}
        </ConsumptionContext.Provider>
    )
}