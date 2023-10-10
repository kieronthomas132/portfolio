import { Input, Textarea } from "@nextui-org/react";
import { formArray } from "./FormArray.tsx";
const Form = () => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-5 px-2 pt-5 w-[95%] sm:grid-cols-2 md:w-[100%] md:px-0">
      <div className="pt-2.5">
        <Input
          type={formArray.firstName.type}
          name={formArray.firstName.name}
          id={formArray.firstName.id}
          color="primary"
          label={formArray.firstName.label}
          isRequired={formArray.firstName.isRequired}
          variant="bordered"
          isClearable={formArray.firstName.isClearable}
          radius="lg"
        />
      </div>
      <div>
        <div className="pt-2.5">
          <Input
            type={formArray.lastName.type}
            name={formArray.lastName.name}
            id={formArray.lastName.id}
            color="primary"
            label={formArray.lastName.label}
            isRequired={formArray.lastName.isRequired}
            variant="bordered"
            isClearable={formArray.lastName.isClearable}
            radius="lg"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="pt-2.5">
          <Input
            type={formArray.email.type}
            name={formArray.email.name}
            id={formArray.email.id}
            color="primary"
            label={formArray.email.label}
            isRequired={formArray.email.isRequired}
            variant="bordered"
            isClearable={formArray.email.isClearable}
            radius="lg"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="pt-2.5">
          <Textarea
            type={formArray.message.type}
            name={formArray.message.name}
            id={formArray.message.id}
            color="primary"
            label={formArray.message.label}
            isRequired={formArray.message.isRequired}
            variant="bordered"
            labelPlacement="outside"
            radius="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
