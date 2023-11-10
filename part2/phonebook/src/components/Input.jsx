const Input = ({ label, value, setfn }) => {
  return (
    <div>
      {label}:
      <input value={value} onChange={(e) => setfn(e.target.value)} required />
    </div>
  );
};

export default Input;
