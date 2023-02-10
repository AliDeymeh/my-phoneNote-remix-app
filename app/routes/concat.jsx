import { redirect } from "@remix-run/node";
import AddUserForm from "../components/addUser";
import { getContact, storeConcat } from "../data/listContact";
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <AddUserForm />
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const concat = Object.fromEntries(formData);
  const existConcat = await getContact();
  concat.id = new Date().toISOString();
  const updateConcat = existConcat.concat(concat);
  await storeConcat(updateConcat);
  return redirect("/concat");
}
