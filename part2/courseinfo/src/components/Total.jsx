const Total = ({parts}) => {
  const sum = parts.reduce((n, { exercises }) => n + exercises, 0);

  return <i>total exercises: {sum}</i>;
};

export default Total;
