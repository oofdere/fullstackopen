import Input from "./Input";

const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  onSubmit,
}) => {
  return (
    <form>
      <Input label="name" value={newName} setfn={setNewName} />
      <Input label="number" value={newNumber} setfn={setNewNumber} />
      <div>
        <button type="submit" onClick={onSubmit}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
