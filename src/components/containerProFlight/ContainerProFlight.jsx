import { useEffect, useState } from "react";
import ArrowLeft from "../../svg/ArrowLeft";
import ArrowRigth from "../../svg/ArrowRigth";
import ProFlight from "../ProFlight/ProFlight";
import classes from "./ContainerProFlight.module.css";

const ContainerProFlight = () => {
  const [logoArray, setLogoArray] = useState([]);
  const [index, setIndex] = useState(0);

  const removeElement = () => {
    if (index === logoArray.length - 1 && 0 !== logoArray.length - 1) {
      setIndex(logoArray.length - 2);
      let array = logoArray.filter((el) => el.index !== logoArray.length - 1);
      array = setActive(array.length - 1, array);
      console.log(array);
      setLogoArray(array);
    } else {
      setLogoArray(logoArray.filter((el) => el.index !== logoArray.length - 1));
      if (0 === logoArray.length - 1) {
        setIndex(0);
      }
    }
  };

  const addElement = () => {
    setLogoArray([...logoArray, { active: false, index: logoArray.length }]);
    console.log([...logoArray, { active: false, index: logoArray.length }]);
  };

  const setActive = (indexActive, array = []) => {
    if (array.length > 0) {
      return array.map((e, i) => {
        return {
          active: e.active ? false : i === indexActive ? true : false,
          index: i,
        };
      });
    } else {
      setLogoArray(
        logoArray.map((e, i) => {
          return {
            active: e.active ? false : i === indexActive ? true : false,
            index: i,
          };
        })
      );
    }
  };

  const moreArray = () => {
    if (logoArray.length - 1 === 0) {
      return;
    }
    if (logoArray.length - 1 === index) {
      setIndex(0);
      setActive(0);
      return;
    } else {
      setIndex(index + 1);
      setActive(index + 1);
      return;
    }
  };

  const lessArray = () => {
    if (logoArray.length - 1 === 0) {
      return;
    }
    if (index === 0) {
      setIndex(logoArray.length - 1);
      setActive(logoArray.length - 1);
    } else {
      setIndex(index - 1);
      setActive(index - 1);
    }
  };

  useEffect(() => {
    setLogoArray([
      { active: true, index: 0 },
      { active: false, index: 1 },
      { active: false, index: 2 },
      { active: false, index: 3 },
    ]);
  }, []);

  return (
    <div>
      <div className={classes.containerMain}>
        <div className={classes.containerMainArrow} onClick={() => lessArray()}>
          <button>
            <ArrowLeft />
          </button>
        </div>
        <div className={classes.containerMainImages}>
          {logoArray.length > 0 &&
            logoArray.map((image, i) => (
              <ProFlight key={`key-${i}`} active={image.active} />
            ))}
        </div>

        <div className={classes.containerMainArrow} onClick={() => moreArray()}>
          <button>
            <ArrowRigth />
          </button>
        </div>
      </div>
      <div className={classes.containerAddRemove}>
        <div className={classes.removeElement} onClick={() => removeElement()}>
          <button>Remove</button>
        </div>
        <div className={classes.addElement} onClick={() => addElement()}>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ContainerProFlight;
