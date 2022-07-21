import { useCallback } from "react";
import { debounce } from "lodash";

const InputComponent = () => {
  const handleOnChange = useCallback(() => {
    console.log("esse log aparece");
    debounce(() => {
      return console.log("esse log não aparece");
    }, [500])();
  }, []);

  return <input type="text" onChange={handleOnChange} />;
};
export default InputComponent;
