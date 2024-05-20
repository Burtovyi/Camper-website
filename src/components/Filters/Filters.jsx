import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { MdOutlineAir } from "react-icons/md";
import { TbAutomaticGearbox, TbToolsKitchen2 } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

import { setFilters } from "../../redux/filters/slice";
import sprite from "../../assets/images/symbol-defs.svg";
import css from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(setFilters(values));
  };

  return (
    <div className={css.filtersContainer}>
      <h2 className="visually-hidden">Filters</h2>

      <Formik
        initialValues={{
          location: "",
          airConditioner: false,
          automatic: false,
          kitchen: false,
          TV: false,
          shower: false,
          panelTruck: false,
          fullyIntegrated: false,
          alcove: false,
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <p className={css.title}>Location</p>
          <label className={css.labelLocation}>
            <Field className={css.inputLocation} type="text" name="location" />
            <span>
              <CiLocationOn className={css.locationIcon} />
            </span>
          </label>

          <p className={css.title}>Filters</p>
          <p className={css.groupFilter} id="group-equipment">
            Vehicle equipment
          </p>
          <div className={css.line}></div>
          <div
            className={css.role}
            role="group"
            aria-labelledby="checkbox-group-equipment"
          >
            <label className={css.labelCheckbox}>
              <Field
                style={{ display: "none" }}
                type="checkbox"
                name="airConditioner"
              />
              <span className={css.textCheckbox}>
                <MdOutlineAir className={css.icon} />
                AC
              </span>
            </label>
            <label className={css.labelCheckbox}>
              <Field
                style={{ display: "none" }}
                type="checkbox"
                name="automatic"
              />
              <span className={css.textCheckbox}>
                <TbAutomaticGearbox className={css.icon} />
                Automatic
              </span>
            </label>

            <label className={css.labelCheckbox}>
              <Field
                style={{ display: "none" }}
                type="checkbox"
                name="kitchen"
              />
              <span className={css.textCheckbox}>
                <TbToolsKitchen2 className={css.icon} />
                Kitchen
              </span>
            </label>
            <label className={css.labelCheckbox}>
              <Field
                style={{ display: "none" }}
                type="checkbox"
                name="TV"
              />
              <span className={css.textCheckbox}>
                <PiTelevisionSimple className={css.icon} />
                TV
              </span>
            </label>
            <label className={css.labelCheckbox}>
              <Field
                style={{ display: "none" }}
                type="checkbox"
                name="shower"
              />
              <span className={css.textCheckbox}>
                <LuShowerHead className={css.icon} />
                Shower/WC
              </span>
            </label>
          </div>

          <p className={css.groupFilter} id="checkbox-group-type">
            Vehicle type
          </p>
          <div className={css.line}></div>
          <div
            className={css.role}
            role="group"
            aria-labelledby="checkbox-group-type"
          >
            <label className={css.labelCheckbox}>
              <Field
                style={{ display: "none" }}
                type="checkbox"
                name="panelTruck"
              />
              <span className={css.textCheckbox}>
                <svg className={css.icon}>
                  <use href={`${sprite}#icon-van`} />
                </svg>
                Van
              </span>
            </label>
            <label className={css.labelCheckbox}>
              <Field
                style={{ display: "none" }}
                type="checkbox"
                name="fullyIntegrated"
              />
              <span className={css.textCheckbox}>
                <svg className={css.icon}>
                  <use href={`${sprite}#icon-inregrated`} />
                </svg>
                Fully Integrated
              </span>
            </label>

            <label className={css.labelCheckbox}>
              <Field
                style={{ display: "none" }}
                type="checkbox"
                name="alcove"
              />
              <span className={css.textCheckbox}>
                <svg className={css.icon}>
                  <use href={`${sprite}#icon-alcove`} />
                </svg>
                Alcove
              </span>
            </label>
          </div>

          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}