import { BsFire } from "react-icons/bs";
import { CgSmartHomeRefrigerator, CgTv } from "react-icons/cg";
import { FaBath, FaFireBurner } from "react-icons/fa6";
import { IoBedOutline, IoPeopleOutline, IoWaterOutline } from "react-icons/io5";
import { LuDisc3, LuShowerHead } from "react-icons/lu";
import { MdOutlineAir, MdOutlineLocalGasStation, MdOutlineRadio } from "react-icons/md";
import { TbAirConditioning, TbAutomaticGearbox, TbToiletPaper, TbToolsKitchen2 } from "react-icons/tb";
import css from "./PropsList.module.css";

export default function PropsList({ camper: { adults, engine, transmission, details }, length }) {
  const detailsArray = [
    {
      prop: "engine",
      value: engine.charAt(0).toUpperCase() + engine.slice(1),
      icon: <MdOutlineLocalGasStation />,
    },
    {
      prop: "transmission",
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      icon: <TbAutomaticGearbox />,
    },
    {
      prop: "adults",
      value: `${adults} adult${adults > 1 ? "s" : ""}`,
      icon: <IoPeopleOutline />,
    },
    {
      prop: "AC",
      value: "AC",
      icon: <MdOutlineAir />,
    },
    {
      prop: "airConditioner",
      value: details.airConditioner ? `${details.airConditioner} Air conditioner` : false,
      icon: <TbAirConditioning />,
    },
    {
      prop: "bathroom",
      value: details.bathroom ? "Bathtub" : false,
      icon: <FaBath />,
    },
    {
      prop: "shower",
      value: details.shower ? "Shower" : false,
      icon: <LuShowerHead />,
    },
    {
      prop: "kitchen",
      value: details.kitchen ? "Kitchen" : false,
      icon: <TbToolsKitchen2 />,
    },
    {
      prop: "beds",
      value: details.beds ? `${details.beds} bed${details.beds > 1 ? "s" : ""}` : false,
      icon: <IoBedOutline />,
    },
    {
      prop: "TV",
      value: details.TV ? "TV" : false,
      icon: <CgTv />,
    },
    {
      prop: "CD",
      value: details.CD ? "CD" : false,
      icon: <LuDisc3 />,
    },
    {
      prop: "radio",
      value: details.radio ? "Radio" : false,
      icon: <MdOutlineRadio />,
    },
    {
      prop: "toilet",
      value: details.toilet ? "Toilet" : false,
      icon: <TbToiletPaper />,
    },
    {
      prop: "freezer",
      value: details.freezer ? "Fridge" : false,
      icon: <CgSmartHomeRefrigerator />,
    },
    {
      prop: "hob",
      value: details.hob ? `${details.hob} Hob${details.hob > 1 ? "s" : ""}` : false,
      icon: <FaFireBurner />,
    },
    {
      prop: "microwave",
      value: details.microwave ? "Microwave" : false,
      icon: <CgSmartHomeRefrigerator />,
    },
    {
      prop: "gas",
      value: details.gas ? "Gas" : false,
      icon: <BsFire />,
    },
    {
      prop: "water",
      value: details.water ? "Water" : false,
      icon: <IoWaterOutline />,
    },
  ];

  return (
    <ul className={css.list}>
      {detailsArray
        .filter(({ value }) => value)
        .slice(0, length || detailsArray.length)
        .map(({ icon, value }, index) => (
          <li key={index} className={css.item}>
            <p className={css.text}>{icon}</p>
            {value}
          </li>
        ))}
    </ul>
  );
}