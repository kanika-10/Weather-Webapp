import CircularProgress from "@mui/material/CircularProgress";

const LoadingComponentSpinner = () => {
  return (
    <div
      style={{
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default LoadingComponentSpinner;
