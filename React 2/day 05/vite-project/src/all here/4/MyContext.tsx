import { createContext, useState, type FC, type ReactNode } from "react";

interface Mycont {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const MyContext = createContext<Mycont>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;