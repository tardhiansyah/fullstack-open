const Filter = (props) => {
  return (
    <div>
      filter shown with name:
      <input filter={PaymentResponse.filter} onChange={props.onChange} />
    </div>
  );
};

export default Filter;
