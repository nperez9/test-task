import React, { useState } from "react";

import Resume from "./Resume";
import { Steps } from "./Wallet.types";

const Wallet = () => {
  const [step, setStep] = useState<Steps>(Steps.RESUME);

  return <Resume />;
};

export default Wallet;