import { useState, useRef, SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@nextui-org/react";
import Form from "./Form.tsx";
const Contact = () => {
  const [sendEmail, setSendEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();

    const formElements = form.current?.elements;

    if (!formElements) {
      return;
    }

    let errorMessage = "";

    Array.from(formElements).forEach((element) => {
      const inputElement = element as HTMLInputElement | HTMLTextAreaElement;
      const { name, value } = inputElement;

      switch (name) {
        case "first_name":
          if (!value.trim()) {
            errorMessage = "Please enter your first name.";
          }
          break;
        case "email":
          if (!value.trim()) {
            errorMessage = "Please enter your email address.";
          }
          break;
        case "message":
          if (!value.trim()) {
            errorMessage = "Please enter a message before sending.";
          }
          break;
        default:
          break;
      }
    });

    if (errorMessage) {
      setSendEmail(errorMessage);
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID || "",
        import.meta.env.VITE_TEMPLATE_ID || "",
        form.current as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_ID || "",
      )
      .then(
        (result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
          setSendEmail("Your message has been sent, Thank you!");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div
      className="text-white md:w-[80%] w-full mx-auto h-[750px] md:h-full relative font-inter pt-[45px] md:mt-[150px] isolate sm:py-20 "
      id="contact"
      ref={ref}
    >
      <h1 className="md:text-7xl w-[95%] md:w-[70%] mx-auto text-6xl text-neutral-400 font-bold">
        Contact
      </h1>
      <form ref={form} onSubmit={handleClick}>
        <div className="flex justify-center my-5">
          {loading ? (
            <CircularProgress color="secondary" label="Sending Message" />
          ) : null}
          <h3>{sendEmail && !loading ? sendEmail : null}</h3>
        </div>
        <div className=" w-[100%] md:w-[70%] mx-auto">
          <Form />
          <div className="py-5 md:w-[100%] w-[95%] mx-auto">
            <button
              onClick={handleClick}
              value="Send"
              type="submit"
              className="block w-full rounded-md bg-indigo-600  py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
