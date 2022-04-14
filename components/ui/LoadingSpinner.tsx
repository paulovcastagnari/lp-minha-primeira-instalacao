interface LoadingSpinnerProps {
  spinner: "FOLDING_CUBE" | "GRID_SCALE" | "STD_CIRCLE";
  overlay?: boolean;
  overlayFixed?: boolean;
  overlayFixedFullScreen?: boolean;
  overlaytransparent?: boolean;
}

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const {
    spinner,
    overlay = false,
    overlaytransparent = false,
    overlayFixedFullScreen = false,
    overlayFixed = false,
  } = props;

  return (
    <div
      className={`spinner ${overlay ? "spinner__overlay" : ""} ${
        overlaytransparent ? "spinner__overlay-transparent" : ""
      } ${overlayFixed ? "spinner__overlay--fixed" : ""} ${
        overlayFixedFullScreen ? "spinner__overlay--fixed-full-screen" : ""
      }`}
    >
      {spinner === "FOLDING_CUBE" && (
        <div className="spinner__folding-cube">
          <div className="spinner__folding-cube-element spinner__folding-cube-element--1"></div>
          <div className="spinner__folding-cube-element spinner__folding-cube-element--2"></div>
          <div className="spinner__folding-cube-element spinner__folding-cube-element--4"></div>
          <div className="spinner__folding-cube-element spinner__folding-cube-element--3"></div>
        </div>
      )}
      {spinner === "GRID_SCALE" && (
        <div className="spinner__grid-scale">
          <div className="spinner__grid-scale-element spinner__grid-scale-element--1"></div>
          <div className="spinner__grid-scale-element spinner__grid-scale-element--2"></div>
          <div className="spinner__grid-scale-element spinner__grid-scale-element--3"></div>
          <div className="spinner__grid-scale-element spinner__grid-scale-element--4"></div>
          <div className="spinner__grid-scale-element spinner__grid-scale-element--5"></div>
          <div className="spinner__grid-scale-element spinner__grid-scale-element--6"></div>
          <div className="spinner__grid-scale-element spinner__grid-scale-element--7"></div>
          <div className="spinner__grid-scale-element spinner__grid-scale-element--8"></div>
          <div className="spinner__grid-scale-element spinner__grid-scale-element--9"></div>
        </div>
      )}
      {spinner === "STD_CIRCLE" && (
        <div className="spinner__std-circle">
          <div className="spinner__std-circle-element--1 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--2 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--3 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--4 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--5 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--6 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--7 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--8 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--9 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--10 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--11 spinner__std-circle-element"></div>
          <div className="spinner__std-circle-element--12 spinner__std-circle-element"></div>
        </div>
      )}
    </div>
  );
};
