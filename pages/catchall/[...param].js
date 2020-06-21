export default function CatchAllRoute(props) {
  return (
  <span>If there is a period followed by a two-digit number in the URL, it will append `00` here on client-side rendering: {props.param}</span>
  );
}

export const getServerSideProps = (context) => {
  console.log('Param on the server', context.params.param);
  return {
    props: {
      param: context.params.param,
    },
  };
};
