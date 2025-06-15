import { FC } from 'react';

type Username = {
    name: string;
    age: number;
    isSigma: boolean;
};

const User5: FC<Username> = ({name, age, isSigma}) => {
  return (
    <>
    <div>----------------</div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{String(isSigma)}</p>
    </>
  );
};

export default User5;