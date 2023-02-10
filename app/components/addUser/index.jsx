import { Form } from "@remix-run/react";

const AddUserForm = () => {
  const listInput = [
    {
      id: "name",
      type: "text",
      name: "name",
      placeholder: "Enter Name . . .",
      text: "Name",
    },
    {
      id: "LastName",
      type: "text",
      name: "lastName",
      placeholder: "Enter Last Name . . .",
      text: "Last Name",
    },
    {
      id: "number",
      type: "tel",
      name: "numberPhone",
      placeholder: "Enter  Phone Number . . .",
      text: "Phone Number",
    },
    {
      id: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter Email . . .",
      text: "Email",
    },
  ];

  return (
    <>
      <Form className="Form" method="post" action="/concat">
        {listInput.map((item) => {
          return (
            <div key={item.id} className="div">
              <label htmlFor={item.id}>{item.text}</label>
              <input
                type={item.type}
                id={item.id}
                placeholder={item.placeholder}
                name={item.name}
                required
              />
            </div>
          );
        })}
        <div>
          <label for="gender" id="genderLabel">
            Choose a Gender:
          </label>
          <select id="gender" name="gender">
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
        </div>

        <button className="buttonSave" type="submit" value={"save"}>
          Save
        </button>
      </Form>
    </>
  );
};
export default AddUserForm;
