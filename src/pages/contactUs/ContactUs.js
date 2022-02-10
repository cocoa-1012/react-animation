// import { motion } from "framer-motion";
// import { init, send } from "@emailjs/browser";
import * as emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Header } from "../../components/header/Header";

emailjs.init("user_I3xoLdpSzx2QscwoOeLZL");

export const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      country: "",
      city: "",
      skills: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      country: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      city: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      skills: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      //   send("service_ubgk55l", "template_eeauv7m");
      sendMessage(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const sendMessage = (event) => {
    event.preventDefault();
    if (!this.validateMail()) {
      return;
    }
    const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: this.fullname,
      feedback: this.state.feedback,
    };
    emailjs
      .send("gmail", "portfoliositecontact", templateParams, "template_eeauv7m")
      .then(
        function (response) {
          toast.success("Your message has successfully sent!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          toast.error("Your message was not able to be sent");
        }
      );
    this.setState({
      name: "",
      email: "",
      feedback: "",
    });
  };

  const formikErrorClass =
    "absolute bottom-0 text-red-700 text-left font-semibold drop-shadow-[1px_1px_2px_rgba(255,255,255,1)]";
  const labelClass = "ml-2 text-left text-white font-semibold";
  const inputClass =
    "w-[386px] h-[55px] rounded-[15px] bg-[#eeee99] p-4 mb-6 focus:bg-[#ffffff] focus:outline-none drop-shadow-[5px_6px_3px_rgba(0,0,0,0.6)]";
  const itemClass = "relative flex flex-col";
  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-gradient-to-t from-[#ff3399] to-[#3399ff] overflow-hidden p-0 m-0 flex justify-center items-center">
        <div className="flex flex-col">
          <p className="mt-[50px] text-white text-[20px] font-semibold">
            Send to SkySkills
          </p>
          <form onSubmit={formik.handleSubmit} className="flex flex-col">
            <div className={itemClass}>
              <label htmlFor="fullname" className={labelClass}>
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                {...formik.getFieldProps("fullname")}
                placeholder="Full Name"
                className={inputClass}
              />
              {formik.touched.fullname && formik.errors.fullname ? (
                <div className={formikErrorClass}>
                  * {formik.errors.fullname}
                </div>
              ) : null}
            </div>
            <div className={itemClass}>
              <label htmlFor="country" className={labelClass}>
                Country
              </label>
              <input
                id="country"
                type="text"
                {...formik.getFieldProps("country")}
                placeholder="Country"
                className={inputClass}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className={formikErrorClass}>
                  * {formik.errors.country}
                </div>
              ) : null}
            </div>
            <div className={itemClass}>
              <label htmlFor="city" className={labelClass}>
                City
              </label>
              <input
                id="city"
                type="text"
                {...formik.getFieldProps("city")}
                placeholder="City"
                className={inputClass}
              />
              {formik.touched.city && formik.errors.city ? (
                <div className={formikErrorClass}>* {formik.errors.city}</div>
              ) : null}
            </div>
            <div className={itemClass}>
              <label htmlFor="skills" className={labelClass}>
                Skills
              </label>
              <input
                id="skills"
                type="text"
                {...formik.getFieldProps("skills")}
                placeholder="Skills"
                className={inputClass}
              />
              {formik.touched.skills && formik.errors.skills ? (
                <div className={formikErrorClass}>* {formik.errors.skills}</div>
              ) : null}
            </div>
            <div className={itemClass}>
              <label htmlFor="firstName" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
                placeholder="Email"
                className={inputClass}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={formikErrorClass}>* {formik.errors.email}</div>
              ) : null}
            </div>
            <button
              className="bg-[#12e4bd] h-[55px] w-[386px] rounded-[15px] p-2   mt-12 drop-shadow-[5px_6px_3px_rgba(0,0,0,0.6)]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
