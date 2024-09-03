import { useState } from "react";
import { toast } from "react-toastify";

const BMIcalculater = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const CalculatebBMI = (e) => {
    e.preventDefault();
    if (!height || !weight || !gender) {
      toast.error("Enter your vaild height,weight ,gender");
      return;
    }
    const heightInMeter = height / 100;
    const bmivalue = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    setBmi(bmivalue);

    if (bmivalue < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advise from a healthcare provider."
      );
    } else if (bmivalue >= 18.5 && bmivalue < 24.5) {
      toast.success(
        "You have normal weight. Keep maintaing a healthy lifestyle."
      );
    } else if (bmivalue >= 25 && bmivalue < 30.9) {
      toast.warning(
        "You are overweight. Consider seeking advide from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist.."
      );
    }
  };
  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={CalculatebBMI}>
            <div>
              <label> height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label> weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label> Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />
        </div>
      </div>
    </section>
  );
};

export default BMIcalculater;
