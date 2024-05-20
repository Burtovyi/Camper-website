import PropTypes from 'prop-types';
import css from "./VehicleDetails.module.css";
import { useMemo } from 'react';

export default function VehicleDetails({
  form,
  length,
  width,
height,
  tank,
  consumption,
}) {
  const addSpace = useMemo(() => (string) => {
    return string.replace(/([0-9.]+)([a-zA-Z]+)/, "$1 $2");
  }, []);

  const {
    vehicleDetailsContainer,
    title,
    vehicleDetailsList,
    vehicleDetailsItem,
    text
  } = css;

  return (
    <div className={vehicleDetailsContainer}>
      <h3 className={title}>Vehicle details</h3>
      <ul className={vehicleDetailsList}>
        <li className={vehicleDetailsItem}>
          <p>Form</p>
          <p className={text}>{form}</p>
        </li>
        <li className={vehicleDetailsItem}>
          <p>Length</p>
          <p className={text}>{addSpace(length)}</p>
        </li>
        <li className={vehicleDetailsItem}>
          <p>Width</p>
          <p className={text}>{addSpace(width)}</p>
        </li>
        <li className={vehicleDetailsItem}>
          <p>Height</p>
          <p className={text}>{addSpace(height)}</p>
        </li>
        <li className={vehicleDetailsItem}>
          <p>Tank</p>
          <p className={text}>{addSpace(tank)}</p>
        </li>
        <li className={vehicleDetailsItem}>
          <p>Consumption</p>
          <p className={text}>{consumption}</p>
        </li>
      </ul>
    </div>
  );
}

VehicleDetails.propTypes = {
  form: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  tank: PropTypes.string.isRequired,
  consumption: PropTypes.string.isRequired,
};